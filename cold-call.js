const random = require('random-int');
const readline = require('readline-sync');

const names = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let namesAlreadyCalled = [];

while (namesAlreadyCalled.length != names.length) {
  let randomName = names[random(names.length -1)];
  let answer;
  if (answer == undefined && !namesAlreadyCalled.includes(randomName)) {
    answer = readline.question('press enter to call name');
    console.log(randomName);
    namesAlreadyCalled.push(randomName);
  }

  if (namesAlreadyCalled.length == names.length) {
    namesAlreadyCalled = [];
  }
}
