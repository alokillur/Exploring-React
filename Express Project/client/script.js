function handelRedirectlogin(e) {
    e.preventDefault();
    window.location.href = "register.html";
}

function handelRedirectToLogin(event) {
    event.preventDefault();
    window.location.href = "login.html";
}

function handelRedirectToRegister(event) {
    event.preventDefault();
    window.location.href = "register.html";
}

async function handleFormClickRegister(e) {
    e.preventDefault();

    const formData = {
        username: document.querySelector("#username").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value
    };

    console.log("Sending data:", formData);

    try {
        const response = await fetch("http://localhost:5001/api/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (response.ok) {
            alert("Registration successful!");
            console.log("Server response:", data);
            window.location.href = "login.html";
        } else {
            alert("Registration failed: " + (data.message || "Unknown error"));
            console.warn("Server error:", data);
        }
    } catch (error) {
        console.error("Network error:", error);
        alert("Something went wrong, please try again!");
    }
}


async function handleFormClickLogin(e) {
    e.preventDefault();

    const formData = {
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value
    };

    console.log("Sending data:", formData);

    try {
        const response = await fetch("http://localhost:5001/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (response.ok) {
            alert("Login successful!");
            console.log("Server response:", data);
            console.log(data.accesstoken);
            localStorage.setItem("token", data.accesstoken);
            window.location.href = "displayContents.html";
        } else {
            alert("Login failed: " + (data.message || "Unknown error"));
            console.warn("Server error:", data);
        }
    } catch (error) {
        console.error("Network error:", error);
        alert("Something went wrong, please try again!");
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem("token");
    const headers = {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` })
    };

    const categoryList = document.querySelector("#category-list");
    const form = document.querySelector("#add-category-form");
    const name = document.querySelector("#name");
    const price = document.querySelector("#price");

    const loadCategories = async () => {
        try {
            const response = await fetch("http://localhost:5001/api/categories", {
                headers
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.message || "Failed to fetch");

            categoryList.innerHTML = "";

            data.forEach(category => {
                const li = document.createElement("li");
                li.innerHTML = `
                    category name: ${category.name}  -------------
                    price: ${category.price}
                    <button data-id="${category.id}" class="delete-button">Delete</button>
                    <button data-id-update="${category.id}" class="update-button">Update</button>
                `;
                categoryList.appendChild(li);
            });
        } catch (err) {
            console.error("Error fetching categories:", err);
            alert("Could not load categories.");
        }
    };

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token");

        const formData = {
            name: name.value.trim(),
            price: price.value.trim()
        };

        console.log("Sending formData:", formData);

        try {
            const response = await fetch("http://localhost:5001/api/categories", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...(token && { Authorization: `Bearer ${token}` })
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.message || "Failed to add category");
            }

            name.value = "";
            price.value = "";
            loadCategories();
        } catch (err) {
            console.error("Add error:", err);
            alert("Failed to add category.");
        }
    });

    categoryList.addEventListener("click", async (e) => {
        const target = e.target;

        if (target.classList.contains("delete-button")) {
            const id = target.getAttribute("data-id");
            if (!id) return;

            try {
                const response = await fetch(`http://localhost:5001/api/categories/${id}`, {
                    method: "DELETE",
                    headers
                });

                if (!response.ok) {
                    const err = await response.json();
                    throw new Error(err.message || "Failed to delete");
                }

                loadCategories();
            } catch (err) {
                console.error("Delete error:", err);
                alert("Failed to delete category.");
            }
        }

        else if (target.classList.contains("update-button")) {
            const id = target.getAttribute("data-id-update");
            if (!id) return;

            const newName = prompt("Enter new category name:");
            const newPrice = prompt("Enter new category price:");

            if (!newName || !newPrice) {
                alert("Both name and price are required.");
                return;
            }

            const updatedData = {
                name: newName.trim(),
                price: newPrice.trim()
            };

            try {
                const response = await fetch(`http://localhost:5001/api/categories/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        ...(token && { Authorization: `Bearer ${token}` })
                    },
                    body: JSON.stringify(updatedData)
                });

                if (!response.ok) {
                    const err = await response.json();
                    throw new Error(err.message || "Failed to update category");
                }

                loadCategories();
            } catch (err) {
                console.error("Update error:", err);
                alert("Failed to update category.");
            }
        }
    });


    loadCategories();
});
