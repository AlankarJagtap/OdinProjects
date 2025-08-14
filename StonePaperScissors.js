const arr = ["stone", "paper", "scissors"];

let humanScore = 0;  // score initialized with zero
let compScore = 0;

function playground(compChoice, humanChoice) {
    if (compChoice == "paper" && humanChoice == "stone") {
        alert('Computer won! Paper covers stone!');
        compScore++;
    }
    else if (compChoice == "paper" && humanChoice == "scissors") {
        alert('You won! Scissors cut paper!');
        humanScore++;
    }
    else if (compChoice == "scissors" && humanChoice == "stone") {
        alert('You won! Stone breaks scissors!');
        humanScore++;
    }
    else if (compChoice == "scissors" && humanChoice == "paper") {
        alert('Computer won! Scissors cut paper!');
        compScore++;
    }
    else if (compChoice == "stone" && humanChoice == "scissors") {
        alert('Computer won! Stone breaks scissors!');
        compScore++;
    }
    else if (compChoice == "stone" && humanChoice == "paper") {
        alert('You won! Paper covers stone!');
        humanScore++;
    }
    else {
        alert('A tie! Same pick!');
    }
}

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);   // randomizing choice for computer
    return arr[random];
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice", "stone"); // choice for human
    return humanChoice.toLowerCase();
}

function playRound() {
    for (let i = 5; i > 0; i--) {
        playground(getComputerChoice(), getHumanChoice());
    }
    console.log("Final Scores => \nYour Score: " + humanScore + "\nComputer Score: " + compScore);
}

playRound();
