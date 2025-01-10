let rock = 0;
let paper = 1;
let scissors = 2;
let humanScore = 0;
let computerScore = 0;
let round = 1;
let winner = "";
let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");
let playerOptions = document.querySelector(".playerOptions");
let playerScoreSpan = document.querySelector(".player-score");
let computerScoreSpan = document.querySelector(".computer-score")

playerScoreSpan.textContent = `Player score: ${humanScore}`;
computerScoreSpan.textContent = `Computer score: ${computerScore}`;

playerOptions.addEventListener("click", playRound);

function getComputerChoice() {
    let computerNumericChoice = Math.floor(Math.random() * 3);
    if (computerNumericChoice == 0) return "rock";
    if (computerNumericChoice == 1) return "paper";
    if (computerNumericChoice == 2) return "scissors";
}

function getHumanChoice(e) {
    let humanChoice = e.target.textContent;
    return humanChoice;    
}

function endgame() {
    document.querySelector(".player-choice").remove();
    document.querySelector(".computer-choice").remove();
    document.querySelector(".winner").remove();

    let h1 = document.createElement('h1');
    h1.textContent = `The winner is: ${winner}`;
    document.querySelector("body").appendChild(h1);
}

function playRound(e) {
    let humanChoice = getHumanChoice(e);
    let computerChoice = getComputerChoice();
    let winnerSpan = document.querySelector(".winner > span");

    let humanSpan = document.querySelector(".player-choice > span");
    humanSpan.textContent = `${humanChoice}`;

    let computerSpan = document.querySelector(".computer-choice > span");
    computerSpan.textContent = `${computerChoice}`;

    if (computerChoice == "rock") {
        switch(humanChoice) {
            case "rock": 
            winnerSpan.textContent = "Tie!";
            humanScore += 1;
            computerScore += 1;
            break;

            case "paper": 
            winnerSpan.textContent = "Player wins!";
            humanScore += 1;
            break;

            case "scissors": 
            winnerSpan.textContent = "Computer wins!";
            computerScore += 1;
            break;
        }        
    } else if (computerChoice == "paper") {
        switch(humanChoice) {
            case "rock": 
            winnerSpan.textContent = "Computer wins!";
            computerScore += 1;
            break;

            case "paper": 
            winnerSpan.textContent = "Tie!";
            computerScore += 1;
            humanScore += 1;
            break;

            case "scissors": 
            winnerSpan.textContent = "Player wins!";
            humanScore += 1;
            break;
        } 
    } else if (computerChoice == "scissors") {
        switch(humanChoice) {
            case "rock": 
            winnerSpan.textContent = "Player wins!";
            humanScore += 1;
            break;

            case "paper": 
            winnerSpan.textContent = "Computer wins!";
            computerScore += 1;
            break;

            case "scissors": 
            winnerSpan.textContent = "Tie!";
            humanScore += 1;
            computerScore += 1;
            break;
        } 
    }

    playerScoreSpan.textContent = `Player score: ${humanScore}`;
    computerScoreSpan.textContent = `Computer score: ${computerScore}`;
    
    if (humanScore == 5 && computerScore == 5) {
        winner = "tie";
        endgame();
    }

    if (humanScore == 5 && computerScore < 5) {
        winner = "player";
        endgame();
    }

    if (humanScore < 5 && computerScore == 5) {
        winner = "computer";
        endgame();
    }
}
