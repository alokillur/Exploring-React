
const posts = [
    {title: 'JS', summary: 'JS is good'},
    {title: 'CSS', summary: 'CSS is interesting'}
]

function getPost() {
   setTimeout( () => {
      let output = "";
      posts.forEach((post) => output+= `<h3>${post.title}</h3><h4>${post.summary},<h4>`)
      document.body.innerHTML = output;
   }, 1000)
}

// function createPost (post, callback) {
//    setTimeout(() => {
//     posts.push(post);
//     callback();
//    },2000)
// }

// createPost({title:"IDK", summary:"Random Content"})
// .then(getPost)
// .catch(err => document.body.innerHTML = `${err}`);

function createPost (post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const num = 5;
            num > 4 ? resolve() : reject("Error")
        },2000)
    })
}

async function init () {
    try {
        await createPost({title:"IDK", summary:"Random Content"});
        getPost();
    } catch (error) {
        console.log(error);
    }
}

init();


