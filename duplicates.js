// 1. Another way to use nested loops is to loop through the same array twice.
// One reason you might do this is to try to figure out if the array has any duplicates.
// The outer loop would track one item in the array, and the inner loop would
// go through all of the items in the array and check if they are the same as
// that first item. If so, the array contains at least one duplicate.
// But make sure you don't compare an item to itself, because that's not a duplicate.

// Get a basic version of this working. You should return true if there is at least one duplicated value.
function hasDuplicate(arr) {
    for (let itemToCheck of arr) {
        let count = 0;
        for (let item of arr) {
            if (itemToCheck == item) {
                count++;
            }
        }
        if (count > 1) {
            return true;
        }
    }
    return false;
}
// Here are some examples you can use to test
let arr1 = [3, 4, 5, 6, 7, 1, 2, 5, 9, 3, 4, 5, 6, 7, 8, 3, 4];
let arr2 = ["apple", "banana", "pear", "banana"];
// Also make some examples where the answer is false

// console.log(hasDuplicate(arr1));
// console.log(hasDuplicate(arr2));
// console.log(hasDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 2. Once you have this version working, make a different version that
// tells you which items in the array are duplicated.
// For example, in [3,4,5,6,7,1,2,5,9] the only duplicate is 5
// However, in [3,4,5,4,7,4,2,5,9] the duplicates are 5 and 4 (which appears three times)
function listDuplicates(arr) {
    let itemCounter = {};
    let duplicates = [];
    for (let item of arr) {
        if (!itemCounter.hasOwnProperty(item)) {
            itemCounter[item] = 1;
        } else {
            itemCounter[item]++;
        }
    }
    let keys = Object.keys(itemCounter);
    for (let key of keys) {
        let value = itemCounter[key];
        if (value > 1) {
            duplicates.push(key);
        }
    }
    return duplicates;
}

console.log(listDuplicates(arr1));


// Bonus:
// 3. A related question (though one that has nothing to do with nested loops)
// is to find the mode (the item that appears most often) of an array.
// Write a function that does that.
function findMode(arr) {
    let itemCounter = {};
    for (let item of arr) {
        if (!itemCounter.hasOwnProperty(item)) {
            itemCounter[item] = 1;
        } else {
            itemCounter[item]++;
        }
    }
    let keys = Object.keys(itemCounter);
    let mode = keys[0];
    for (let key of keys) {
        if (itemCounter[key] > itemCounter[mode]) {
            mode = key;
        }
    }
    console.log(itemCounter);
    return mode;
}

console.log(findMode(arr1));
// If you test with [3,4,5,4,7,4,2,5,9] it should return 4.
// If it's a case where multiple items appear the most, you can decide to either
// return just one of them, or to return all of them.
// For example [3,4,5,4,7,3,2,5,9] has three values that appear most: 3, 4, and 5.