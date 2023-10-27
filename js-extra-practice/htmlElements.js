'use strict';

function heading(str) {
    let heading1 = '<h1>'
    let heading2 = 'str + </h1>'
}

function createList(parentTag, childTag, ...arr) {
    let ulElement = document.createElement(parentTag);
    for (let i = 0; i < arr.length; i++) {
        ulElement.append(document.createElement(childTag))
    }

    let lists = ulElement.getElementsByTagName(childTag);
    arr.forEach((listItem, index) => {
        lists[index].innerHTML = listItem;
    });

    return ulElement;
}

console.log(createList('ul', 'li',...["Pizza", "Cheeseburgers", "Fries"]));
console.dir(createList('ul', 'li',...["Pizza", "Cheeseburgers", "Fries"]));
