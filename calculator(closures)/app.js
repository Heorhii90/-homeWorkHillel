"use strict"

const value = calculator(10);


function calculator(basicValue) {
    return {
        add: function getAdd(value) {
            return basicValue + value;
        },
        sub: function getSub(value) {
            return basicValue - value;
        },
        divide: function getDivide(value) {
            return basicValue / value;
        },
        mult: function getMult(value) {
            return basicValue * value;
        },
        set: function setBasicValue(value) {
            return basicValue = value;
        },
        get: function getBasicValue() {
            return basicValue;
        }
    }
}


console.log(value.add(45)) // возвращает 55
console.log(value.sub(45))// возвращает -35
console.log(value.divide(5)) // возвращает 2
console.log(value.mult(5)) // возвращает 50
console.log(value.set(100)) // устанавливает базовое значение в 100
console.log(value.get()) // возвращает базовое значение (в данный момент 100)
console.log(value.mult(5)) // возвращает 500
