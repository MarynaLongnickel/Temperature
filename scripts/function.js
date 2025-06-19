console.log('Beep-boop');

let firstName = 'Marina';
let lastName = 'Longnickel';

// concationation
let result = `Hello ${firstName} + ${lastName}, welcome ${1 + 2}!`;
console.log(result);

// 1. decoration func
function sayHello() {
    // body of func
    console.log('Hello Cohort 59');
}

// 2. call func
sayHello();
sayHello();

// example 2
function greet(name) {
    console.log(`Hello ${name}, welcome!`);
}

greet('Tim');
greet('Alex');

// example 3
function greet2(name1, name2) {
    console.log(`Hello ${name1} and ${name2}, welcome!`);
}

greet2('Tim', 'Alex');

// doubltNum
function doubltNum() {
    let n = prompt('Enter a number: ');
    console.log(n * 2);
}

doubltNum();
doubltNum();

// example 4
function welcome() {
    let name2 = prompt('Enter your name');
    let age = prompt('Enter your age: ');

    console.log(`Welcome ${name2} - ${age}`);
}

// example 5

function addFunc(num1 = 0, num2 = 0) {
    console.log(`The total is ${num1 + num2}`);
}

addFunc(3, 5); // 8
addFunc();
addFunc(4);

// challenge 2

function combineNames(firstName = 'Unknown',
                      lastName = 'Unknown') {
    console.log(`${firstName} ${lastName}`);
}

combineNames('Alice', 'Johnson');
combineNames('Alice');
combineNames();

// challenge 3

function minToSec(mins = 0) {
    console.log(`${mins * 60}`);
}

minToSec(2);
minToSec();