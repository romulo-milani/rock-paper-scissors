let rock = 0;
let paper = 1;
let scissors = 2;
let humanScore = 0;
let computerScore = 0;

function convertNumericChoiceToString(numericChoice) {
    if (numericChoice === 0)  {
        return "rock"
    } else if (numericChoice === 1) {
        return "paper"
    } else if (numericChoice === 2) {
        return "scissors" 
    }
}

function convertStringChoiceToNumeric(stringChoice) {
    if (stringChoice === "rock") {
        return 0;
    } else if(stringChoice === "paper") {
        return 1;
    } else if (stringChoice === "scissors") {
        return 2;
    } else return "wrong";
}

function getComputerChoice() {
    let computerNumericChoice = Math.floor(Math.random() * 3);
    return computerNumericChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("rock, paper or scissor?");
    humanChoice = humanChoice.toLowerCase();
    return convertStringChoiceToNumeric(humanChoice);    
}

function playRound(computerChoice, humanChoice) {

    if (computerChoice === 0 && humanChoice == 0) {
        console.log("we have a tie!");
    } else if (computerChoice === 0 && humanChoice == 1) {
        humanScore++;
        console.log("human wins!");
    } else if (computerChoice === 0 && humanChoice == 2) {
        computerScore++;
        console.log("computer wins!");
    } else if (computerChoice === 1 && humanChoice == 0) {
        computerScore++;
        console.log("computer wins!");
    } else if (computerChoice === 1 && humanChoice == 1) {
        console.log("we have a tie!");
    } else if (computerChoice === 1 && humanChoice == 2) {
        humanScore++;
        console.log("human wins!");
    } else if (computerChoice === 2 && humanChoice == 0) {
        humanScore++;
        console.log("human wins!");
    } else if (computerChoice === 2 && humanChoice == 1) {
        computerScore++;
        console.log("computer wins!");
    } else if (computerChoice === 2 && humanChoice == 2) {
        console.log("we have a tie!");
    }
}

const computerSelection = getComputerChoice();
const humanSelecion = getHumanChoice();

playRound(computerSelection, humanSelecion);