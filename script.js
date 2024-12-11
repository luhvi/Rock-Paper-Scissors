let playerMove;

let computerMove;

const rockButton = document.getElementById('rockButton');
rockButton.addEventListener('click', () => {
  playerMove = 'rock';
  calculateResult();
});

const paperButton = document.getElementById('paperButton');
paperButton.addEventListener('click', () => {
  playerMove = 'paper';
  calculateResult();
});

const scissorsButton = document.getElementById('scissorsButton');
scissorsButton.addEventListener('click', () => {
  playerMove = 'scissors';
  calculateResult();
});

const calculateResult = () => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  if (randomNumber > 0 && randomNumber <= 3) {
    computerMove = 'rock';
  } else if (randomNumber > 3 && randomNumber <= 6) {
    computerMove = 'paper';
  } else if (randomNumber > 6 && randomNumber <= 10) {
    computerMove = 'scissors';
  }

  const resultDisplay = document.getElementById('resultDisplay');

  if (playerMove === computerMove) {
    resultDisplay.innerText = `Tie! You both chose ${playerMove}.`;
  } else if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'paper' && computerMove === 'rock') ||
    (playerMove === 'scissors' && computerMove === 'paper')
  ) {
    resultDisplay.innerText = `You won! You chose ${playerMove}. The computer chose ${computerMove}.`;
  } else {
    resultDisplay.innerText = `The computer won! You chose ${playerMove}. The computer chose ${computerMove}.`;
  }
};
