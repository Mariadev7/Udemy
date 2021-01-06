/*let js ='amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

//Variable name
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

console.log(myFirstJob);

// NEXT LESSON// -----------------------

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1990;
console.log(typeof year);

console.log(typeof null);

// NEXT LESSON 3 --------------------------------------
let age = 30;
age = 31;

const birthYear= 1990;
// birthYear = 1991;

// const job;

var job = 'Programmer';
job = 'Teacher';


//NEXT LESSON 4 <----------------------------------------------
// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Papas';
console.log(firstName + ' ' + lastName);

//Assignment Operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

//Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >=18;
console.log(now - 1991 > now - 2018)


//NEXT LESSON 5 <--------------------------
//Operators Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10 
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);


//NEXT LESSON 6 <-----------------------------
// Strings & Template Literals
const firstName = 'Jonas';
const job = 'Teacher';
const birthYear = 1990;
const year = 2037;

const jonas = " I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year-birthYear} years old ${job}!`;
console.log(jonasNew);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`)


//NEXT LESSON 7 <-----------------------
// IF-ELSE STATEMENT
const age = 15;
//const isOldEnough = age >= 18;

if (age >= 18){
    console.log('Sarah can start driving license 🚗');
}else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years 👩`);
}

const birthYear = 1990;
let century; 
if(birthYear <=2000){
 century = 20;
}else {
 century = 21;
}
console.log(century);


//NEXT LESSON 8<------------------
// Type conversion 

const inputYear = '1990';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3); // 10
console.log('23' + '10' + 3); // + operators works different than the others operators (-,*,/)
console.log('23' * '2'); // 46
console.log('23' / '2'); // 11.5
console.log('23' > '18'); //true

let n = '1' + 1; // 11
n = n - 1 ; // 11-1= 10
console.log(n);


//NEXT LESSON 9<--------------
//TRUTHY AND FALSY VALUES

//5 falsy values : 0, '', undefined , null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money){
    console.log("Don't spend it all ;)");
}else{
    console.log('You should get a job!');
}

let height = 0;
if (height){
    console.log('YAY! Height is defined');
}else {
    console.log('Height is UNDEFINED'); 
}


//NEXT LESSONS 10<--------------
// Equality operators====VS====
const age = '18';
if (age===18) console.log('You just became an adult!! (strict)');

if (age==18) console.log('You just became an adult!!(loose)');

const favorite = Number(prompt("What's your favorite number?"));
console.log(typeof favorite);

if (favorite===23){
    console.log('Cool! 23 is an amazing number!');
}else if(favorite===7){
    console.log('7 is also a cool number')
}else if (favorite===9){
    console.log('9 is also a cool number')
}else {
    console.log('Number is not 23 or 7');
}

 if (favorite!==23) console.log('Why not 23?');
 

//NEXT LESSON 11 <--------------
//Boolean Logic

//NEXT LESSON 12 <----------------
// Logical Operators
const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;
// if(shouldDrive){
//     console.log('Sarah is able to drive!');
// }else{
//     console.log('Sarah cannot drive');
// }

const isTired = false; //C
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired){
    console.log('Sarah is able to drive!');
}else{
    console.log('Sarah cannot drive');
}


//NEXT LESSON 13<--------------
//The switch statement<------
const day = 'thursday';

switch (day) {
    case 'monday'://day==='monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day');
}


//NEXT LESSON 13<--------------------
//The conditional Operator

const age = 25;
age >= 18 ? console.log('I like to drink wine🍷') :
    console.log('I like to drink milk');

const drink = age >= 18 ? 'wine🍷' : 'milk🥛';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine🍷';
} else {
    drink2 = 'milk🥛';
}
console.log(drink2);
console.log(`I like to drink ${age >= 18 ? 'wine🍷' : 'milk🥛'}`);
*/


