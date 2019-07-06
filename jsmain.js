var words = ["padmavat", "lagan", "pari‎", "entertainment", "kahaani","dangal","sanju","brahmastra","queen","raazi",
"ramleela","bodyguard","bharat","barfi","azhar","brothers","singham","raanjhanaa","talaash","khiladi786",
"chakravyuh","rockstar","golmaal","ghajini","welcome","vivah","pk","aashiqui","roy","super30","dilwale","bahubali",
"stree","haider","lootera","zero","parmanu","simmba","padman","andhadhun","kalank","karwaan","kedarnath",
"baazar","gold","raid","manto","mulk"];
var chosenWord = "";
var LettersInWord = [];
var numBlanks = 0;

var blanks = [];
var remGuesses = 10;
var wrongAnswers = [];
var sameLetter = [];

var winCounter = 0;
var lossCounter = 0;

document.getElementById("numWins").innerHTML = "Wins: " + winCounter;
document.getElementById("numLoses").innerHTML = "Loses: " + lossCounter;
document.getElementById("remainingGuess").innerHTML = "Number of Guess Remaining: " + remGuesses;

function playGame() {
    blanks = [];
    remGuesses = 10;
    wrongAnswers = [];
    sameLetter = [];

    chosenWord = words[Math.floor(Math.random() * words.length)];

    LettersInWord = chosenWord.split("");
    numBlanks = LettersInWord.length;
    console.log(numBlanks);

    for (var i = 0; i < numBlanks; i++) {
        blanks.push("_")
    }

    document.getElementById("letters").innerHTML = blanks.join(" ");
    document.getElementById("remainingGuess").innerHTML = " Number of Guess Remaining: " + remGuesses;
    document.getElementById("letterguessed").innerHTML = "Letter already guessed: " + wrongAnswers;
}


function matchLetters(letter) {

  
    var chosenWordLetters = false;

    for (i = 0; i < numBlanks; i++) {
        if (chosenWord[i] === letter) {
            chosenWordLetters = true;
        }
    };

    if (sameLetter.indexOf(letter) == -1) {
        sameLetter.push(letter);
       
    } else {
        alert("you already guessed that letter: " + letter);
    };

    if (chosenWordLetters) {
        for (i = 0; i < numBlanks; i++) {
            if (chosenWord[i] === letter) {
                blanks[i] = letter;
            }
        }
    } else {
       
        if (wrongAnswers.indexOf(letter) === -1) {
            wrongAnswers.push(letter);
            remGuesses--;
        } 
    }
};

function updateGameResults() {

    document.getElementById("letters").innerHTML = blanks.join(" ");
    document.getElementById("remainingGuess").innerHTML =
        " Number of Guess Remaining: " + remGuesses;
    document.getElementById("letterguessed").innerHTML = "letter already guessed: " + wrongAnswers.join(" ");

    if (LettersInWord.join("") === blanks.join("")) {
        winCounter++;
        alert("Congratulations! You Guessed It Right!!!");
        document.getElementById("numWins").innerHTML = "Wins: " + winCounter;
        playGame();
    } else if (remGuesses === 0) {
        lossCounter++;
        alert("Oops!! Game Over");
        document.getElementById("numLoses").innerHTML =
            "Loses: " + lossCounter;
        playGame();
    }
};

playGame();
document.onkeyup = function(event) {
    var userGuesses = String.fromCharCode(event.keyCode).toLowerCase();

    matchLetters(userGuesses);
    updateGameResults();
};