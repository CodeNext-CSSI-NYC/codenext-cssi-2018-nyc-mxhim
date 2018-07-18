// You can use nested loops and 2-d arrays to draw patterns
// Here is an example:
let numRowsCols = 15;
for (let i = 0; i < numRowsCols; i++) {
    let row = "";
    for (let j = 0; j < numRowsCols; j++) {
        if (i == j) {
            row += "X";
        } else {
            row += "~";
        }
    }
    // console.log(row);
}
// Run this, and make sure you understand exactly why it looks as it does



// 1. Try to make this one. Hint: you will need to compare i and j in order to
// decide when to add * onto the strings that represent each row.

// *
// **
// ***
// ****
// *****
// ******

let numRows = 6;
let str = '';
for (let i = 1; i <= numRows; i++) {
    str += '*';
    // console.log(str);
}


// 2. Try to figure out how to draw a "border" pattern:

// XXXXXXXX
// X------X
// X------X
// X------X
// X------X
// X------X
// X------X
// XXXXXXXX

for (let i = 0; i < 8; i++) {
    let row = '';
    for (let j = 0; j < 8; j++) {
        if (i == 0 || i == 7) {
            row += 'X';
        } else if (j == 0 || j == 7) {
            row += 'X';
        } else {
            row += '-';
        }
    }
    // console.log(row);
}

// Bonus -- All the ones that follow are surprisingly tricky.

// 3. Hint -- You will need to add spaces to the string up to a certain point,
// and then add stars.
// Hint2 -- You could consider adding the stars first and then
// adding the spaces to the beginning of the string.

//     *
//    **
//   ***
//  ****
// *****

for (let row = 0; row < 6; row++) {
    let str = '';
    let numOfCol = 6;
    for (let col = 0; col < 6; col++) {
        if (col >= numOfCol - row) {
            str += '*';
        } else {
            str += ' ';
        }
    }
    // console.log(str);
}

// 4. Here's one that builds on the same idea in the previous pattern:
// *   *
//  * *
//   *
//  * *
// *   *

for (let row = 0; row < 5; row++) {
    let str = '';
    let lastIndexOfCol = 4;
    for (let col = 0; col < 5; col++) {
        if (row == col || col == lastIndexOfCol - row) {
            str += '*';
        } else {
            str += ' ';
        }
    }
    // console.log(str);
}

// (For the ones that follow, feel free to use something other than "X" and "-").
// The characters that you draw don't matter, just the pattern they are in.

// HINT: The only way to figure these out is to write down the coordinates of
// the spots that have the X's in them, compare them to the spots that have "-"
// in them, and try to find a pattern you can express in code.



// 5. Try to figure out how to draw a "chessboard" pattern:

// X-X-X-X-
// -X-X-X-X
// X-X-X-X-
// -X-X-X-X
// X-X-X-X-
// -X-X-X-X
// X-X-X-X-
// -X-X-X-X

for (let row = 0; row < 8; row++) {
    let str = '';
    for (let col = 0; col < 8; col++) {
        if ((row + col) % 2 == 0) {
            str += 'X';
        } else {
            str += '-';
        }
    }
    // console.log(str);
}

// These last two are very hard.

// 6. Try to figure out how to draw a "grid" pattern:
// XXXXXXXXX
// X-X-X-X-X
// XXXXXXXXX
// X-X-X-X-X
// XXXXXXXXX
// X-X-X-X-X
// XXXXXXXXX
// X-X-X-X-X
// XXXXXXXXX

for (let row = 0; row < 9; row++) {
    let str = '';
    for (let col = 0; col < 9; col++) {
        if (row % 2 == 0 || col % 2 == 0) {
            str += 'X';
        } else {
            str += '-';
        }
    }
    // console.log(str);
}

// 7. A pyramid!
// Hint for this one... try printing stars straight down the middle first.
// How do you know what value will be the "middle"? Once you figure out what the middle is,
// you can add stars to the left and right of it as you go down the rows.
//
//     *
//    ***
//   *****
//  *******
// *********

function makePyramidWithBaseOf(oddNum) {
    let numOfRows = 0;
    let numOfCols = oddNum;
    while (oddNum >= 1) {
        numOfRows++;
        oddNum -= 2;
    }
    for (let row = 0; row < numOfRows; row++) {
        let str = '';
        let middle = Math.floor(numOfCols / 2);
        for (let col = 0; col < numOfCols; col++) {
            if (col < middle - row || col > middle + row) {
                str += ' ';
            } else {
                str += '*';
            }
        }
        console.log(str);
    }
}

makePyramidWithBaseOf(51);