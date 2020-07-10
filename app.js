const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playBtn.addEventListener('click', () => {
      introScreen.classList.add('fadeOut');
      match.classList.add('fadeIn');
    });
  };

  //play match
  const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');

    //computer options
    const computerOptions = ['rock', 'paper', 'scissors'];
    options.forEach((option) => {
      option.addEventListener('click', function () {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        compareHands(this.textContent, computerChoice);

        playerHand.src = `./assets/${this.textContent}.png`;
        computerHand.src = `./assets/${computerChoice}.png`;
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector('.winner');

    if (playerChoice === computerChoice) {
      winner.textContent = "it's a tie";
      return;
    }

    if (playerChoice === 'rock') {
      if (computerChoice === 'scissors') {
        winner.textContent = 'player wins';
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'computer wins';
        cScore++;
        updateScore();
        return;
      }
    }

    if (playerChoice === 'paper') {
      if (computerChoice === 'scissors') {
        winner.textContent = 'computer wins';
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'player wins';
        pScore++;
        updateScore();
        return;
      }
    }

    if (playerChoice === 'scissors') {
      if (computerChoice === 'rock') {
        winner.textContent = 'computer wins';
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'player wins';
        pScore++;
        updateScore();
        return;
      }
    }
  };

  startGame();
  playMatch();
};
game();
