'use strict';

// reuseable variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let docMess = document.querySelector('.message');
let docScore = document.querySelector('.label-score');
let docNumber = document.querySelector('.number');
let bodyColor = document.querySelector('body');

console.log(secretNumber);

//This code will listen to the check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // player win conditions
  if (guess === secretNumber) {
    bodyColor.style.backgroundColor = '#60b347';
    docNumber.textContent = secretNumber;
    docMess.textContent = '🎉 Correct Number';
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    setTimeout(resetGame, 5000);
    // player loss conditions
  } else if (score <= 1) {
    document.querySelector(
      '.message'
    ).textContent = `You have lost the game 😥`;
    score--;
    bodyColor.style.backgroundColor = '#ac0b0f';
    docScore.textContent = score;
    setTimeout(resetGame, 2000);
  }

  //player guess logic
  docScore.textContent = score;
  if (guess > 20) {
    docMess.textContent = 'Not a Valid Number 🤣';
    docScore.textContent = score;
  } else if (guess > secretNumber) {
    docMess.textContent = `You've guessed high 📈`;
  } else if (guess < secretNumber) {
    docMess.textContent = `You've guessed low 📈`;
  }
  score--;
});

//This code will reset the board and will be called in both event handlers
const resetGame = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  bodyColor.style.backgroundColor = '#222';
  docNumber.textContent = '?';
  docScore.textContent = score;
  docMess.textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
};
document.querySelector('.again').addEventListener('click', resetGame);
