const intro = document.querySelector('.intro')
const match = document.querySelector('.match')
const play = document.querySelector('.play').addEventListener('click', () => {
  intro.style.display = 'none'
  match.style.display = 'block'
})

let playerScore = 0
let computerScore = 0

choices = ['rock', 'paper', 'scissors']

const playerHand = document.querySelector('.player-hand')
const computerHand = document.querySelector('.computer-hand')
const result = document.querySelector('.result')

const options = document
  .querySelectorAll('.options button')
  .forEach((option) => {
    option.addEventListener('click', () => {
      const choice = Math.floor(Math.random() * 3)
      const computerChoice = choices[choice]
      const playerChoice = option.textContent.toLowerCase()

      playerHand.src = `./img/${playerChoice}.png`
      computerHand.src = `./img/${computerChoice}.png`

      if (playerChoice === computerChoice) {
        result.textContent = "It's a tie"
        return
      }

      if (playerChoice === 'rock') {
        if (computerChoice === 'paper') {
          result.textContent = 'Computer Wins'
          computerScore++
          updateScore()
        } else {
          result.textContent = 'Player Wins'
          playerScore++
          updateScore()
        }
      }

      if (playerChoice === 'paper') {
        if (computerChoice === 'scissors') {
          result.textContent = 'Computer Wins'
          computerScore++
          updateScore()
        } else {
          result.textContent = 'Player Wins'
          playerScore++
          updateScore()
        }
      }

      if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') {
          result.textContent = 'Computer Wins'
          computerScore++
          updateScore()
        } else {
          result.textContent = 'Player Wins'
          playerScore++
          updateScore()
        }
      }
    })
  })

function updateScore() {
  const pScore = document.querySelector('.player-score p')
  const cScore = document.querySelector('.computer-score p')
  pScore.textContent = playerScore
  cScore.textContent = computerScore
}
