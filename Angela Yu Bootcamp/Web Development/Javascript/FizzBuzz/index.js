let output = [];
let count = 1;

function fizzBuzz() {
    output.push(count);
    count++;
    if ((count % 3)==0) {
        output.push('Fizz')
    } else if ((count % 5)==0) {
        output.push('Buzz')
        output.pop()
    }
    else{
        output.push('FizzBuzz')
    
   console.log(output)
}
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()