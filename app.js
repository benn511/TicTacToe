magicSquare = [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 6],
];

//Create new game
let game = new ttt();

//Html elements
const statusDiv = document.querySelector(".status");
const resetDiv = document.querySelector(".reset");
const cellDivs = document.querySelectorAll(".game-cell");
const winDiv = document.querySelector(".winner");
const container = document.querySelector(".container");

// const handleCellClick = (e) => {
//   if (game.isLive()) {
//     const id = Number(e.target.id);
//     game.updateGame(id);

//     // updateBoards(e.target.id);
//     //frontend update
//     const classList = e.target.classList;
//     if (classList[1] == "x" || classList[1] == "o") {
//       return;
//     }
//     //On game over display banner
//     if (!game.gameIsLive) {
//       //Display win message
//       if (game.checkWin(game.boardX)) {
//         statusDiv.innerHTML = "X has won!";
//         console.log("X has won!");
//       } else if (game.checkWin(game.boardY)) {
//         statusDiv.innerHTML = "O has won!";
//         console.log("O has won");
//       } else {
//         statusDiv.innerHTML = "Game tie!";
//         console.log("Game has ended in a tie!");
//       }
//     }
//     game.togglePlayer();
//   } else {
//     if (game.checkWin(game.boardX) || game.checkWin(game.boardY)) {
//       console.log("Game over: has been decided already!");
//     }
//   }
// };

const handleClick = (e) => {
  let currTarget = e.target;
  console.log(e.target);
  if (currTarget.classList.contains("game-cell")) {
    if (game.isLive()) {
      game.process(currTarget);
    } else {
      //Display game over message or winner?
    }
  } else if (currTarget.classList.contains("reset")) {
    game.reset();
  }
};

container.addEventListener("click", handleClick);
