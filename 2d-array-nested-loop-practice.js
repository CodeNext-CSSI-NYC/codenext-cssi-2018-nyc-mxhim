// 1. Refer to the 2D array below to answer the questions that follow
let fruits = [
    ["apple", "banana", "grape"],
    ["peach", "raspberry", "papaya"],
    ["apricot", "cherry", "pineapple"],
    ["watermelon", "nectarine", "tangerine"],
    ["mango", "strawberry", "blueberry"]
];
// Which item is fruit[2][1]? Confirm your answer by printing it out.
// Which are the row/column coordinates of tangerine? Confirm your answer by printing it out.
// Change apricot to kiwi. Print out the array to make sure it worked.
// Create a new row to add to the end of the 2D array.
// This row will itself by an array and should contain blackberry, lemon, and clementine.
// Add it to the end of the fruits array. Print out the whole array to make sure
// your new row looks just like any other row.
// What is the row/column of lemon? Print it out to make sure.

// console.log('cherry' == fruits[2][1]);
// console.log('tangerine' == fruits[3][2]);
// fruits[2][0] = 'kiwi';
// console.log(fruits[2][0]);
// let newRow = ['blackberry', 'lemon', 'clementine'];
// fruits.push(newRow);
// console.log(fruits);

// 2. Write two nested for loops. The first (outer) should run 4 times and
// the second (inner) should run 7 times.
// Inside the inner loop, print out the sentence:
// Right now, i is _____ and j is ____, filling in the blanks with the values.
// Before you run it, predict what the second line that your code prints will be.
// Write it down.... Now run it. Is it what you predicted?

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 7; j++) {
        // console.log('Right now i is ' + i + ' and j is ' + j);
    }
}

// 3. Use two nested loops to iterate (go through) the fruits array above.
// Inside the loops, print out the item at that particular row/column.
// Which item do you think will be printed second-to-last? Run the code to check.

for (let row of fruits) {
    for (let fruit of row) {
        // console.log(fruit);
    }
}

// 4. Create your own 2D array. It doesn't have to be too big, but it should
// have at least two rows and at least two columns, and at least 6 items overall.
// Print out a few values from your 2D array using the rol/column indexes.
// Make sure that what gets printed matches your expectations.
// Try changing a few values in the 2D array using row/column indexes.
// Print it out to make sure that your changes worked as intended.

let animals = [
    ['sparrow', 'pigeon', 'ostrich'],
    ['mouse', 'rat', 'squirrel'],
    ['catfish', 'goldfish', 'angelfish']
];

// 5. Write a function that takes in a 2D - array and a string as input.
// The function should return true if the string is found somewhere in the array, and false otherwise.
// Test it using the fruits array, including case with fruits that are there
// and other cases with fruits that are not.

function findStrIn2DArr(arr2D, str) {
    for (let row of arr2D) {
        for (let item of row) {
            if (item == str) {
                return true;
            }
        }
        return false;
    }
}

console.log(findStrIn2DArr(animals, 'pigeon'));