let humanScore = 0;
let computerScore = 0;
let humanSelection ;
let computerSelection;
let tieCounter=0;




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
    divTie.textContent= ('');
    if (getHumanChoice == getComputerChoice){
        divTie.textContent=( "It's a tie! (" + ++tieCounter + ")");
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
    divResult.innerHTML=("You chose: " + getHumanChoice + " Computer chose: " + getComputerChoice + "<br>" +                //.innerHTML instead of .textContent, tag <br> for go in the second line (\n works only in the console)
                           "Human score: " + humanScore + " Computer score: " + computerScore
    );
    winnerCheck();
}

function winnerCheck(){
    if (humanScore==5) {
        document.querySelectorAll("button").forEach(button =>{
            button.disabled = true;
        });
        return divResult.textContent=("Human win! " + "Human score: " + humanScore + " Computer score: " + computerScore + " (" + tieCounter + " draws in total)");
    }
    else if(computerScore==5) {
        document.querySelectorAll("button").forEach(button =>{
            button.disabled = true;
        });
        return divResult.textContent=("Computer win! " + "Human score: " + humanScore + " Computer score: " + computerScore + " (" + tieCounter + " draws in total)");
    }
}

/*function playGame(){
    for (let i =0;i<5;i++){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        
    }
}



playGame(); */



let rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", ()=>{
    playRound("rock", getComputerChoice())
});

let paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", ()=>{
    playRound("paper", getComputerChoice())
});

let scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", ()=>{
    playRound("scissors", getComputerChoice())
});

let divResult = document.querySelector(".result");
let divTie = document.querySelector(".tie");