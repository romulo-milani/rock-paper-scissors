let rock = 0;
let paper = 1;
let scissors = 2;
let humanScore = 0;
let computerScore = 0;
let round = 1;
let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");
let playerOptions = document.querySelector(".playerOptions");

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
            break;

            case "paper": 
            winnerSpan.textContent = "Player wins!";
            break;

            case "scissors": 
            winnerSpan.textContent = "Computer wins!";
            break;
        }        
    } else if (computerChoice == "paper") {
        switch(humanChoice) {
            case "rock": 
            winnerSpan.textContent = "Computer wins!";
            break;

            case "paper": 
            winnerSpan.textContent = "Tie!";
            break;

            case "scissors": 
            winnerSpan.textContent = "Player wins!";
            break;
        } 
    } else if (computerChoice == "scissors") {
        switch(humanChoice) {
            case "rock": 
            winnerSpan.textContent = "Player wins!";
            break;

            case "paper": 
            winnerSpan.textContent = "Computer wins!";
            break;

            case "scissors": 
            winnerSpan.textContent = "Tie!";
            break;
        } 
    }
}