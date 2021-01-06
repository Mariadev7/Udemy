// 'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive :D');


// FUNCTIONS<--------------------------------

function logger() {
    console.log('My name is Maria');
}

//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);


// FUNCTIONS DECLARATIONS VS. EXPRESSIONS<-----------------------

//Function declaration
function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

const age1 = calcAge1(1990);
console.log(age1);

//Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1990);
console.log(age1, age2);


//Arrow Functions<------------------

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1990);
console.log(age3);

const yearUntilRetirement =  currentAge => 2057 - currentAge ;
const final = yearUntilRetirement (2020);
console.log(final);


//Functions Calling other Functions<---------------------

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
}
console.log(fruitProcessor(2, 3));


//Reviewing Functions<----------------------------------

const calcAge = function (birthYear){
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement<=0){
        return `${firstName} Has Already Retired 🎈🎈`
    }
    // return retirement
    return `${firstName} retires in ${retirement} years`
}
console.log(yearsUntilRetirement(1990,'Maria'));
console.log(yearsUntilRetirement(1970,'Maria'));


//ARRAYS <--------------------------------

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1990, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends)

const firstName = 'Maria'
const maria = [firstName, 'Foupara', 2037 - 1990, 'singer', friends];
console.log(maria);
console.log(maria.length);

//Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages)


//Basic Array Operations (Methods)

const friends = ['Michael', 'Steven', 'Peter'];

//Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

//Remove elements
friends.pop(); //Last element
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift(); //First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')){
    console.log('You have a friend called Steven')
}


//Introduction to Objects<---------------------------------------

const maria = {
    firstName: 'Maria',
    lastName: 'Papas',
    age: 2020 - 1990,
    job: 'Singer',
    friends: ['Michael', 'Peter', 'Steven']
};


//Dot Vs Bracket Notation<-------------------------------------------

// const maria = {
//     firstName: 'Maria',
//     lastName: 'Papas',
//     age: 2020 - 1990,
//     job: 'Singer',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(maria);

// console.log(maria.lastName);
// console.log(maria['lastName']);

// const nameKey = 'Name';
// console.log(maria['first' + nameKey]);
// console.log(maria['last' + nameKey]);

// // const interestedIn = prompt('What do you want to know about Maria? Choose between firstName, lastName, age, job, and friends');


// if (maria[interestedIn]) {
//     console.log(maria[interestedIn]);
// } else {
//     console.log('Wrong request!');
// };

// maria.location = 'Greece';
// maria['facebook'] = '@mariapapapo';
// console.log(maria);

//Challenge
//"Maria has 3 friends, and her best friend is called Michael"

// console.log(maria.firstName + ' has ' + maria.friends.length + ' friends and her best friend is ' + maria.friends[0]);

//Object Methods<-------------------------------------------
const maria = {
    firstName: 'Maria',
    lastName: 'Papas',
    birthYear: 1990,
    job: 'Singer',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }
//     calcAge: function () {
//         return 2037 - this.birthYear
//     }

calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
    },

 getSummary: function(){
    return `${this.firstName} is a ${this.calcAge()}  year old ${maria.job}, and she has ${this.hasDriversLicense ? 'a': 'no'} driver's license.`
}

}



console.log(maria.calcAge());
console.log(maria.age);
console.log(maria.age);
console.log(maria.age);

//Challenge
//"Maria is a 47-year old singer, and she has a driver's license"

console.log(maria.getSummary());


//Iteration: THE FOR LOOP<-----------------------------------------

for loop keeps running while condition is TRUE
for(let rep = 1; rep <=10; rep++){
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}

//Example<---------------------------------------------------
let i;
let x = '';
for (i = 0; i <= 20; i++) {
    x = x + '*'
    console.log(x)
}


//Looping Arrays, Breaking and Continuing<---------------------

const maria = [
    'Maria',
    'Papas',
    2020 - 1990,
    'Singer',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];


for (let i = 0; i < maria.length; i++) {
    //Reading from maria array
    console.log(maria[i], typeof maria[i]);

    //filling types array
    // types[i] = typeof maria[i];
    types.push(typeof maria[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++){
    ages.push(2037 - years[i]);
}
console.log(ages);

//Continue and break <---------------
console.log('---ONLY STRINGS---')
for (let i = 0; i < maria.length; i++) {
    if(typeof maria[i] !== 'string') continue;
    console.log(maria[i], typeof maria[i]);
}

console.log('---BREAK WITH NUMBER---')
for (let i = 0; i < maria.length; i++) {
    if(typeof maria[i] === 'number') break;
    console.log(maria[i], typeof maria[i]);
}


//Looping Backwards and loops in loops<--------------------

const maria = [
    'Maria',
    'Papas',
    2020 - 1990,
    'Singer',
    ['Michael', 'Peter', 'Steven'],
];

//0, 1, ......, 4
//4, 3, ......,0

for (let i = maria.length - 1; i >= 0; i--){
    console.log(i, maria[i]);
}

for(let exercise = 1; exercise < 4; exercise++){
   console.log(`------------Starting exercise ${exercise}`);

    for(let rep = 1; rep < 6 ; rep++){
    console.log(`Lifting weight repetition ${rep}`);
    
    for(let rep2 = 1; rep2 <7 ; rep2++){
        console.log(`Pame oloi mazi ksana gia thn ${rep2} epanalipsi`);
    }
}
}
*/
//The While Loop <---------------------------------------------------


// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weight repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//     // console.log(`WHILE: Lifting weight repetition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice);

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6)
//         console.log('Loop is about to end')
// };



