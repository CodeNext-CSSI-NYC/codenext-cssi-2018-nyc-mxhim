const readline = require('readline-sync');

let guess;

while (!(guess == 'heads' || guess == 'tails')) {
  guess = readline.question('guess heads or tails: ');
  if (!(guess == 'heads' || guess == 'tails')) {
    console.log('you entered an incorrect value! try again...');
  }
}

let coinState;

if (Math.random() >= 0.5) { // because Math.random() does not include 1 
  coinState = 'heads'
} else {
  coinState = 'tails'
}

if (coinState == guess) {
  console.log('you guessed correctly!!!');
} else {
  console.log('sorry! it\'s actually ' + coinState);
}
