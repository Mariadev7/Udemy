// Values and Variables//<------------------------
// const country = 'Greece';
// const city = 'Athens';
// let population = 5000000;

// // console.log(country);
// // console.log(city);
// // console.log(population);

// //Data Type <----------------------------------------
// let isIsland = 'Greece';
// isIsland = false;
// let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

//Let, Const, Var <--------------------------------------
// language = 'Greek';

// console.log(country);
// console.log(city);
// console.log(population);
// console.log(language);
// console.log(isIsland);

// //Basic Operators <-------------------------------------
// let halfPopulation = population / 2;
// console.log(halfPopulation);

// let inPopulation = ++population;
// console.log(inPopulation);

// let FinPop = 6000000;
// console.log(FinPop > population);

// let averageCountry = 33000000;
// console.log(population < averageCountry);

// let description = (city + " " + ' is in ' + country + ',' + ' and its ' + population + ' million people speak ' + language);
// console.log(description);

//CODING CHALLENGE No 1  <------------------------   
// const markMass = 78;
// const johnMass = 92;
// const markHeight = 1.69;
// const johnHeight = 1.95;

// const markBMI = markMass / (markHeight ** 2);
// console.log(" Mark's BMI is " + markBMI);

// const johnBMI = johnMass / (johnHeight ** 2);
// console.log(" John's BMI is " + johnBMI);

// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

//Strings and Template literals <-------------------------
// let description = `${city} is in ${country} and its ${population} million people speak ${language}`;
// console.log(description); 

//If-Else Statements <---------------------------------
// const countryPopul = 5000000;
// const average = 33000000 -countryPopul;
// if (countryPopul>33000000){
//     console.log("Greece's population is above average");
// }else {
//     console.log(`Greece's population is ${average} million below average`);
// }

//CODING CHALLENGE No 2<-------------------------
// const markMass = 78;
// const johnMass = 92;
// const markHeight = 1.69;
// const johnHeight = 1.95;

// const markBMI = markMass / (markHeight ** 2);
// const johnBMI = johnMass / (johnHeight ** 2);

// if(markBMI>johnBMI){
//     console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
// }else {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`)
// }

//Equality operators ====VS==== <--------------------
// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
// if (numNeighbours===1){
//     console.log ('Only 1 border');
// }else if(numNeighbours > 1){
//     console.log('More than one neighbour');
// }else {
//     console.log('No borders');
// }

//Logical Operators<------------------------------
// const langEnglish = false;
// const peopleNum = false;
// const isIsland = false;
// const country = 'Greece';
// const isIsland = false;
// let population = 5000000;
// const language = 'Greek';

// if (language !== 'english' && population < 50000000 && !isIsland) {
//     console.log('You should live in Greece');
// } else {
//     console.log('Greece does not meet your criteria');
// }

//CODING CHALLENGE No 3<---------------
// const dolphins = (96 + 108 + 89) / 3;
// const koalas = (88 + 91 + 110) / 3;

// console.log(dolphins);
// console.log(koalas);

// if (dolphins > koalas) { 
//     console.log('The winner is Dolphins!!');
// }else if (dolphins<koalas){
//     console.log('The winner is Koalas!!');
// }else{
//     console.log('There is a draw!');
// }

//BONUS 1<--------
// const dolphins = (97 + 112 + 101) / 3;
// const koalas = (109 + 95 + 123) / 3;

// console.log(dolphins);
// console.log(koalas);

// if (dolphins > koalas && dolphins >=100) { 
//     console.log('The winner is Dolphins!!');
// }else if (dolphins<koalas && koalas >=100){
//     console.log('The winner is Koalas!!');
// }else{
//     console.log('There is a draw!');
// }

//BONUS 2<-----------
// const dolphins = (97 + 112 + 101) / 3;
// const koalas = (109 + 95 + 106) / 3;

// console.log(dolphins);
// console.log(koalas);

// if (dolphins > koalas && dolphins >= 100) {
//     console.log('The winner is Dolphins!!');
// } else if (dolphins < koalas && koalas >= 100) {
//     console.log('The winner is Koalas!!');
// } else if (dolphins === koalas && dolphins >= 100 && koalas >= 100) {
//     console.log('There is a draw!');
// } else {
//     console.log('There is no winner')
// }

//The switch statement<--------------------
// const language = 'greek';

// switch (language) { 
//     case 'chinese':
//     case 'mandarin':
// console.log('MOST number of native speakers');
// break;
//     case 'spanish':
// console.log('2nd plase in number of native speakers');
// break;
//     case 'english':
// console.log('3rd place')   
// break;
// case 'hindi':
// console.log('Number 4');
// break;
//     case 'arabic':
// console.log('5th most spoken language');
// break;
//         default:
// console.log('Great language too :D');
// }

//CODIND CHALLENGE #4<-------------------

// const bill = 275;
// const tip1 = (bill *15)/100;

// const total = bill + tip1
// const value = bill>=50 && bill <=300 ? `The bill value is ${bill} , the tip is ${tip1} and the total value is ${total}`: `The bill is ${bill}, the tip is ${(bill*20)/100}, and the total value is ${bill+(bill*20)/100}`
// console.log(value);

//The Conditional (Ternary) Operator<-------------------

// const population = 5000000;

// const pop = population >=33000000 ? `Greece's population (${population}) is above average. `: `Greece's population (${population}) is below average.`
// console.log(pop);


 