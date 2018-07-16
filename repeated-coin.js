// Use a for loop to simulate flipping a coin 100 times.
// Think carefully about how you could use Math.random() or random-int to do this.
// (There are several possible answers.)
// Keep track of how many of the flips are heads.
// Print out the total number of flips and the total number of heads at the end.
// How often is it exactly 50/100? Fun fact: this should only happen about 8% of the time.
const random = require('random-int');

let headsCount = 0;
let totalCount = 0;

for(let i = 0; i < 100; i++) {
    let randomNum = random(0, 100);
    if (randomNum > 50) {
        headsCount++;
        totalCount++;
    } else {
        totalCount++;
    }
}

console.log('number of times heads: ' + headsCount + '/' + totalCount);