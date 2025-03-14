let humanScore = 0;
let computerScore = 0;
let humanSelection  ;
let computerSelection ;

function getComputerChoice() {
    let computerAnswer;
    random = Math.floor(Math.random() * 3 + 1);
    if (random == 1) { computerAnswer = "rock";}
    else if (random == 2) { computerAnswer = "paper";}
    else{ computerAnswer = "scissors";}
    return computerAnswer.toLowerCase();
}

function getHumanChoice(){
    let userAnswer = prompt ("Rock, paper or scissors?");
    return userAnswer;
    
}

function playRound(getHumanChoice, getComputerChoice){
    if (getHumanChoice == getComputerChoice){
        console.log( "It's a tie!");
    }
    else if (getHumanChoice == "rock" && getComputerChoice == "scissors"){
        humanScore++;
    }
    else if (getHumanChoice == "rock" && getComputerChoice == "paper"){
        computerScore++;
    }
    else if (getHumanChoice == "paper" && getComputerChoice == "rock"){
        humanScore++;
    }
    else if (getHumanChoice == "paper" && getComputerChoice == "scissors"){
        computerScore++;
    }
    else if (getHumanChoice == "scissors" && getComputerChoice == "rock"){
        computerScore++;
    }
    else if (getHumanChoice == "scissors" && getComputerChoice == "paper"){
        humanScore++;
    }
    console.log("Human score: " + humanScore + " Computer score: " + computerScore);
}

function playGame(){
    for (let i =0;i<5;i++){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        
    }
}



playGame();