// * -> string
// produces a randomnly selected hand for the computer

function computerPlay() {
    let options = ["rock", "paper", "scissors"]
    return options[Math.floor(Math.random() * options.length)]
}

// define scores for player and computer at beginning of a game
let myScore = 0
let comScore = 0

// querySelectors for player and comScore used to update the score in the DOM
const ps = document.querySelector('.playerScore');
ps.textContent = myScore;
const cs = document.querySelector('.compScore');
cs.textContent = comScore;
const winner = document.querySelector('.winner')

// select all buttons
const buttons = document.querySelectorAll('.button');

// select box where last hand result is displayed
const hand = document.querySelector('.hand');

// string * string -> int
// produces the result of a single hand in rps
function playGame(computerSelection,playerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            hand.textContent = "It's a tie! You both picked rock"
        } else if (computerSelection == "paper") {
            hand.textContent = "You loose! Paper beats rock"
            comScore++
        } else if (computerSelection == "scissors") {
            hand.textContent = "You win! Rock beats scissors"
            myScore++
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            hand.textContent = "You win! Paper beats rock"
            myScore++
        } else if (computerSelection == "paper") {
            hand.textContent = "It's a tie! You both picked paper"
        } else if (computerSelection == "scissors") {
            hand.textContent = "You loose! Scissors beats paper"
            comScore++
        }
    } else {
        if (computerSelection == "rock") {
            hand.textContent = "You loose! Rock beats scissors"
            comScore++
        } else if (computerSelection == "paper") {
            chand.textContent = "You win! Scissors beats paper"
            myScore++
        } else if (computerSelection == "scissors") {
            hand.textContent = "It's a tie! You both picked scissors"
        }
    }
}

// enable buttons
function disable () {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

function enable () {
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
}

//calculates the new score after a round; stops the game if either player won 5 times
function updateScore () {
    if (comScore == 5) {
        ps.textContent = myScore;
        cs.textContent = comScore;
        winner.textContent = "Computer won!";
        disable();
    } else if (myScore == 5) {
        ps.textContent = myScore;
        cs.textContent = comScore;
        winner.textContent = "You won!";
        disable();
    } else 
        ps.textContent = myScore;
        cs.textContent = comScore;
}

// selecter for when player chooses rock
const rock = document.querySelector('#rock'); 
rock.addEventListener('click', () => {
    playGame(computerPlay(),'rock');
    updateScore();
});

// selecter for when player chooses paper
const paper = document.querySelector('#paper'); 
paper.addEventListener('click', () => {
    playGame(computerPlay(),'paper');
    updateScore();
});

// selecter for when player chooses scissors
const scissors = document.querySelector('#scissors'); 
scissors.addEventListener('click', () => {
    playGame(computerPlay(),'scissors');
    updateScore();
});

//restart the game
const restart = document.querySelector('#restart');
restart.addEventListener('click', () => {
    console.log("restart");
    myScore = 0;
    comScore = 0;
    updateScore();
    winner.textContent = "";
    enable();
});


// old code 

// * -> string
// produces a game of 5 hands in rps or fewere if a player reaches 3 wins earlier
/*
function game() {
    myScore = 0
    comScore = 0
    for (let i = 0; i < 5; i++) {
        let choice = prompt("Please choose rock, paper, or scissors").toLowerCase();
        playGame(computerPlay(), choice);
        if (comScore == 3 || myScore == 3) {
            break;
        }
    }
    return winner(comScore, myScore)
}
*/

// int * int -> string
// produces the result of a rps match
/*function winner(comScore, myScore) {
    if (comScore > myScore) {
        console.log("Computer won by " + comScore + " to " + myScore)
    } else if (myScore > comScore) {
        console.log("You won by " + myScore + " to " + comScore)
    } else console.log("It's a tie!")
}*/