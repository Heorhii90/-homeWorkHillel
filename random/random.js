"use strict"


//Задание №1
let counterEven = 0;
let numberUser = prompt('введите число');

function validationNumber(value) {
    return isNaN(value) || validationEmptyString(value);
}

function validationEmptyString(value) {
    for (let j = 0; j < numberUser.length; j++){
        if(value[j] === ' '){
            alert('введите число')
            return counterEven == 0;
        }
    }
}

function getCounterEven(numberUser) {
    numberUser.split('');
    for (let i = 0; i < numberUser.length; i++) {
        if (validationNumber(numberUser)){
            alert('введите число')
            break;
        } else if (numberUser[i] % 2 === 0) {
            counterEven++;
        }
    } return counterEven;
}

alert('Четных чисел: ' + getCounterEven(numberUser));



//Задание №2
let maxRandom;
let randomNumber1 = random(1000, 2000);
let randomNumber2 = random(1000, 2000);

function random(min, max) {
    let randomNumber = min - 0.5 + Math.random() * (max - min + 1);
    randomNumber = Math.round(randomNumber);
    return randomNumber;
}

maxRandom = Math.max(randomNumber1, randomNumber2);

console.log(maxRandom);