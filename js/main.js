//defining user choices
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const userSelection = document.querySelectorAll('.userSelection');
const result = document.querySelector('.results')
const reset = document.querySelector('.reset')

//add event listeners
userSelection.forEach(selection => {
  selection.addEventListener('click',makeReq)
})

// WIN CONDITIONS 
function winner(player, computer) {
  if(player === computer){
      result.textContent = 'Tie'
  } else if (player === 'rock') {
      if(computer === 'paper'){
          result.textContent = 'Computer Wins!';
      } else {
          result.textContent = 'You Win!';
      }
  } else if (player === 'scissor') {
      if(computer === 'rock'){
          result.textContent = 'Computer Wins!';
      } else {
          result.textContent = 'You Win!';
      }
  } else if (player === 'paper') {
      if(computer === 'scissor'){
          result.textContent = 'Computer Wins!';
      } else {
          result.textContent = 'You Win!';
      }
  }

  document.querySelector('#playerChoice').textContent = player;
  document.querySelector('#computerChoice').textContent = computer;
}

async function makeReq(event){
  let player = '';
  const res = await fetch(`/api?student=leon`);
  const data = await res.json();
  const { target } = event;
  console.log(data);
//   document.querySelector('#computerChoiceImg').src = data.img;


  if (target.classList.contains('rock') || target.classList.contains('operator')) {
      player = 'rock';
  } else if (target.classList.contains('paper')) {
      player = 'paper'
  } else if (target.classList.contains('scissor')) {
      player = 'scissor'
  }

  const computer = data.result
  winner(player,computer)
}