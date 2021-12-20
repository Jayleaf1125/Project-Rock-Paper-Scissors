// Computer
const computerPlay = () => {
    const options = ["Rock", "Paper", "Scissors"]
    let randomOption = Math.floor(Math.random() * options.length)
    return options[randomOption]
}

// console.log(computerPlay())

// Single Round
const playRound = (playerSelection, computerSelection) => {

    // Rock & Scissors
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        return "Player Wins!"
    } 

    if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        return "Computer Wins!"
    } 

    // Rock & Paper
    if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        return "Player Wins!"
    } 

    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        return "Computer Wins!"
    } 

    // Paper & Scissors
    if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        return "Player Wins!"
    } 

    if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        return "Computer Wins!"
    } 

    // Tie
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "Ouch! It's a tie"
    }
    
}

const playerSelection = "paper";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));

// Game
const gameTime = (playerSelection, computerSelection) => {
    let playerCounter = 0;
    let computerCounter = 0;

    
}

/*

Project Reference:
- https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors


*/