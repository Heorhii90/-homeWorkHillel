"use strict"

let nameUser = document.getElementsByTagName('h1');
const question = enterNameUser('введите ваше имя', '');
const numberUser = enterNumber('введите количество создаваемых ячеек', '');

nameUser = 'Hello ' + question;
document.body.innerHTML = nameUser;

function enterNameUser(firstQuestion) {
    let text = prompt(firstQuestion, '');
    if (!isNaN(text) ||
        text === null ||
        text === '') {
        alert('введите ваше имя');
        return enterNameUser(firstQuestion);
    }
    return text;
}


for (let i = 1; i <= numberUser; i++) {
    let li = document.createElement('li');
    li.innerHTML = i;
    document.body.appendChild(li);
}


function enterNumber(secondQuestion) {
    let number = prompt(secondQuestion, '');
    if (isNaN(number) ||
        number === null ||
        number === '' ||
        number > 100 ||
        number < 1) {
        alert('введите число от 1 до 100');
        return enterNumber(secondQuestion);
    }
    return number;
}


