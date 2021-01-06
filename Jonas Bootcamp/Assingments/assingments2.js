//JS FUNDAMENTALS #2
//Functions<----------------

// function describeCountry(country, population, capitalCity) {
//    const total = (`${country} has ${population} million people and its capital city is ${capitalCity}`)
//    return total;
//  }

// console.log(describeCountry('Greece' , 5, 'Athens'));
// console.log(describeCountry('Italy', 10, 'Roma'));


//Function Declarations VS Expressions<---------------

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }
// const country1=  percentageOfWorld1(1000);
// const country2=  percentageOfWorld1(3000);
// const country3=  percentageOfWorld1(8000);
// console.log(country1,country2, country3);

// const percentageOfWorld2 = function(population){
//     return (population/7900)*100;
// }

// const count1 = percentageOfWorld2(12000);
// const count2 = percentageOfWorld2(3500);
// const count3 = percentageOfWorld2(7600);
// console.log(count1,count2,count3);

//Functions Calling other Functions<-------------------

// function describePopulation(country,population){
//     const percentage = percentageOfWorld1(population)
//     return `${country} has ${population} people which is about ${percentage}`
// }
// console.log(describePopulation('China', 1441));

//CODING CHALLENGE #1<----------------------------------------------------------------------


// function calcAverage(a, b, c) {
//     return (a + b + c) / 3;
// }
// const dolphins = calcAverage(44, 23, 71);
// const koalas = calcAverage(65, 54, 49);
// console.log(dolphins, koalas);

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins){
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//    }else {
//        console.log('No team wins.....');
//    }
// }
// checkWinner(dolphins, koalas);

// checkWinner(576,111);

//Arrays<---------------------------------------------------

// const greece = percentageOfWorld1(1200);
// const italy = percentageOfWorld1(1400);
// const france = percentageOfWorld1(1600);
// const spain = percentageOfWorld1(2000);
// const populations = [greece, italy, france, spain];
// console.log(populations)
// if (populations.length == 4) {
//     console.log(true)
// } else {
//     console.log(false)
// };

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }
// const percentages = [greece, italy, france, spain];
// console.log(percentages)

//Basic Array Operations (Methods)<--------------------

// const neighbours = ['Italy', 'Cyprus', 'Bulgaria', 'Egypt'];

// neighbours.push('Utopia');
// console.log(neighbours);

// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes('Germany')) {
//     console.log('Probably not a central European country :D')
// }

// console.log(neighbours.indexOf('Bulgaria'));
// neighbours[2] = 'Sweden';

// console.log(neighbours);


//CODING CHALLENGE #2<------------------------------------------


// function calcTip(billValue) {
//     if (billValue >= 50 && billValue <= 300) {
//         tip1 = (billValue * 15) / 100;
//         return tip1;
//     } else {
//         tip2 = (billValue * 20) / 100;
//         return tip2;
//     }
// }

// console.log(calcTip(100));
// console.log(calcTip(40));

// const bills = [125, 555, 44];
// const tips = [calcTip(125), calcTip(555), calcTip(44)];
// console.log(tips);

// const total = [bills[0]+ tips[0],bills[1] + tips[1] ,bills [2]+ tips[2]];
// console.log(total);

//Introduction to Objects<-----------------------------
// const myCountry = {
//     country: 'Greece',
//     capital: 'Athens',
//     language: 'Greek',
//     population: 5000000,
//     neighbours: ['Italy', 'Bulgaria', 'Cyprus']
// };

// //Dot Vs Bracket Notation<------------------------------
// myCountry.population = 7000000;
// myCountry['population'] = 5000000;
// console.log(myCountry.country + ' has ' + myCountry.population + ' million ' + myCountry.language + '-speaking people ' + myCountry.neighbours.length + ' neighbouring countries and a capital called ' + myCountry.capital);

//Object Methods<--------------------------------------
// const myCountry = {
//         country: 'Greece',
//         capital: 'Athens',
//         language: 'Greek',
//         population: 5000000,
//         neighbours: ['Italy', 'Bulgaria', 'Cyprus'],
//         describe: function(){
//             return `${this.country} has ${this.population} million ${this.language} - speaking people ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
//         },
//         checkIsland : function(){
//             this.isIsland = this.neighbours.length ===0 ? true : false;
//     }
// }
//     myCountry.describe();
//     myCountry.checkIsland();
//     console.log(myCountry);


//CODING CHALLENGE #3<---------------------------------
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2
        return this.BMI;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI2 = this.mass / this.height ** 2
        return this.BMI2;
    }
}

const sum = mark.calcBMI() > john.calcBMI() ? `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})` : `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})`
console.log(sum);
