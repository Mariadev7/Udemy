'use strict';

//Selecting elements 
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const newName0El = document.getElementById('name--0');
const newName1El = document.getElementById('name--1');

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Function for players active 
const nextPlayer = function () {
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

const prevPlayer = function () {
    player1El.classList.toggle('player--active');
    player0El.classList.toggle('player--active');
}

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
    //1.Generating a random dice roll
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    //2.Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `images/dice-${diceRoll}.png`

    //3.Check for rolled 1
    if (diceRoll !== 1) {
        //Add dice to current score
        currentScore += diceRoll;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    } else {
        // Switch to next player
        current1El.textContent = 0;
        current0El.textContent = 0;
        currentScore = 0
        activePlayer = activePlayer === 0 ? 1 : 0;
        nextPlayer()
    }
})
//Hold button functonality
btnHold.addEventListener('click', function () {
    if (activePlayer === 0) {
        scores[0] += currentScore;
        currentScore = 0
        current0El.textContent = 0
        score0El.textContent = scores[0];
        activePlayer = activePlayer === 0 ? 1 : 0;
        nextPlayer()
        if (scores[0] >= 100) { //Determines the winner if 100 points are scored
            newName0El.textContent = '🥇You are the Winner!!!!'
            currentScore = 0;
            current0El.textContent = 0;
            btnRoll.disabled = true; //Disable the buttons roll and hold
            btnHold.disabled = true;
            diceEl.classList.add('hidden');

        }
    } else {
        scores[1] += currentScore;
        currentScore = 0
        current1El.textContent = 0
        score1El.textContent = scores[1];
        activePlayer = activePlayer === 0 ? 1 : 0;
        prevPlayer();
        if (scores[1] >= 100) {
            newName1El.textContent = '🥈You are the Winner!!!!'
            currentScore = 0;
            current1El.textContent = 0;
            btnRoll.disabled = true; //Disable the buttons roll and hold
            btnHold.disabled = true;
            diceEl.classList.add('hidden');
        }

    }
})

//New game button functionality
btnNew.addEventListener('click', function () {
    location.reload();
})