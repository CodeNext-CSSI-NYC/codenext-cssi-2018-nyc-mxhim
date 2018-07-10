// Author: Mahim Arib
console.log("*****************************************************************");
console.log("bLeep blOop! i'm a CHanGE macHINe!");

const readline = require('readline-sync');
let change = parseInt(readline.question("Please enter cents as a positive integer: "));

console.log(change + " cents makes:");

let quarters = Math.floor(change / 25);
change %= 25;
let dimes = Math.floor(change / 10);
change %= 10;
let nickels = Math.floor(change / 5);
change %= 5;
let pennies = Math.floor(change / 1);

console.log(quarters + " quarters");
console.log(dimes + " dimes");
console.log(nickels +  " nickels");
console.log(pennies + " pennies");
console.log("BLOop BleEp! i Hope yOU aRE SATiSfieD wITh thiS SerVicE!");
console.log("*****************************************************************");
