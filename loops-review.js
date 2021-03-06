// 1. We did this last time, but we are going to do it again to make sure you can.
// Do not look back and copy. Then you would not be learning.
// Ask the user to guess a password.
// Keep asking them until they get it right.
// At the end, tell them how many guesses it took them.
const readline = require('readline-sync');
const password = 'secretPassword';
let userInput;
while (userInput != password) {
    userInput = readline.question('enter password: ');
    if (userInput != password) {
        console.log('sorry you entered wrong');
    }
}
console.log('you entered correct!');

// 2. Make a for loop that prints out the numbers from 0 to 9.

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// 3. Make a for loop that prints out the even numbers from 0 to 100.
// Note that there are two ways to do this. One way is to use i += 2 instead of i++.
// This makes i go up by two each time, so that it skips odd numbers.
// The other way is to use an if statement inside the for loop that only prints
// even numbers. Make sure you can do it both ways. (As in, actually do it both ways.)

for(let i = 0; i <= 100; i += 2) {
    console.log(i);
}

for(let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

// 4. Make a variable called sum that is equal to 0.
// Keep asking the user to enter in numbers until all of the numbers they have typed in
// add up to more than 100 in total.
// For example, it might end after two times through the loop if I type 77, 44.
// But it might take many more attempts if I type 1, 1, 1, 1, 1 ....

let sum = 0;
while(sum < 100) {
    sum += parseInt(readline.question('enter a number: '));
}

// 5a. Use a loop to make this pattern:
// *
// **
// ***
// ****
// *****
// ******

let str = '';

for (let i = 0; i < 6; i++) {
    str += '*';
    console.log(str);
}

// 5b. Use a loop to make this pattern:
// ***********
//
// ***********
// 
// ***********
//
// ***********
//
// ***********
//
// ***********
//
// ***********
//

for (let i = 0; i < 7; i++) {
    console.log('***********')
    console.log('\n');
}

// 6. Use this line:
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Set up a for loop that goes through this string.
// Do not use 26 or 25 in your for loop. Instead use the .length property of strings.
// Inside the for loop, store the corresponding letter for each index in a variable called letter.
// Then, print out the toLowerCase() version of each letter.
// You should see the alphabet, in lower case, with a new letter on each line.

for (let i = 0; i < alphabet.length; i++) {
    let letter = alphabet[i].toLowerCase();
    console.log(letter);
}

// 7. Last time we listed out all of the factors of a number.
// This time we will do something similar: we will check if a number is a perfect number.
// A perfect number is one where all of the factors (other than the number itself)
// add up to the number itself.
// We will write a function that returns true or false, depending on whether or not it is perfect.
// See https://en.wikipedia.org/wiki/List_of_perfect_numbers if you want to.
// 6 is perfect: 1 + 2 + 3 = 6.
// 28 is too: 1 + 2 + 4 + 7 + 14 = 28
// No other small numbers are.
// Write a function that takes in a number uses a for loop to go through the
// values from 1 to number - 1 and add together all the ones that are factors of
// number. Return true if this sum is equal to number, false otherwise.
// Make sure it returns true for 6 and 28 and false for pretty much anything else.

function isPerfectNumber(num) {
    let factorSum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            factorSum += i;
        }
    }
    return factorSum == num;
}

console.log(isPerfectNumber(6));
console.log(isPerfectNumber(28));
console.log(isPerfectNumber(8128));