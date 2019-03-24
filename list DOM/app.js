"use strict"

let userName = document.getElementsByTagName('h1');
userName[0].textContent = 'Hello ' + enterUserName('введите ваше имя', '');

function enterUserName(question) {
    let text = prompt(question, '');
    if (validete(text)) {
        alert('введите ваше имя');
        return enterUserName(question);
    }
    return text;
}

function enterUserNumber() {
    let number = prompt('введите количество создаваемых ячеек', '');
    if (valideteNumber(number)) {
        alert('введите число от 1 до 100');
        return enterUserNumber();
    }
    return number;
}

function validete(value) {
    return (!isNaN(value) ||
        value === null ||
        value === '');
}

function valideteNumber(number) {
    return (isNaN(number) ||
        number === null ||
        number === '' ||
        number > 100 ||
        number < 1);
}

function createList(number) {
    let newElementUl = document.createElement('ul')
    for (let i = 1; i <= number; i++) {
        let newLi = document.createElement('li');
        newLi.innerHTML = i;
        newElementUl.appendChild(newLi);
    }
    return newElementUl;
}
document.body.appendChild(createList(enterUserNumber()));
