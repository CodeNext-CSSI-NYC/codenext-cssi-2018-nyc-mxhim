const readline = require('readline-sync');

function Row(num) {
	this.numOfPieces = num;
	
	this.draw = function() {
		let str;
		for (let i = 0; i < this.numOfPieces; i++) {
			str += 'O ';
		}
		console.log(str);
	}
}