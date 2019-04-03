"use strict"

var users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20
  }, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
  }, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
  }];


function getField(key){

    return function(obj){
        return obj[key];
    }
}


const arrName = users.map(getField('name'));
const arrAge = users.map(getField('age'));
const arrSurname = users.map(getField('surname'));


console.log(arrName);
console.log(arrAge);
console.log(arrSurname);