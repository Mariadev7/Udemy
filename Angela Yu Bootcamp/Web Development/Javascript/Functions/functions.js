// function getMilk(money){
//     let numberOfBottler = Math.floor(money/1.5);
//     console.log(`You can buy ${numberOfBottler} bottles`)

// }
// getMilk(20);


// Coding Challenge<-----------------

// let age = prompt('How old are you?');

// function lifeInWeeks(age){
//     let age2 = 90 - age;
//     let daysLeft = 365 * age2;
//     let weeksLeft = 52 * age2;
//     let monthsLeft = 12 * age2;

//     console.log(`You have ${daysLeft} days left, ${weeksLeft} weeks left and ${monthsLeft} untile 90 years old`);

// }
// lifeInWeeks(age)

//Calculate BMI<-------------

// function calc(weight,height){
//     let bmi = weight / (height*2)
//     return Math.round(bmi);
// }
// let total = calc(65,1.70)
// console.log(total);

//Love Calculator<------------

// let person1 = prompt("What is your name?");
// let person2 = prompt("Tell me the name of the person you love")


// function calc() {
//     let n = Math.random();
//     n = n * 100;
//     n = Math.floor(n) + 1;

//     function love() {
//         if (n <= 30) {
//             return alert(`You love each other ${n}%, you should break up`);
//         } else if (n >= 31 && n <= 70) {
//             return alert(`You love each other ${n}%, your love is ok`)
//         } else if (n >= 71) {
//             return alert(`You love each other ${n}%, your love is strong`)
//         }
//     } love()

// }
// calc()

//Arrays<-------------------

// let guestList = ["Maria", "Jim", "George", "Teo", "Irene", "Tereza"]

// let name = prompt("Give me a name")

// if (guestList.includes(name)){
//     console.log('Yes,there is this name');
// }else{
//     console.log('No, there is not this name')
// }
