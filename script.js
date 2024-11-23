let rock = 0;
let paper = 1;
let scissors = 2;
let humanScore = 0;
let computerScore = 0;

function convertNumericChoiceToString (numericChoice) {
    if (numericChoice === 0)  {
        return "rock"
    } else if (numericChoice === 1) {
        return "paper"
    } else if (numericChoice === 2) {
        return "scissors" 
    }
}

function convertStringChoiceToNumeric (stringChoice) {
    if (stringChoice === "rock") {
        return 0;
    } else if(stringChoice === "paper") {
        return 1;
    } else if (stringChoice === "scissors") {
        return 2;
    } else return "wrong";
}

function getComputerChoice () {
    let computerNumericChoice = Math.floor(Math.random() * 3);
    return computerNumericChoice;
}

function getHumanChoice () {
    let humanChoice = prompt("rock, paper or scissor?");
    humanChoice = humanChoice.toLowerCase();
    return convertStringChoiceToNumeric(humanChoice);    
}



