function add(num1, num2) {
    return num1 + num2
}
function subtract(num1, num2) {
    return num1 - num2
}
function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function calc(num1, num2, operator){
    return operator(num1,num2)
}

console.log(calc(4,5,add));
console.log(calc(4,5,subtract));
console.log(calc(4,5,multiply));
console.log(calc(4,5,divide));
