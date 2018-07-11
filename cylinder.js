console.log('cylinder');

const readline = require('readline-sync');
const radius = parseInt(readline.question('radius: '));
const height = parseInt(readline.question('height: '));

let returnValue;

while (!(returnValue == 'volume' || returnValue == 'surface area')) {
  returnValue = readline.question('Do you want the volume or the surface area? ');

  switch (returnValue) {
    case 'volume':
      console.log('volume:', Math.PI * radius ** 2 * height);
      break;
    case 'surface area':
      console.log('surface area:', (2 * Math.PI * radius * height) + (2 * Math.PI * radius ** 2));
      break;
    default:
      console.log('sorry I did not catch that, please enter either "volume" or "surface area"');
      break;
  }
}
