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

function calc(weight,height){
    let bmi = weight / (height*2)
    return Math.round(bmi);
}
let total = calc(65,1.70)
console.log(total);