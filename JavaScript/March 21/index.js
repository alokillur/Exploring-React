function submitForm(e) {
    e.preventDefault();
    console.log("Form Clicked")
    const text = document.getElementById("text-box");
    const userList = document.querySelector("#list");
    if(text.value === '') {
        alert("Add the text");
    } else {
       const li = document.createElement('li');
       li.textContent = text.value;
       userList.appendChild(li);
       text.value = "";
    }
    // display_text.textContent = text.value;
    // console.log(text.value);
}

// const ul = document.querySelector("#list")
// console.log(ul.children)
// ul.children[1].textContent = "HI";
// ul.firstElementChild.textContent = "Test1"

// const btn = document.querySelector(".btn")
// btn.style.backgroundColor = "gray";
// btn.style.color = "white"