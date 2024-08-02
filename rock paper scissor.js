const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const resultImage = document.getElementById('result-image');
const resultText = document.getElementById('result-text');

let userChoice = '';

rockBtn.addEventListener('click', () => {
  userChoice = 'rock';
  makeChoice();
});

paperBtn.addEventListener('click', () => {
  userChoice = 'paper';
  makeChoice();
});

scissorsBtn.addEventListener('click', () => {
  userChoice = 'scissors';
  makeChoice();
});

function makeChoice() {
  const computerChoice = getRandomChoice();
  const result = determineWinner(userChoice, computerChoice);

  if (result === 'tie') {
    resultText.textContent = 'It\'s a tie!';
    resultImage.src = 'images/tie.png';
  } else if (result === 'user-win') {
    resultText.textContent = 'You win!';
    resultImage.src = 'images/rock-paper-scissors-win.png';
  } else {
    resultText.textContent = 'You lose!';
    resultImage.src = 'images/rock-paper-scissors-lose.png';
  }
}

function getRandomChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(user, computer) {
  if (user === computer) {
    return 'tie';
  }

  if ((user === 'rock' && computer === 'scissors') || (user === 'scissors' && computer === 'paper') || (user === 'paper' && computer === 'rock')) {
    return 'user-win';
  }

  return 'computer-win';
}