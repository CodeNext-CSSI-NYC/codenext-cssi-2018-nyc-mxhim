// Read about Yahtzee at https://en.wikipedia.org/wiki/Yahtzee
// It will help if you have a basic idea of how the game works.
const randomInt = require('random-int');

// 1. Write a function that rolls a single six-sided die and returns the result.
function rollDie() {
    return randomInt(1, 6);
}



// 2. Write a function that rolls five separate dice and returns the result in an array.
// This function should in turn call the function from #1 above.
function rollFiveDice() {
    let result = [];
    for (let i = 0; i < 5; i++) {
        result.push(rollDie());
    }
    return result;
}
// An example return value is [2,3,5,1,2];



// 3. Write a function that takes in an array of five dice rolls and returns an
// object in which the keys are the rolls and the values are the frequency of the rolls.
// So if the array passed in is [2,3,5,1,2], then the return from this function is:
// {2: 2, 3: 1, 5: 1, 1: 1} because two appears twice and 1/3/5 appear once.
function createCounts(arr) {
    let rollCount = {};
    for (let item of arr) {
        if (!rollCount.hasOwnProperty(item)) {
            rollCount[item] = 1;
        } else {
            rollCount[item]++;
        }
    }
    return rollCount;
}

// You should test out this function by first calling the function in #2,
// storing the result in a variable, then calling this function and passing in that
// variable as the input to this function.



// Note: I will refer to the object returned by #3 above as a "counter object"
// from here on out. I will be referring to it a lot. A "counter object" has keys
// that are the numbers of the dice, and values that represent how many of the five
// dice rolled that number. So the values should always add up to 5.



// 3b. Write a function isValid that takes in a counter object and checks that the values add up to 5.
// It should return true or false. For example, if you pass in {2: 2, 3: 1, 5: 1, 1: 1}
// it should return true, but {2: 2, 3: 1, 5: 1, 1: 2} should return false.
// Feel free to use this function anywhere else in the code if you'd like.

function isValid(counterObj) {
    let counterKeys = Object.keys(counterKeys);
    let sum = 0;
    for (let key of counterKeys) {
        sum += counterObj[key];
    }
    return sum == 5;
}

// 4. Write a function that determines whether or not a counter object contains
// a two-of-a-kind. This means that at least one of the counts is 2 or higher.
function hasTwoOfAKind(obj) {
    let keys = Object.keys(obj);
    for (let item of keys) {
        if (obj[item] == 2) {
            return true;
        }
    }
    return false;
}
// You can test this out by calling #2 and #3 above to create counter objects,
// or you can just create your own and pass them in. For example, you could call
// hasTwoOfAKind({1:3, 2:1, 6:1}) and make sure it says true.


// 5. Write a function that determines whether or not a counter object contains
// a three-of-a-kind. This means that one of the counts is 3 or higher.
function hasThreeOfAKind(obj) {
    let keys = Object.keys(obj);
    for (let item of keys) {
        if (obj[item] == 3) {
            return true;
        }
    }
    return false;
}
// You can test this out by calling #2 and #3 above to create counter objects,
// or you can just create your own and pass them in. For example, you could call
// hasThreeOfAKind({1:3, 2:1, 6:1}) and make sure it says true.



// 6. Write a function that determines whether or not a counter object contains
// a four-of-a-kind. This means that one of the counts is 4 or higher.
function hasFourOfAKind(obj) {
    let keys = Object.keys(obj);
    for (let item of keys) {
        if (obj[item] == 4) {
            return true;
        }
    }
    return false;
}
// You can test this out by calling #2 and #3 above to create counter objects,
// or you can just create your own and pass them in. For example, you could call
// hasFourOfAKind({1:3, 2:1, 6:1}) and make sure it says false and make another
// one that does have it.



// 7. Write a function that determines whether or not a counter object contains
// a yahtzee (all five are the same). This means that one of the counts is 5.
function hasYahtzee(obj) {
    let keys = Object.keys(obj);
    for (let item of keys) {
        if (obj[item] == 5) {
            return true;
        }
    }
    return false;
}
// You can test this out by calling #2 and #3 above to create counter objects,
// or you can just create your own and pass them in. For example, you could call
// hasYahtzee({1:5}) and make sure it says true.



// 8. Write a function that determines whether or not a counter object contains
// a full house. This means that one of the counts is 3 and a different one is 2.
function hasFullHouse(obj) {
    return hasThreeOfAKind(obj) && hasTwoOfAKind(obj);
}
// You can test this out by calling #2 and #3 above to create counter objects,
// or you can just create your own and pass them in. For example, you could call
// hasFullHouse({1:3, 5:2}) and make sure it says true.



// 9. Write a function that determines whether or not a counter object contains
// a small straight. This means that either all of the values from 1-4 appear at least once,
// or all the values from 2-5 appear at least once, or all the values from 3-6 appear at least once.
function hasSmallStraight(obj) {
    let rolledNums = Object.keys(obj);
    rolledNums.sort();
    let str = rolledNums.join('');
    return str.includes('1234') || str.includes('2345') || str.includes('3456');
}
// You can test this out by calling #2 and #3 above to create counter objects,
// or you can just create your own and pass them in. For example, you could call
// hasFullHouse({3:1, 4:1, 5:2, 6:1}) and make sure it says true.

let roll = rollFiveDice();
let count = createCounts(roll);
console.log(roll);
console.log('has two of a kind:', hasTwoOfAKind(count));
console.log('has three of a kind:', hasThreeOfAKind(count));
console.log('has four of a kind:', hasFourOfAKind(count));
console.log('has yahtzee:', hasYahtzee(count));
console.log('has full house:', hasFullHouse(count));
console.log('has small straight:', hasSmallStraight(count));
console.log('has large straight:', hasLargeStraight(count));

// 10. Write a function that determines whether or not a counter object contains
// a large straight. This means that either all of the values from 1-5 appear at least once,
// or all the values from 2-6 appear at least once.
function hasLargeStraight(obj) {
    let keys = Object.keys(obj);
    return keys.length == 5 && Math.max(...keys) - Math.min(...keys) == 4;
}
// You can test this out by calling #2 and #3 above to create counter objects,
// or you can just create your own and pass them in. For example, you could call
// hasFullHouse({2:1, 3:1, 4:1, 5:1, 6:1}) and make sure it says true.