const gameChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return gameChoices[Math.floor(Math.random() * 3)];
}

 function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const pointHeader = document.querySelector("div.scoreboard h3.header-font");
    const computerChoiceImg = document.querySelector("#computerImg");
    const humanChoiceImg = document.querySelector("#humanImg");
    const humanScoreP = document.querySelector("#humanScore");
    const computerScoreP =document.querySelector("#computerScore");

    computerChoiceImg.textContent = document.querySelector("#" + computerChoice + "Btn").textContent;
    humanChoiceImg.textContent = document.querySelector("#" + humanChoice + "Btn").textContent;


    if (
        (computerChoice === "rock" && humanChoice === "scissors")||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        computerScore++;
        pointHeader.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    } else if (computerChoice === humanChoice) {
        pointHeader.textContent = "It's a draw!";
    } else {
        humanScore++;
         pointHeader.textContent = `You win! ${computerChoice} beats ${computerChoice}`;
    }

    humanScoreP.textContent = humanScore;
    computerScoreP.textContent = computerScore;
 }

 function playGame(humanChoice) {

    const finalGameHeader = document.querySelector(".scoreboard h3.header-font");
    
    playRound(humanChoice);

    if (humanScore === 5 || computerScore === 5) {
        console.log("Final Scores:");
        console.log("Human Scores", humanScore);
        console.log("Computer Score", computerScore);

        if (humanScore > computerScore) {
            finalGameHeader.textContent = "Congratulations! You won the game.";
        } else if (humanScore === computerScore) {
            finalGameHeader.textContent = "The game ended in a tie!";
        } else {
            finalGameHeader.textContent = "Oh no! The computer won the game.";
        }  

        humanScore = 0;
        computerScore = 0;
    }

}

let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');
 
rockBtn.addEventListener("click", () => playGame("rock"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorsBtn.addEventListener("click", () => playGame("scissors"));