const random = require('random-int');
const readline = require('readline-sync');

const names = ['MA', 'JB', 'AM'];
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
