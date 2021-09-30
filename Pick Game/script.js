'use strict';

// Selecting the elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


score0El.textContent = 0;
score1El.textContent = 0;

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0; // we start with the first player
let playing = true;
diceEl.classList.add('hidden');

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle(`player--active`); // if ON then it'll turn to OFF
    player1El.classList.toggle(`player--active`);
};

// Rolling Dice Functionality
btnRoll.addEventListener("click", function () {
    if (playing) {
        // 1. Generate a Random Dice Roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // 2. Display the Dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        // 3. Check for Rolled one
        if (dice !== 1) {
            // Add dice to the current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            //    --- IF true, switch to new Player
            switchPlayer();
        }
    }
});

btnHold.addEventListener("click", function () {
    if (playing) {
        // Add the current score to the score of the active players
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        // Check if score is 100, then the current player wins, 
        if (scores[activePlayer] >= 10) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden');
        }
        // Else switch to the next player 
        else {
            switchPlayer();
        }
    }
});

btnNew.addEventListener("click", function () {
    console.log("Yes pressed!");
    scores[0] = 0;
    scores[1] = 0;
    currentScore = 0;
    activePlayer = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--winner');
    playing = true;
});