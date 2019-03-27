
"use strict"

let newElementButton = document.createElement('button');
let newElementUl = document.createElement('ul');


document.body.appendChild(newElementButton);
document.body.appendChild(newElementUl);


newElementButton.addEventListener('click', createList);
newElementUl.addEventListener('click', eventClick);
newElementUl.addEventListener('click', removeElementLi);


function createList() {
    newElementUl.appendChild(document.createElement('li'));
}

function removeElementLi(event) {
    if (event.target.localName === 'li')
        if (event.altKey) event.target.remove();
}

function eventClick(event) {
    toggleBackground(event.target);
}

function toggleBackground(element) {
    if (element.localName === 'li')
        element.style.background =
            element.style.background === 'yellow' ?
                'red' : 'yellow';
}