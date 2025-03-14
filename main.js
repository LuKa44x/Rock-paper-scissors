
function getComputerChoice() {
    let computerAnswer;
    random = Math.floor(Math.random() * 3 + 1);
    console.log(random);
    if (random == 1) { computerAnswer = "rock";}
    else if (random == 2) { computerAnswer = "paper";}
    else{ computerAnswer = "scissors";}
    return computerAnswer;
}

function getHumanChoice(){
    let userAnswer = prompt ("Rock, paper or scissors?");
    return userAnswer;
    
}

console.log(getHumanChoice());
console.log(getComputerChoice());