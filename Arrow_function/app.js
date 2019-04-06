"use strict"

const students = [
    new Student('Student 1', [10, 10, 10, 0]),
    new Student('Student 12', [10, 20])
];


function Student(name, marks) {
    this.name = name;
    this.marks = marks;
    this.averageMark = averageMark;
    this.woksDone = woksDone;
    this.addMark = addMark;
}


function averageMark() {

    return this.marks.reduce((previusValue, current) =>
        previusValue + current, 0) / this.marks.length;

}


function woksDone() {

    return this.marks.filter((number) => { return number > 0 }).length;
}


function addMark(value, ...rest) {

    return this.marks.push(value, ...rest);
}


function averageMarkAll() {
    const countMarksStudents = students.reduce((previusValue, current) =>
        previusValue + current.averageMark(), 0);

    return countMarksStudents / students.length;
}


function completePercent() {
    const worksDoneGroup = students.reduce((previousValue, currentValue) => { return previousValue + currentValue.woksDone() }, 0);
    const countsWoks = students.reduce((previousValue, currentValue) => { return previousValue + currentValue.marks.length }, 0);

    return (worksDoneGroup / countsWoks) * 100 + ' %';

}


console.log(students[0].averageMark());
console.log(students[0].addMark(10));
console.log(students[0].woksDone());
console.log(averageMarkAll());
console.log(completePercent());

