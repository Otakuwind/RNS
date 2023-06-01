const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');

const scoreboard = {
    player: 0,
    computer: 0
}

//play
function play(e) {
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
console.log(playerChoice, computerChoice);
//computers choice
function getComputerChoice() {
  const rand = Math.random();
if (rand < 0.34) {
    return 'rock';
  } else if (rand <= 0.67) {
    return 'paper';
  } else {
    return 'scissors';
  }
}




}

// events

choices.forEach(choice => choice.addEventListener('click', play));

