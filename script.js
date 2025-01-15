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
let playerScoreSpan = document.querySelector(".score-jogador");
let computerScoreSpan = document.querySelector(".score-computador")

playerOptions.addEventListener("click", playRound);

function getComputerChoice() {
    let computerNumericChoice = Math.floor(Math.random() * 3);
    if (computerNumericChoice == 0) return "pedra";
    if (computerNumericChoice == 1) return "papel";
    if (computerNumericChoice == 2) return "tesoura";
}

function getHumanChoice(e) {
    let humanChoice = e.target.className;
    return humanChoice;
}

function endgame() {
    let divResultado = document.querySelector(".resultado");
    while(divResultado.lastChild) {
        divResultado.removeChild(divResultado.lastElementChild);
    }
    

    let h1 = document.createElement('h1');
    h1.textContent = `Vencedor do Jogo: ${winner}`;
    document.querySelector("body").appendChild(h1);
}

function playRound(e) {
    let humanChoice = getHumanChoice(e);
    let computerChoice = getComputerChoice();

    //mostra a escolha do jogador
    let divResultadoJogador = document.querySelector("#id-resultado-jogador");
    let imgJogador = document.querySelector("#img-jogador");
    imgJogador.setAttribute("src", `imagens/${humanChoice}.png`);
    divResultadoJogador.appendChild(imgJogador);
    divResultadoJogador.style.backgroundColor = "rgb(0, 255, 174)";

    //mostra a escolha do computador
    let divResultadoComputador = document.querySelector("#id-resultado-computador");
    let imgComputador = document.querySelector("#img-computador");
    imgComputador.setAttribute("src", `imagens/${computerChoice}.png`);
    divResultadoComputador.appendChild(imgComputador);
    divResultadoComputador.style.backgroundColor = "rgb(245, 69, 137)";

    let winnerSpan = document.querySelector(".winner > span");

    //determina o vencedor e aumenta o score
    if (computerChoice == "pedra") {
        switch(humanChoice) {
            case "pedra": 
            winnerSpan.textContent = "Empate!";
            humanScore += 1;
            computerScore += 1;
            break;

            case "papel": 
            winnerSpan.textContent = "Você venceu a rodada!";
            humanScore += 1;
            break;

            case "tesoura": 
            winnerSpan.textContent = "Computador venceu a rodada!";
            computerScore += 1;
            break;
        }        
    } else if (computerChoice == "papel") {
        switch(humanChoice) {
            case "pedra": 
            winnerSpan.textContent = "Computador venceu a rodada!";
            computerScore += 1;
            break;

            case "papel": 
            winnerSpan.textContent = "Empate!";
            computerScore += 1;
            humanScore += 1;
            break;

            case "tesoura": 
            winnerSpan.textContent = "Você venceu a rodada!";
            humanScore += 1;
            break;
        } 
    } else if (computerChoice == "tesoura") {
        switch(humanChoice) {
            case "pedra": 
            winnerSpan.textContent = "Você venceu a rodada!";
            humanScore += 1;
            break;

            case "papel": 
            winnerSpan.textContent = "Computador venceu a rodada!";
            computerScore += 1;
            break;

            case "tesoura": 
            winnerSpan.textContent = "Empate!";
            humanScore += 1;
            computerScore += 1;
            break;
        } 
    }

    playerScoreSpan.textContent = `${humanScore}`;
    computerScoreSpan.textContent = `${computerScore}`;
    
    if (humanScore == 5 && computerScore == 5) {
        winner = "Empate!";
        winnerSpan.textContent = "";
        endgame();
    }

    if (humanScore == 5 && computerScore < 5) {
        winner = "Você";
        winnerSpan.textContent = "";
        endgame();
    }

    if (humanScore < 5 && computerScore == 5) {
        winner = "Computador!";
        winnerSpan.textContent = "";
        endgame();
    }
}
