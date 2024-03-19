const gesture = ["rock", "paper", "scissors"];

// Randomly picks a gesture.
function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * 3);
  return gesture[randomIndex];
}

let playerWins = 0;
let computerWins = 0;
let ties = 0;
let gamesPlayed = 0;

// Main rock paper scissors function, also increases playerWins variable.
function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerWins++;
    return "Player wins!";
  } else if (
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "rock" && computerSelection === "paper")
  ) {
    computerWins++;
    return "Computer wins!";
  } else if (
    (playerSelection === "scissors" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "paper") ||
    (playerSelection === "rock" && computerSelection === "rock")
  ) {
    ties++;
    return "It's a tie!";
  } else {
    return "Enter your gesture.";
  }
}

// Function to prompt the players gesture and log outcomes.
function playGame() {
  const playerSelection = prompt("Rock paper scissors, shoot!").toLowerCase();
  const computerSelection = getComputerChoice();
  console.log("Player chose: " + playerSelection);
  console.log("Computer chose: " + computerSelection);
  const result = playRound(playerSelection, computerSelection);
  console.log(result);
}

// For loop that stops the game once the winner is determined.
for (; gamesPlayed < 5 && computerWins < 3 && playerWins < 3; gamesPlayed++) {
  playGame();
}

// If else statement to determine the winner.
if (playerWins >= 3) {
  console.log("Player wins the game!");
} else if (computerWins >= 3) {
  console.log("Computer wins the game!");
} else {
  console.log("The game is tied.");
}
