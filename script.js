let gesture = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * 3);
  return gesture[randomIndex];
}

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
    return "It's a tie!";
  } else {
    ties++;
    return "Enter your gesture.";
  }
}

let playerWins = 0;
let computerWins = 0;
let ties = 0;
let roundsPlayed = 0;

function playGame() {
  while (playerWins < 3 && computerWins < 3 && roundsPlayed < 5) {
    const playerSelection = prompt("Rock paper scissors, shoot!").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log("Player chose: " + playerSelection);
    console.log("Computer chose: " + computerSelection);
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
    roundsPlayed++;
  }

  if (playerWins >= 3) {
    console.log("Player wins the game!");
  } else if (computerWins >= 3) {
    console.log("Computer wins the game!");
  } else {
    console.log("The game is tied.");
  }
}

playGame();
