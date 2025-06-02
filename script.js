let score = 0; 
let isGameStarted = false; 

function startGame() {
 isGameStarted = true;
 document.getElementById('result').textContent = "The Game has started! Choose either Rock, Paper, or Scissors to play.";
}

function stopGame() {
 isGameStarted = false;
 document.getElementById('result').textContent = "The Game has stopped!";
}

function resetGame() {
 score = 0;
 isGameStarted = false;
 document.getElementById('score').textContent = "Score: 0";
 document.getElementById('result').textContent = "Game has reset. Click 'Play the Game' to play again.";
}


function play(userChoice) {
 if (!isGameStarted) {
 document.getElementById('result').textContent = "Please press 'Play the Game' first!";
 return;
 }
 const choices = ['Rock', 'Paper', 'Scissors'];
 const computerChoice = choices[Math.floor(Math.random() * 3)];
 let result = '';
 if (userChoice === computerChoice) {
 result = "It is a draw! Play again.";
 } else if (
 (userChoice === 'Rock' && computerChoice === 'Scissors') ||
 (userChoice === 'Paper' && computerChoice === 'Rock') ||
 (userChoice === 'Scissors' && computerChoice === 'Paper')
 ) {
 result = `You have won! ${userChoice} beats ${computerChoice}`;
 score++;
 } else {
 result = `You have lost! ${computerChoice} beats ${userChoice}`;
 score--;
 }
 document.getElementById('result').textContent = result;
document.getElementById('score').textContent = "Score: " + score;
}
