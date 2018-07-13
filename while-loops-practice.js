// 1a. Use a while loop to print out numbers from 1 to 10
// 1b. Use a while loop to print out numbers from 30 to 15

// let count = 1;
//
// while(count <= 10) {
//   console.log(count);
//   count++;
// }
//
// let counter = 30;
//
// while (counter >= 15) {
//   console.log(counter);
//   counter--;
// }

// 2. Write a program that keeps rolling a die until the roll is a 5. Print out each roll.
// If you haven't yet done so, you should run
// npm install random-int
// and use that to get a random number from 1 to 6.
// Google "npm random-int" for more info.

// const random = require('random-int');
//
// let dieValue;
//
// while (dieValue != 5) {
//   dieValue = random(1, 6);
//   console.log(dieValue);
// }

// 3. Write a program that asks the user to guess a secret password.
// Until the user enters the correct password (which is chosen by you in advance),
// the program will keep asking for all eternity. When they finally do enter the
// correct password, exit the loop and print a congratulatory message.

// Hint: Declare userInput outside the loop and initialize it to the value of readline.question("Enter password: ").
// The while loop will check if userInput matches the correct password.
// If not, inside the loop you should print "Sorry! That's incorrect", then
// assign userInput to the value of readline.question("Enter password: ") again.

// const readline = require('readline-sync');
//
// let userInput;
// let password = 'secretPassword';
// let count = 0;
//
// while (userInput != password) {
//   userInput = readline.question('enter password: ');
//   if (userInput != password) {
//     console.log('sorry! Try again...');
//   }
// }
//
// console.log('you got it!');

// Bonus: Enhance your program to only allow the user to try entering the correct password three times.
// If they fail three times, the program should kick them out and tell them they are a robot.
// When the user enters the wrong password, the program tells them that they are wrong,
// along with how many attempts they've made so far.

const readline = require('readline-sync');

let userInput;
let password = 'secretPassword';
let count = 0;
let tries = 3

while (userInput != password && count < tries) {
  userInput = readline.question('enter password: ');
  if (userInput != password && count < tries) {
    count++;
    console.log('sorry that is incorrect, you have ' + (tries - count) + ' tries left!');
  }
}

if (userInput == password) {
  console.log('you got it!');
} else {
  console.log('you ran out of tries');
}
