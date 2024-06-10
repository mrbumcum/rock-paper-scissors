const gameChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return gameChoices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    while(true) {
        let humanChoice = prompt("Rock, Paper, or Scissors?")
        humanChoice = humanChoice.toLowerCase();
    
        if (humanChoice === 'rock' || humanChoice == 'paper' || humanChoice == 'scissors') {
            return humanChoice;
        }
    }
 }

 function playRound(getComputerChoice, getHumanChoice) {
    if (
        (getComputerChoice() === "rock" && getHumanChoice() === "scissors")||
        (getComputerChoice() === "paper" && getHumanChoice() === "rock") ||
        (getComputerChoice() === "scissors" && getHumanChoice() === "paper")
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

 function playGame(triesAmount) {
     let humanScore = 0;
     let computerScore = 0;

    for(let i = 0; i < triesAmount; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(computerChoice, humanChoice);
    }

    console.log("Final Scores:");
    console.log("Human Scores", humanScore);
    console.log("Computer Score", computerScore);

    if (humanScore > computerScore) {
        console.log("Congratulations! You won.");
    } else if (humanScore === computerScore) {
        console.log("It's a tie!")
    } else {
        console.log("Oh no! The computer won.")
    }
}

playGame(5);