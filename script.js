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

let humanScore = 0;
let computerScore = 0;

