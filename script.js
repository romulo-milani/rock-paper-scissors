let pedra = 0;
let papel = 1;
let tesoura = 2;
let humanScore = 0;
let computerScore = 0;
let round = 1;
let winner = "";
let pedraButton = document.querySelector("#pedra");
let papelButton = document.querySelector("#papel");
let tesouraButton = document.querySelector("#tesoura");
let playerOptions = document.querySelector(".playerOptions");
let playerScoreSpan = document.querySelector(".player-score");
let computerScoreSpan = document.querySelector(".computer-score")

playerScoreSpan.textContent = `Player score: ${humanScore}`;
computerScoreSpan.textContent = `Computer score: ${computerScore}`;

playerOptions.addEventListener("click", playRound);

function getComputerChoice() {
    let computerNumericChoice = Math.floor(Math.random() * 3);
    if (computerNumericChoice == 0) return "pedra";
    if (computerNumericChoice == 1) return "papel";
    if (computerNumericChoice == 2) return "tesoura";
}

function getHumanChoice(e) {
    //let humanChoice = e.target.textContent;
    let humanChoice = e.target.className;
    console.log(humanChoice);
    return humanChoice;
}

function endgame() {
    document.querySelector(".player-choice").remove();
    document.querySelector(".computer-choice").remove();
    document.querySelector(".winner").remove();

    let h1 = document.createElement('h1');
    h1.textContent = `Vencedor do Jogo: ${winner}`;
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

    if (computerChoice == "pedra") {
        switch(humanChoice) {
            case "pedra": 
            winnerSpan.textContent = "Empate!";
            humanScore += 1;
            computerScore += 1;
            break;

            case "papel": 
            winnerSpan.textContent = "Você!";
            humanScore += 1;
            break;

            case "tesoura": 
            winnerSpan.textContent = "Computador!";
            computerScore += 1;
            break;
        }        
    } else if (computerChoice == "papel") {
        switch(humanChoice) {
            case "pedra": 
            winnerSpan.textContent = "Computador!";
            computerScore += 1;
            break;

            case "papel": 
            winnerSpan.textContent = "Empate!";
            computerScore += 1;
            humanScore += 1;
            break;

            case "tesoura": 
            winnerSpan.textContent = "Você!";
            humanScore += 1;
            break;
        } 
    } else if (computerChoice == "tesoura") {
        switch(humanChoice) {
            case "pedra": 
            winnerSpan.textContent = "Você!";
            humanScore += 1;
            break;

            case "papel": 
            winnerSpan.textContent = "Computador!";
            computerScore += 1;
            break;

            case "tesoura": 
            winnerSpan.textContent = "Empate!";
            humanScore += 1;
            computerScore += 1;
            break;
        } 
    }

    playerScoreSpan.textContent = `Player score: ${humanScore}`;
    computerScoreSpan.textContent = `Computer score: ${computerScore}`;
    
    if (humanScore == 5 && computerScore == 5) {
        winner = "Empate!";
        endgame();
    }

    if (humanScore == 5 && computerScore < 5) {
        winner = "Você";
        endgame();
    }

    if (humanScore < 5 && computerScore == 5) {
        winner = "Computador!";
        endgame();
    }
}
