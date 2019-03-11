"use strict"

let points = 0;
let answerPoll;
let poll = [
    {
        question: 'Сколько будет 2+2?',
        answer: 4,
        type: 'prompt'
    },
    {
        question: 'Солнце встает на востоке?',
        answer: true,
        type: 'confirm'
    },
    {
        question: 'Сколько будет 5 << 2 ?',
        answer: 20,
        type: 'prompt'
    }
];


function questionsPoll(questions) {
    switch (questions.type) {
        case 'prompt':
            answerPoll = prompt(questions.question, '');

            if (!validation(answerPoll)) {
                alert('Ответ должен быть числом');
                return questionsPoll(questions);
            }
            break;

        case 'confirm':
            answerPoll = confirm(questions.question);
            break;
    }
    return answerPoll == questions.answer;
}


function validation(value) {
    return !(isNaN(value) || value === null || value === '');
}


for (let i = 0; i < poll.length; i++) {
    points += questionsPoll(poll[i]) ? 10 : 0;
}

alert('Ваш результат: ' + points + ' баллов');