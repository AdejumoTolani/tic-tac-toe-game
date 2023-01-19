const cells = document.querySelectorAll(".cell");
const button = document.querySelector('button');
const container = document.querySelector('.container')
const intro = document.querySelector('.intro')
const playerOne = document.getElementById('playerOne')
const playerTwo = document.getElementById('playerTwo')
const winner =document.querySelector('.winner')
const winnerContainer =document.querySelector('.show-winner')
var playerX = "X";
var playerO = "O";
var nowPlaying = playerX;
var isPlaying = true;
var playerXPlays = [];
var playerOPlays = [];
const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
var checkWinnerO;
var checkWinnerX;

window.onload = function () {
  if(isPlaying){
    gameStart();
  }
};

function gameStart() {
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (cell.textContent !== "" || checkWinnerO || checkWinnerX) {
        return;
      } else {
        cell.textContent = nowPlaying;
        cell.style.backgroundColor = 'rgba(199, 20, 109, 0.877)'
      }

      if (nowPlaying == playerO) {
        nowPlaying = playerX;
        playerOPlays.push(parseInt(cell.id));
      } else {
        nowPlaying = playerO;
        playerXPlays.push(parseInt(cell.id));
      }
      checkWinnerO = winPattern.some((combo) => {
        isPlaying = false;
        return combo.every((i) => {
          return playerOPlays.includes(i);
        });
      })
      checkWinnerX = winPattern.some((combo) => {
        isPlaying = false;
        return combo.every((i) => {
          return playerXPlays.includes(i);
        });
      });

      // update UI based on checks
      if (checkWinnerO) {
        winnerContainer.style.display = 'flex'
        container.style.display = 'none'
        // winner.style.display = 'block'
        winner.textContent = playerTwo.value;
      }
         else if(checkWinnerX) {
          winnerContainer.style.display = 'flex'
          container.style.display = 'none'
          // winner.style.display = 'block'
          winner.textContent = playerOne.value;
      }
    });
  });
}

button.addEventListener('click', (e)=>{
  e.preventDefault();
  //Check for non empty name field
  if(playerOne.value.length >= 1 && playerTwo.value.length >= 1 ) {
    intro.style.display = 'none';
  container.style.display = 'grid';
  }
  else{
    alert('Please type in a name')
  }
  

})