"use strict"

let newElementButton = document.createElement('button');
let newElementUl = document.createElement('ul');


document.body.appendChild(newElementButton);
document.body.appendChild(newElementUl);


newElementButton.addEventListener('click', createList);


function createList() {
    let newElementLi = document.createElement('li');
    newElementUl.appendChild(newElementLi);
    newElementLi.addEventListener('click', onButtonClick);
    newElementLi.addEventListener('click', function () {
        if(event.altKey){
        this.parentNode.removeChild(newElementLi);
        }
    });
}

function onButtonClick(event) {
    toggleBackground(event.target);
}

function toggleBackground(element) {
    element.style.background =
        element.style.background === 'yellow' ?
            'red' : 'yellow';
}