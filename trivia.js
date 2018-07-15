const readline = require('readline-sync');
let questions = [];
let score = 0;

/**
 * @constructor
 * @param {string} question - The question that is going to be asked
 * @param {string} answer - The answer to the question
 */
function Question(question, answer) {
	this.question = question;
	this.answer = answer;
}

let stateNamesAndCapitals = ["Montgomery, Alabama", "Juneau, Alaska", "Phoenix, Arizona", "Little Rock, Arkansas", "Sacramento, California", "Denver, Colorado", "Hartford, Connecticut", "Dover, Delaware", "Tallahassee, Florida", "Atlanta, Georgia", "Honolulu, Hawaii", "Boise, Idaho", "Springfield, Illinois", "Indianapolis, Indiana", "Des Moines, Iowa", "Topeka, Kansas", "Frankfort, Kentucky", "Baton Rouge, Louisiana", "Augusta, Maine", "Annapolis, Maryland", "Boston, Massachusetts", "Lansing, Michigan", "Saint Paul, Minnesota", "Jackson, Mississippi", "Jefferson City, Missouri", "Helena, Montana", "Lincoln, Nebraska", "Carson City, Nevada", "Concord, New Hampshire", "Trenton, New Jersey", "Santa Fe, New Mexico", "Albany, New York", "Raleigh, North Carolina", "Bismarck, North Dakota", "Columbus, Ohio", "Oklahoma City, Oklahama", "Salem, Oregon", "Harrisburg, Pennsylvania", "Providence, Rhode Island", "Columbia, South Carolina", "Pierre, South Dakota", "Nashville, Tennessee", "Austin, Texas", "Salt Lake City, Utah", "Montpelier, Vermont", "Richmond, Virginia", "Olympia, Washington", "Charleston, West Virginia", "Madison, Wisconsin", "Cheyenne, Wyoming"];

/**
 * randomizes an array
 * @param  {array} array - Array that you want to randomize the index
 * @return {array} array - Randomized array
 */
function randomize(array) {
	let m = array.length, t, i;

	while (m) {
		i = Math.floor(Math.random() * m--);
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}
	return array;
}

function setQuestions(numberOfQuestions) {
	let randomizedStates = randomize(stateNamesAndCapitals);

	for (let i = 0; i < numberOfQuestions; i++) {
		const capital = randomizedStates[i].split(', ')[0];
		const state = randomizedStates[i].split(', ')[1];

		questions.push(new Question((i + 1) + '. What is the capital of ' + state + '? ', capital));
	}
}

function isNumOfQuestionsEntered(num) {
	return num > 0 && num <= 50;
}

function askQuestions() {
	console.log('test your ability on US State capitals!')

	let numberOfQuestions;

	while (!isNumOfQuestionsEntered(numberOfQuestions)) {
		numberOfQuestions = readline.question('How many questions do you want to answer? ');

		if (!isNumOfQuestionsEntered) {
			console.log('silly goose! There are 50 states so there are 50 questions, please enter an appropriate amount.');
		}
	}

	setQuestions(numberOfQuestions);

	for (let i = 0; i < questions.length; i++) {
		let answer = readline.question(questions[i].question);

		if (questions[i].answer.toLowerCase() == answer.toLowerCase()) {
			console.log('you got it correct!');
			score++;
		} else {
			console.log('sorry, thats wrong it\'s actually ' + questions[i].answer);
		}

		console.log('score:', score, '/', numberOfQuestions);
	}
}

askQuestions();
