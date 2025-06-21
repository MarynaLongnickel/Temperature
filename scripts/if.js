console.log('Condition');

if(3 < 5) {
    console.log('This is true');
}

let student1 = 45;
let student2 = 45;

if(student1 == student2) {
    console.log('THe values are the same');
}

let ifTrue = false;

if(isFinite == true) {
    console.log('Yes')
}
else {
    console.log('No');
}

let waterTemp = 92;

if(waterTemp >= 100) {
    console.log('Water is boiling');
}
else {
    console.log('Water is not boiling');
}


// 1

// let age = 21;

// if(age >= 21) {
//     console.log('you are an adult');
// }
// else {
//     console.log('you are underage');
// }

// age = prompt('Enter your age: ')

// if(age < 13) {
//     console.log('You are a child');
// }
// else if(age < 21) {
//     console.log('You are a teenager');
// }
// else if(age < 64) {
//     console.log('You are an adult');
// }
// else {
//     console.log('You are a senior');
// }


// 2

// trafficLight = prompt('Enter traffic light color: ')

// if(trafficLight == 'green') {
//     console.log('YGo!');
// }
// else if(trafficLight == 'yellow') {
//     console.log('Slow down');
// }
// else if(trafficLight == 'red') {
//     console.log('Stop');
// }
// else {
//     console.log('Please enter one of (green, yellow, red)');
// }

// 3

function weatherOutfit() {
    temp = prompt('Enter temperature: ')

    if(temp < 15) {
        console.log('Wear a jacket');
    }
    else if(temp < 25) {
        console.log('Wear a sweater');
    }
    else if(temp > 25) {
        console.log('Wear a t-shirt');
    }
    else {
        console.log('Invalid input');
    }
}

weatherOutfit()