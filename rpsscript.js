// * -> string
// produces a randomnly selected hand for the computer

function computerPlay() {
    let options = ["rock", "paper", "scissors"]
    return options[Math.floor(Math.random() * options.length)]
}

let myScore = 0
let comScore = 0

// int * int -> string
// produces the result of a rps match
function winner(comScore, myScore) {
    if (comScore > myScore) {
        console.log("Computer won by " + comScore + " to " + myScore)
    } else if (myScore > comScore) {
        console.log("You won by " + myScore + " to " + comScore)
    } else console.log("It's a tie!")
}


// string * string -> int
// produces the result of a single hand in rps
function playGame(computerSelection,playerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            console.log("It's a tie! You both picked rock")
        } else if (computerSelection == "paper") {
            console.log("You loose! Paper beats rock")
            comScore++
        } else if (computerSelection == "scissors") {
            console.log("You win! Rock beats scissors")
            myScore++
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            console.log("You win! Paper beats rock")
            myScore++
        } else if (computerSelection == "paper") {
            console.log("It's a tie! You both picked paper")
        } else if (computerSelection == "scissors") {
            console.log("You loose! Scissors beats paper")
            comScore++
        }
    } else {
        if (computerSelection == "rock") {
            console.log("You loose! Rock beats scissors")
            comScore++
        } else if (computerSelection == "paper") {
            console.log("You win! Scissors beats paper")
            myScore++
        } else if (computerSelection == "scissors") {
            console.log("It's a tie! You both picked scissors")
        }
    }
}

// * -> string
// produces a game of 5 hands in rps or fewere if a player reaches 3 wins earlier
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