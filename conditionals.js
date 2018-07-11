// Complete these one at a time. Test each one several times to make sure it works.
// When you are done with each one, comment it out when you move to the next one, so it doesn't keep showing up.

const readline = require('readline-sync');

// 1. Ask the user for a number and print whether it is positive or negative or zero.

const num = readline.question('enter a number: ');

if (num > 0) {
  console.log('it is positive');
} else if (num < 0) {
  console.log('it is negative');
} else {
  console.log('the number is zero');
}

// 2. Ask the user to enter three numbers, and then print out the biggest number they entered.

console.log('enter three numbers');

const num1 = parseFloat(readline.question('number 1: '));
const num2 = parseFloat(readline.question('number 2: '));
const num3 = parseFloat(readline.question('number 3: '));

console.log('The largest number is:', Math.max(num1, num2, num3));

// 3. Ask the user for a number and print whether it is odd or even

const number = readline.question('enter a number: ');

if (number % 2 == 0) {
  console.log('the number is even');
} else if (number % 2 == 1) {
  console.log('the number is odd');
}

// 4. Ask the user to enter a letter and tell them if it is a vowel or consonant

const letter = readline.question('enter a letter: ');

const vowels = ['a', 'e', 'i', 'o', 'u'];

if (vowels.includes(letter)) {
  console.log('this is a vowel');
} else if (letter == 'y') {
  console.log('"y" is sometimes a vowel');
} else {
  console.log('this is a consonant');
}

// 5. Ask the user to enter a year, and tell them if it was a leap year.

const year = parseInt(readline.question('enter a year: '));

if (year % 4 == 0) {
  console.log(year + ' is a leap year');
} else {
  console.log(year + ' isn\'t a leap year');
}

// (You can use Google if you're not sure when leap years happen.)

// 6. Ask the user if they have been a citizen for at least 9 years (yes or no), ask them their age, and ask if they live in New York state.
// If they answer yes, their age is above 30, and yes, then tell them they can run for senate in NY. Otherwise, say that they cannot.

const citizenStatus = readline.question('have you been a citizen for at least 9 years? (yes / no) ');
const age = readline.question('how old are you? ');
const residency = readline.question('do you live in New York? (yes / no) ');

if (citizenStatus == 'yes' && age >= 30 && residency == "yes") {
  console.log('you can run for senate in NY');
} else {
  console.log('you cannot run for senate in NY');
}

// 7. Write a program that asks the user to enter a whole number 1-7 and prints out the corresponding day of the week.
// If you want another challenge, look up how to use switch statements and use a switch instead of if-else for this.
// Note that we usually don't bother with switch statements unless there are more than a few elses.

const dayNum = parseInt(readline.question('give me a number between 1 and 7: '));

switch (dayNum) {
  case 1:
    console.log('the first day of the week is Sunday');
    break;
  case 2:
    console.log('the second day of the week is Monday');
    break;
  case 3:
    console.log('the third day of the week is Tuesday');
    break;
  case 4:
    console.log('the fourth day of the week is Wednesday');
    break;
  case 5:
    console.log('the fifth day of the week is Thursday');
    break;
  case 6:
    console.log('the sixth day of the week is Friday');
    break;
  case 7:
  console.log('the seventh day of the week is Saturday');
  default:
    console.log('please enter a number from 1 - 7');
    break;
}
