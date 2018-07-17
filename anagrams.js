// Words are anagrams if they have the same number of each letter
// For example, creative and reactive are anagrams because they both have
// 2 e's, 1 c, etc.

// This code will load around 10k English words into an array called words.
// It will be useful to have this array for various challenges here.
// Note: this is not *every* English word so don't complain if your favorite is missing.
const fs = require('fs');
const words = fs.readFileSync('words.txt').toString().split("\n");
// Note that all the words are in lowercase.


// 1. In the array above, find all words that are 12 letters long.
// Specifically, add them all to a new array and then print out that array at the end.
// (You shouldn't use an object to do this, it's a warm up.)
let twelveLetters = [];

for (let word of words) {
    if (word.length == 12) {
        twelveLetters.push(word);
    }
}


// console.log(twelveLetters);

// 2. Find all words that contain both x and z (or whatever fun combos you like).
// Again, add them to a new array and print out that array at the end.
// Hint: Look up how to use str.includes(otherStr), a string method that checks if a string
// contains another string (which could be one or more letters).
// (You shouldn't use an object to do this, it's a warm up.)

let wordsWithXZ = [];

for (let word of words) {
    if (word.includes('x') && word.includes('z')) {
        wordsWithXZ.push(word);
    }
}

// console.log(wordsWithXZ);

// 3. Similar to what we did before, create a function that takes in a string
// and returns an object that contains the counts of the letters in the string.
// For example, for creative it would be {c: 1, r: 1, e: 2, a: 1, t: 1, i: 1, v: 1}
// (Yes, we already did this before. Make sure you can do it again.)

function getLetterCount(str) {
    let letterCount = {};
    for (let letter of str) {
        if (!letterCount.hasOwnProperty(letter)) {
            letterCount[letter] = 1;
        } else {
            letterCount[letter]++;
        }
    }
    return letterCount;
}

// console.log(getLetterCount('mississippi'));

// 4a.
// We will cheat a bit here and use another package. In terminal:
// npm install object-equal
// For more see www.npmjs.com/package/object-equal
// This will check for us if two objects have the same keys and values.
// Note that regular == does NOT work for objects or for arrays.
const objectEqual = require('object-equal');
// Now you can check if two objects are equal using: objectEqual(obj1, obj2);
// This returns true or false, just like regular == does for numbers/strings



// 4b. Write a function that takes in a word and checks the array of words at the
// top to see if any of the other words are anagrams. To do this:
// Use #3 above to create a counter object for the word passed in to the function.
// Use a for loop to go through the words array. For each word in the array ...
//      use #3 to make a counter object, and check if this counter object is
//      equal to the one we made from the original word using the package mentioned in 4a.
//      If the counter objects are equal, that means the words are anagrams!
// Track all of the anagrams in a new array and print it out at the end.
// Make sure you test this out. One pair of anagrams that are both in the list are:
// scared and sacred. I'm sure there are many more. Find some!

function getAnagrams(str) {
    let anagrams = [];
    let letterCountOfStr = getLetterCount(str);
    for (let word of words) {
        let count = getLetterCount(word);
        if (objectEqual(letterCountOfStr, count)) {
            anagrams.push(word);
        }
    }
    return anagrams;
}

// console.log(getAnagrams('beast'));

// 5. Find all words in the array that contain at least 4 E's.
// You will need to create a counter object for each word in the array.
// And then figure out a way to check if it has at least 4 E's.
let fourE = [];

for (let word of words) {
    let letterCount = getLetterCount(word);
    if (letterCount.e == 4) {
        fourE.push(word);
    }
}

// console.log(fourE);

// Bonus
// 6. Find all words that are the same forwards and backwards.
// In order to do this, you will need to write a separate function that determines
// if a word is the same forwards and backwards, and call that each time.
// Another way of saying this is that the word is the same as its reverse.

function getReverseWord(str) {
    let reverseWord = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverseWord += str[i];
    }
    return reverseWord;
}

let palindromes = [];

for (let word of words) {
    if (word == getReverseWord(word)) {
        palindromes.push(word);
    }
}

console.log(palindromes);