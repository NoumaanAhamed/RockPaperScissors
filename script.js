let playerScore = 0;
let computerScore = 0;

let winningScore = 5;

let computerChoice;
// let userInput = 

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {computerChoice = getComputerInput();updateScore(button.textContent,computerChoice,game(button.textContent,computerChoice))})
})

const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const resultDisplay = document.getElementById("result");

// const rockButton = document.querySelector(".rock");//
// const paperButton = document.querySelector(".paper");
// const scissorsButton = document.querySelector(".scissors");

// rockButton.addEventListener('click',() => {computerChoice = getComputerInput();updateScore("Rock",computerChoice,game("Rock",computerChoice))})
// paperButton.addEventListener('click',() => {computerChoice = getComputerInput();updateScore("Paper",computerChoice,game("Paper",computerChoice))})
// scissorsButton.addEventListener('click',() => {computerChoice = getComputerInput();updateScore("Scissors",computerChoice,game("Scissors",computerChoice))})

function updateScore(playerChoice,computerChoice,result){

    playerChoiceDisplay.textContent = playerChoice;
    computerChoiceDisplay.textContent = computerChoice;
    resultDisplay.textContent = result;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    //placed inside as update is called everytime button is clicked
    if(playerScore == winningScore){
    resultDisplay.textContent = "You won the game!"
    disableButtons()
    }
    if(computerScore == winningScore){
    resultDisplay.textContent = "Computer won the game"
    disableButtons()
    }
    
}

function disableButtons(){
    buttons.forEach((button) => {
        button.disabled = true
    }
    )
}

function getComputerInput(){
    let choice = Math.floor(Math.random()*3);
    return choice == 0 ? "Rock" : choice == 1 ? "Paper" : "Scissors";
}

function game(UI,CI){
    if(UI == CI){
        return `Draw : Both ${UI}`
    }
    else if( UI == "Rock"){
        if(CI == "Paper"){
            computerScore++;
            return "Lose : Paper Beats Rock"
        }
        else{
            playerScore++;
            return "Win : Rock beats Scissors"
        }
    }
    else if( UI == "Paper"){
        if(CI == "Rock"){
            playerScore++;
            return "Win : Paper Beats Rock"
        }
        else{
            computerScore++;
            return "Lose : Scissors beats Paper"
        }
    }
    else if( UI == "Scissors"){
        if(CI == "Paper"){
            playerScore++;
            return "Win : Scissors Beats Paper"
        }
        else{
            computerScore++;
            return "Lose : Rock beats Scissors"
        }
    }
    else{
        return "Enter Valid Choice"
    }
}
