let rock = 0;
let paper = 1;
let scissors = 2;
let humanScore = 0;
let computerScore = 0;
let round = 1;

function convertNumericChoiceToString(numericChoice) {
    if (numericChoice === 0) {
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
    } else if (stringChoice === "paper") {
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
    if (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors") {
        console.log("you can only pick ROCK, PAPER or SCISSORS. Try again!")
        return getHumanChoice();
    } else  {
        return convertStringChoiceToNumeric(humanChoice);
    }
    
}

function playRound(computerChoice, humanChoice) {

    if (computerChoice === 0 && humanChoice == 0) {
        console.log("we have a tie!");
        round++;
    } else if (computerChoice === 0 && humanChoice == 1) {
        humanScore++;
        console.log("human wins!");
        round++;
    } else if (computerChoice === 0 && humanChoice == 2) {
        computerScore++;
        console.log("computer wins!");
        round++;
    } else if (computerChoice === 1 && humanChoice == 0) {
        computerScore++;
        console.log("computer wins!");
        round++;
    } else if (computerChoice === 1 && humanChoice == 1) {
        console.log("we have a tie!");
        round++;
    } else if (computerChoice === 1 && humanChoice == 2) {
        humanScore++;
        console.log("human wins!");
        round++;
    } else if (computerChoice === 2 && humanChoice == 0) {
        humanScore++;
        console.log("human wins!");
        round++;
    } else if (computerChoice === 2 && humanChoice == 1) {
        computerScore++;
        console.log("computer wins!");
        round++;
    } else if (computerChoice === 2 && humanChoice == 2) {
        console.log("we have a tie!");
        round++;
    }
}

function playGame() {
    let computerSelection;
    let humanSelection;

    //ROUND 1    
    console.log("round " + round + " ------------------------------------------------------");
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    console.log("computer chooses: " + convertNumericChoiceToString(computerSelection));
    console.log("human chooses: " + convertNumericChoiceToString(humanSelection));
    playRound(computerSelection, humanSelection);
    console.log("computer scored: " + computerScore);
    console.log("human scored: " + humanScore);
    console.log("-------------------------------------------------------")

    //ROUND 2   
    console.log("round " + round + " ------------------------------------------------------");
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    console.log("computer chooses: " + convertNumericChoiceToString(computerSelection));
    console.log("human chooses: " + convertNumericChoiceToString(humanSelection));
    playRound(computerSelection, humanSelection);
    console.log("computer scored: " + computerScore);
    console.log("human scored: " + humanScore);
    console.log("-------------------------------------------------------")

    //ROUND 3    
    console.log("round " + round + " ------------------------------------------------------");
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    console.log("computer chooses: " + convertNumericChoiceToString(computerSelection));
    console.log("human chooses: " + convertNumericChoiceToString(humanSelection));
    playRound(computerSelection, humanSelection);
    console.log("computer scored: " + computerScore);
    console.log("human scored: " + humanScore);
    console.log("-------------------------------------------------------")

    if (computerScore > humanScore) {
        console.log("computer wins the game!")
    } else if (computerScore < humanScore) {
        console.log("human wins the game")
    } else if (computerScore > humanScore) {
        console.log("this game is a tie!")
    }
}

playGame();