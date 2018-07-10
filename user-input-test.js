// Remember that you can comment parts of your code in and out!
// Try this as you move from question to question below.
const readline = require("readline-sync");
// 1. Ask the user to enter a number, and print out "The square root of ___ is ___ ", but with the blanks filled in correctly. (Not sure how to get the square root of a number in JavaScript? Google it!)

let num = readline.question("Give me a number: ");
console.log("The square root of", num, "is", Math.sqrt(num));

// 2. Ask the user to enter their name, and print out "Your name has ___ letters", but with the blank filled in. Not sure how to get the number of letters in a string in JavaScript? Google it!

let name = readline.question("What is your name? ");
console.log("Your name has", name.length, "letters");

// 3. Ask the user to enter any word, and print out "The word ____ starts with the letter ___", but with the blanks filled in. Not sure how to get the first letter of a string in JavaScript? ...

let word = readline.question("Give me a word: ");
console.log("The word", word, "starts with", word.charAt(0));

// 4. Ask the user to enter two numbers, and print out "The average of ___ and ___ is ____", but with the blanks filled in.

console.log("Give me 2 numbers");
let num1 = parseFloat(readline.question("number 1: "));
let num2 = parseFloat(readline.question("number 2: "));
console.log("The average of", num1, "and", num2, "is", ((num1 + num2) / 2));
