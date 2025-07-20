async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();
  console.log(data.title); 
  document.body.innerHTML = `<h3>${data.title}</h3>`;
}

fetchPosts();
