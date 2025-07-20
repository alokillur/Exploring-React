const API_URL = "https://api.github.com/users/"
const main = document.getElementById("main")
const form = document.getElementById("form")
const search = document.getElementById("search")

// async function getUser(e) {
//      e.preventDefault();
//     //  const main = document.getElementById("main")
//     //  const form = document.getElementById("form")
//      const search = document.getElementById("search")
//      const username = search.value;
//      const res = await fetch(`${API_URL}/${username}`);
//      const data = await res.json();
//      console.log(data)
// }

const getUser = async username => {
    // console.log("Entered the getUser Function");
    const res = await fetch(`${API_URL}${username}`);
    const data = await res.json();
    console.log(data)
    // console.log("Ended");
}



getUser("alokillur")

