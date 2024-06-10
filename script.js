const gameChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return gameChoices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    while(true) {
        let humanChoice = prompt("Rock, Paper, or Scissors?")
        humanChoice = humanChoice.toLowerCase;
    
        if (humanChoice === 'rock' || humanChoice == 'paper' || humanChoice == 'scissors') {
            break;
        }
    }

    return humanChoice;
 }

 function playRound(getComputerChoice, getHumanChoice) {
    if (
        (getComputerChoice() === "rock" && getHumanChoice() === "scissor")||
        (getComputerChoice() === "paper" && getHumanChoice() === "rock") ||
        (getComputerChoice() === "scissor" && getHumanChoice() === "paper")
    ) {
        computerScore++;
        console.log(`You lose! ${getComputerChoice()} beats ${getHumanChoice}`)
    } else if (getComputerChoice() === getHumanChoice) {
        console.log("It's a draw!")
    } else {
        humanScore++;
        console.log(`You win! ${getHumanChoice()} beats ${getComputerChoice}`)
    }
 }

let humanScore = 0;
let computerScore = 0;



