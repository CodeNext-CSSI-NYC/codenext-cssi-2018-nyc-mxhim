// Author: Mahim Arib
console.log("*****************************************************************");
console.log("bLeep blOop! i'm a CHanGE macHINe!");

const readline = require('readline-sync');
let change = parseInt(readline.question("Please enter cents as a positive integer: "));

console.log(change + " cents makes:");

const quarters = Math.floor(change / 25);
change %= 25;
const dimes = Math.floor(change / 10);
change %= 10;
const nickels = Math.floor(change / 5);
change %= 5;
const pennies = Math.floor(change / 1);

console.log(quarters + " quarters");
console.log(dimes + " dimes");
console.log(nickels +  " nickels");
console.log(pennies + " pennies");
console.log("BLOop BleEp! i Hope yOU aRE SATiSfieD wITh thiS SerVicE!");
console.log("*****************************************************************");
