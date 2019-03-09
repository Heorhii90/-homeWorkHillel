
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


function questions(numberQuestion) {
    if ((poll[numberQuestion].type) == 'prompt') {
        answerPoll = prompt(poll[numberQuestion].question);
        if (answerPoll == poll[numberQuestion].answer)
            points += 10;
    } else {
        answerPoll = confirm(poll[numberQuestion].question);
        if (answerPoll == poll[numberQuestion].answer)
            points += 10;
    }
    return points;
}
for (let i = 0; i < poll.length; i++) {
    questions(i);
}
alert('Ваш результат: ' + points + ' баллов');