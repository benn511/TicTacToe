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

//event handlers
const handleReset = (e) => {
  game.resetGame();
  game.checkStatus();
  console.log(e);
  //Reset frontend
  for (const cellDiv of cellDivs) {
    cellDiv.classList.remove("x");
    cellDiv.classList.remove("o");
  }
  statusDiv.innerHTML = "X is next";
};
const handleCellClick = (e) => {
  if (game.gameIsLive && game.numTurns < 9) {
    const id = Number(e.target.id);
    game.updateGame(id);
    game.checkStatus();

    // updateBoards(e.target.id);
    //frontend update
    const classList = e.target.classList;
    if (classList[1] == "x" || classList[1] == "o") {
      return;
    }
    if (game.xIsNext) {
      classList.add("x");
      statusDiv.innerHTML = "O is next";
    } else {
      classList.add("o");
      statusDiv.innerHTML = "X is next";
    }
    //On game over display banner
    if (!game.gameIsLive) {
      //Display win message
      if (game.checkWin(game.boardX)) {
        statusDiv.innerHTML = "X has won!";
        console.log("X has won!");
      } else if (game.checkWin(game.boardY)) {
        statusDiv.innerHTML = "O has won!";
        console.log("O has won");
      } else {
        statusDiv.innerHTML = "Game tie!";
        console.log("Game has ended in a tie!");
      }
    }
    game.togglePlayer();
  } else {
    if (game.checkWin(game.boardX) || game.checkWin(game.boardY)) {
      console.log("Game over: has been decided already!");
    }
  }
};

//event listeners
resetDiv.addEventListener("click", handleReset);

for (const cellDiv of cellDivs) {
  cellDiv.addEventListener("click", handleCellClick);
}
