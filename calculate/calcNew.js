"use strict"


function getOperand(questions) {
    let operand = prompt(questions, '');
    if (!validNumber(operand)) {
        alert('Введите число');
        return getOperand(questions);
    }
    return operand;
}


function getAction(operator) {
    let action = prompt(operator, '');
    if (!validOperator(action)) {
        alert('Введите один из предлагаемых операторов');
        return getAction(operator);
    }
    return action;
}


function calculate(operandA, operandB, action) {
    let result;
    if (action === '+') {
        result = Number(operandA) + Number(operandB);
    } else if (action === '-') {
        result = operandA - operandB;
    } else if (action === '*') {
        result = operandA * NumberoperandB;
    } else if (action === '/') {
        result = operandA / operandB;
    }
    return result;
}


function validNumber(value) {
    return !(isNaN(value) ||
        value === '' ||
        value === null);
}


function validOperator(value) {
    return (value === '+' ||
        value === '-' ||
        value === '*' ||
        value === '/');
}


const operandA = getOperand('введите превое число', '');
const operandB = getOperand('введите второе число', '');
const action = getAction('Введите оператор( + - * / )', '');
const result = calculate(operandA, operandB, action)

alert('Результат: ' + result);