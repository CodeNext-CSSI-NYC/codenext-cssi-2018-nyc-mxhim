let fs = require('fs');
const words = fs.readFileSync('words.txt').toString().split("\n");
let readline = require('readline-sync');
let randomInt = require('random-int');

// This statement gives us all the 7 and 8 letter words from the list.
// Those seems like good lengths for hangman, but feel free to change it up.
let wordsToPickFrom = words.filter(word => word.length == 7 || word.length == 8);

// Let's make a hangman game. Step 1 is to randomly choose a word from wordsToPickFrom
// Use the random-int package and pick a random index from wordsToPickFrom
let randomWord = wordsToPickFrom[randomInt(wordsToPickFrom.length - 1)];
// We will use an array to track the letters that the user has guessed so far.
// At the start, for a seven letter word that array will look like this:
// ["_", "_", "_", "_", "_", "_", "_"]
// Go ahead and create this array using a for loop. Note that its length will
// depend on the length of the secret word, so you cannot just say 7 in the for loop.
// We will call this array tracker. Whenever the user guesses letters that are in the word,
// We will replace the underscores (_) with the letter. So if the word is musical
// and you guess u, this tracker should become ["_", "U", "_", "_", "_", "_", "_"]

function isGameOver(tracker) {
    return tracker.includes('_ ');
}

function render(tracker) {
    let str = '';
    for (let item of tracker) {
        str += (item + ' ');
    }
    console.log(str);
}

function createTracker(word) {
    let arr = [];
    for (let i = 0; i < word.length; i++) {
        arr.push('_ ');
    }
    return arr;
}

function play() {
    let randomWord = wordsToPickFrom[randomInt(wordsToPickFrom.length - 1)];
    let tracker = createTracker(randomWord);
    let prevTracker = [];
    for (let items of tracker) {
        prevTracker.push(items);
    }
    let numGuessWrong = 0;
    let wrongLetters = [];
    while (isGameOver(tracker) && numGuessWrong < 6) {
        console.clear();
        draw(numGuessWrong);
        render(tracker);
        console.log('\n');
        displayWrongLetters(wrongLetters);
        let userInput = readline.question('Guess a letter: ');
        if (randomWord.includes(userInput)) {
            let indexes = [];
            for (let i = 0; i < randomWord.length; i++) {
                if (userInput == randomWord[i]) {
                    indexes.push(i);
                }
            }
            for (let items of indexes) {
                tracker[items] = randomWord[items];
            }
            prevTracker = tracker;
        } else {
            console.log('sorry you guessed wrong!');
            tracker = prevTracker;
            numGuessWrong++;
            wrongLetters.push(userInput);
        }
    }
    if (numGuessWrong == 6) {
        console.clear();
        draw(numGuessWrong);
        render(randomWord.split(''));
        console.log('YOU LOSE');
    } else if (tracker.join('') == randomWord) {
        console.clear();
        draw(numGuessWrong);
        render(tracker);
        console.log('\n');
        displayWrongLetters(wrongLetters);
        console.log('\n');
        console.log('You got it! ' + randomWord);
    }
}

function displayWrongLetters(wrongLetters) {
    let str = 'Wrong Letters: ';
    if (wrongLetters.length != 0) {
        for (let item of wrongLetters) {
            str += item + ', ';
        }
        console.log(str);
    }
}

let post = ['    |---|', '    |', '    |', '    |', '---------'];
let postWithHead = ['    |---|', '    |  ( )', '    |', '    |', '---------'];
let headAndTorso = ['    |---|', '    |  ( )', '    |   |', '    |', '---------'];
let headTorsoLeg = ['    |---|', '    |  ( )', '    |   |', '    |  /', '---------'];
let headTorso2Legs = ['    |---|', '    |  ( )', '    |   |', '    |  / \\', '---------'];
let bodyWithOneArm = ['    |---|', '    |  ( )', '    | --|', '    |  / \\', '---------'];
let body = ['    |---|', '    |  ( )', '    | --|--', '    |  / \\', '---------'];

let diffPosts = [post, postWithHead, headAndTorso, headTorsoLeg, headTorso2Legs, bodyWithOneArm, body];

function draw(num) {
    let post = diffPosts[num];
    for (let line of post) {
        console.log(line);
    }
}

function run() {
    console.clear();
    play();
}

run();