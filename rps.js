const readline = require('readline-sync');

let userMove;
let computerMove;

function isIncorrect() {
  return !(userMove == 'rock' || userMove == 'paper' || userMove == 'scissor');
}

function pickYourMove() {
  while (isIncorrect()) {
    userMove = readline.question('pick your move: ');

    if (isIncorrect()) {
      console.log('you entered something incorrect! either enter "rock", "paper", or "scissor"');
    }
  }
}

function getComputerMove() {
  let num = Math.random() * 3;
  if (num > 0 && num < 1) {
    computerMove = 'rock';
  } else if (num > 1 && num < 2) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissor'
  }
}

function declareWinner() {
  if (userMove == computerMove) {
    console.log('it\'s a tie!');
  } else if ((userMove == 'rock' && computerMove == 'scissor') ||
             (userMove == 'paper' && computerMove == 'rock') ||
             (userMove == 'scissor' && computerMove == 'paper')) {
    console.log('you win!!!');
  } else {
    console.log('you lose!');
  }
}

function printBothMoves() {
  console.log('user:', userMove);
  console.log('computer:', computerMove);
}

console.log('can you beat a computer in rock, paper, scissor say shoot?');

let keepPlaying = true;

while (keepPlaying) {
  pickYourMove();
  getComputerMove();
  printBothMoves();
  declareWinner();

  let userResponse = readline.question('do you want to keep playing? (yes / no) ');

  if (userResponse == 'no') {
      keepPlaying = false;
  }
  
  userMove = null;
}
