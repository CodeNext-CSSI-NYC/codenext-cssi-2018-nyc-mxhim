// 1. Write a function that takes an array of numbers and returns an array that contains
// double each number.
function double(arr) {
  let doubledArray = [];
  for (i = 0; i < arr.length; i++) {
    doubledArray.push(arr[i] * 2);
  }
  return doubledArray;
}
// Here is one test. Uncomment it when ready and try adding more.
testEqual(double([3, 2, 5]), [6, 4, 10]);



// 2. Write a function that takes an array and returns its second-to-last element.
function secondToLast(arr) {
  return arr[arr.length - 2];
}
// Here is one test. Uncomment it when ready and try adding more.
console.log(secondToLast([3, 1, 4, 9, 2, 5]) == 2);



// 3. Write a function that takes an array of numbers and returns an array that
// contains only the smallest and largest values from the array. Hint: sort().
function smallestLargest(arr) {
  let accendingArr = arr.sort();
  return [accendingArr[0], accendingArr[accendingArr.length - 1]];
}
// Here is one test. Uncomment it when ready and try adding more.
testEqual(smallestLargest([3, 7, 2, 5]), [2, 7]);



// 4. Write a function that takes an array and returns a similar array,
// but with the last item moved up to the beginning.
function moveLast(arr) {
  let newArr = [];
  let lastItem = arr.pop();
  for (let i; i < arr.length; i++) {

  }
}
// Here is one test. Uncomment it when ready and try adding more.
// testEqual(double([3, 2, 5, 7]), [7, 3, 2, 5]);



// 5. Write a function that takes an array and returns an array that contains
// the first letter of each element of the passed in array.
// For example, if ["apple", "banana", "pear"] is passed in, it should
// return ["a", "b", "p"]
function firstLetter(arr) {

}
// Here is one test. Uncomment it when ready and try adding more.
// testEqual(firstLetter(["apple", "banana", "pear"]), ["a", "b", "p"]);




/*
Bonus 1: Write a function that takes a list of strings an prints them, one per line,
in a rectangular frame. For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********
*/


// Bonus 2: Write function that translates a text to Pig Latin.
// We'll say that English is translated to Pig Latin by taking the first letter
// of every word, moving it to the end of the word and adding ‘ay’.
// So “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.
// Hint: create an array by using the split() method of Strings. Look it up.\
// Then go through the array and convert each word to pig latin.
function pigLatin(text) {

}






// ==================================================================== //
// This is used in some of the tests above. Don't edit it.
function testEqual(arr1, arr2) {
  if (arr1.length != arr2.length) {
    console.log(false);
    return;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      console.log(false);
      return;
    }
  }
  console.log(true);
}
