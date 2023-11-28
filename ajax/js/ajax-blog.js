"use strict";

let blogs;
// TODO: Create an AJAX GET request for the file under data/inventory.json
let response = fetch("../data/blog.json")
    .then(response => response.json())
    .then(data => (insertData(blogs = data)))
    .catch(err => console.log(err)); // print your data

function insertData(blogs) {
    blogs.forEach((element) => {
        document.getElementById('posts').appendChild(document.createElement('h2')).innerText = element.title;
        document.getElementById('posts').appendChild(document.createElement('p')).innerText = element.date;

        document.getElementById('posts').appendChild(document.createElement('p')).innerText = element.content;
        let ul = document.getElementById('posts').appendChild(document.createElement('ul'));

        element.categories.forEach((category) => {
            ul.appendChild(document.createElement('li')).innerText = category;
        })

    })
}