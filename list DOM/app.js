"use strict"

let nameUser = document.getElementsByTagName('h1');
nameUser[0].textContent = 'Hello ' + enterNameUser('введите ваше имя', '');

const numberUser = enterNumber('введите количество создаваемых ячеек', '');

function enterNameUser(firstQuestion) {
    let text = prompt(firstQuestion, '');
    if (validete(text)) {
        alert('введите ваше имя');
        return enterNameUser(firstQuestion);
    }
    return text;
}

function validete(value){
    return (!isNaN(value) ||
        value === null ||
        value === '');
}


for (let i = 1; i <= numberUser; i++) {
    let li = document.createElement('li');
    li.innerHTML = i;
    document.body.appendChild(li);
}


function enterNumber(secondQuestion) {
    let number = prompt(secondQuestion, '');
    if  (valideteNumber(number)){
        alert('введите число от 1 до 100');
        return enterNumber(secondQuestion);
    }
    return number;
}

function valideteNumber(number){
    return (isNaN(number) ||
    number === null ||
    number === '' ||
    number > 100 ||
    number < 1);
}