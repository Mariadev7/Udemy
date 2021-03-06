'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


document.querySelector('.number').innerHTML = '?'

const displayMessage = function(message){
    document.querySelector('.message').textContent = message; 
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    

    //When there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔ No Number!'
        displayMessage('⛔ No Number!')

        //When the number is correct and player wins
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '🏆 Correct Number!'
        displayMessage('🏆 Correct Number!')

        document.querySelector('body').style.backgroundColor = ' #60b347';
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        
        //When the number is too high.Also decrease the score number
    } else if (guess > secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = '📈 Too high!'
            displayMessage('📈 Too high!')
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = '👎 You lost the game!'
            displayMessage('👎 You lost the game!')
            document.querySelector('.score').textContent = 0;
        }
        //When the number is too low. Also decrease the score number
    } else if (guess < secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = '📉 Too low!'
            displayMessage('📉 Too low!')
            score--;
            document.querySelector('.score').textContent = score
        } else {
            // document.querySelector('.message').textContent = '👎 You lost the game!'
            displayMessage('👎 You lost the game!')
            document.querySelector('.score').textContent = 0;
        }
    }
});
//When again button is pushed ,page reloaded
document.querySelector('.again').addEventListener('click', function () {
    score = 20
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...')
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = ' #222';
    document.querySelector('.number').textContent = '?';
});




