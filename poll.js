
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

Hellow

function questions(numberQuestion) {
    (poll[numberQuestion].type) == 'prompt'
    if(answerPoll = prompt(poll[numberQuestion].question)){
    (answerPoll == poll[numberQuestion].answer);      
    else {
        answerPoll = confirm(poll[numberQuestion].question)
        answerPoll == poll[numberQuestion].answer);
    }
}
for (let i = 0; i < poll.length; i++) {
    questions(i);
    points += 10;
}
alert('Ваш результат: ' + points + ' баллов');