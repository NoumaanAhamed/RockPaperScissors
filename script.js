//Rock Paper Scissors

let rounds = 5;
let scoreUser = 0;
let scoreComputer = 0;
//for 5 rounds
for(let i = 1;i <= rounds;i++){

//Get Input from user
let userInputRaw = prompt("Enter Your Choice:");
let userInput = userInputRaw.charAt(0).toUpperCase() + userInputRaw.slice(1).toLowerCase();
//get input from computer 
let computerInput = getComputerInput();
alert("Computer Choose " + computerInput);
//compare the results 
let result = game(userInput,computerInput);
//keep count of score
alert(result)
}
alert(win(scoreUser,scoreComputer))
//declare the winner

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
            scoreComputer++;
            return "Lose : Paper Beats Rock"
        }
        else{
            scoreUser++;
            return "Win : Rock beats Scissors"
        }
    }
    else if( UI == "Paper"){
        if(CI == "Rock"){
            scoreUser++;
            return "Win : Paper Beats Rock"
        }
        else{
            scoreComputer++;
            return "Lose : Scissors beats Paper"
        }
    }
    else if( UI == "Scissors"){
        if(CI == "Paper"){
            scoreUser++;
            return "Win : Scissors Beats Paper"
        }
        else{
            scoreComputer++;
            return "Lose : Rock beats Scissors"
        }
    }
    else{
        return "Enter Valid Choice"
    }
}

function win(scoreA,scoreB){
    return scoreA == scoreB ? "Draw" : scoreA > scoreB ? "User Wins" : "Computer Wins"
}