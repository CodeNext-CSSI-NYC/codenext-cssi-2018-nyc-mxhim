// Author: Mahim Arib

console.log('give me all three sides of a right triangle and I can tell if it is a triple, in positive integer value');

const readline = require('readline-sync');

const smallLeg = parseInt(readline.question('small leg: '));
const bigLeg = parseInt(readline.question('big leg: '));
const hypothenuse = parseInt(readline.question('hypothenuse: '));

if (hypothenuse ** 2 == smallLeg ** 2 + bigLeg ** 2) {
  console.log('This is a pythagorean triple');
} else {
  console.log('This is not a pythagorean triple');
}
