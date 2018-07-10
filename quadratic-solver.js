// We will write a program to find the factors of quadratic equations using the quadratic formula
// Recall that a quadratic equation has the form a*x^2 + b*x + c = 0
// For more see: https://en.wikipedia.org/wiki/Quadratic_equation

// Here is where you will set the coefficients
const a = 1;
const b = 2;
const c = -35;

// Fill in the code below based on the quadratic formula
// Hint: for this next line, you will need to use a math concept that we haven't talked about.
// Luckily, the operation you need is one google search away!
const discriminant = b ** 2 - (4 * a * c);

// There are two numerators and two answers because of the plus-minus
const numerator1 = b + Math.sqrt(discriminant);
const numerator2 = b - Math.sqrt(discriminant);
const denominator = 2 * a;
const answer1 = numerator1 / denominator;
const answer2 = numerator2 / denominator;

// You should see 5 and -7
console.log(answer1);
console.log(answer2);


// Here are some more coefficients to try above
// a = 1, b = -10, c = 21
// a = 1, b = 15, c = 44
// a = 1, b = -5, c = -24
// a = 1, b = 8, c = 16 (hmmm... that's odd)
// a = 1, b = 6, c = 10 (hmmm... what could be going on here?)

// To check your answers, either solve on your own by factoring, or use http://www.wolframalpha.com/
