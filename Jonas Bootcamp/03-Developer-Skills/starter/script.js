// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*const x = 23;
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;
console.log();

// const math = 15;
// const lite = 20;
// const geo = 14;
// const alge = 12;

function average(les1, les2, les3, les4) {
  let total = (les1 + les2 + les3 + les4) / 4;
  if (total >= 15) {
    return console.log('Good');
}else if(total==10){
    return console.log('Bad')
}else {
   return console.log('Excellent');
}
}
console.log(average(20, 20, 20, 20));

const calcTemp = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if(typeof temps[i] !=='number') continue;
    if (temps[i] > max) max = temps[i];
  }
  console.log(max);
  for (let x = 0; x < temps.length; x++) {
    if (temps[x] < min) min = temps[x];
  }
  console.log(min);
  return max - min
};
const amplitude = calcTemp([4, 'error', 8, 2, 56,103, -5, -12]);
console.log(amplitude);

function calcTemp(temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  return `${max} ${min}`
  
}
console.log(calcTemp([10, 40, 9, 80]));
*/

const measureKelvin = function (degree) {
  let x = 273;
  return degree + x;
};
console.log(measureKelvin(10));
