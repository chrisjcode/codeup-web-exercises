// Under the FAQ, add 3 unordered lists like above. Each list should contain a national park name in an h3 element, and a ul of 4 facts about the park.
//
let newUl = document.getElementsByTagName('h1')[0].appendChild(document.createElement('ul'));

for (let i = 0; i <= 3; i++) {
    newUl = document.getElementsByTagName('h1')[0].appendChild(document.createElement('ul'))
    for (let j = 0; j <= 4; j++) {
        let li = newUl.appendChild(document.createElement('li'));

        let newSpan = li.appendChild(document.createElement('span'));

        newSpan.innerHTML = "Facts about Park"
    }
}

for (let elementsByTagNameElement of document.getElementsByTagName('h3')) {
    elementsByTagNameElement.addEventListener("click", (event) => {
        for (const nextElementsChild of    event.target.nextElementSibling.children) {
            // console.log(nextElementsChild);
            nextElementsChild.style.fontWeight = 'bold';
        }
    })
}


