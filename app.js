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

//event handlers
const handleReset = (e) => {
  console.log(e);
};
const handleCellClick = (e) => {
  if (game.gameIsLive) {
    //Backend update
    const id = Number(e.target.id); //convert to number
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
    } else {
      classList.add("o");
    }
    game.togglePlayer();
  } else {
    console.log("Game over!!");
  }
};

//event listeners
resetDiv.addEventListener("click", handleReset);

for (const cellDiv of cellDivs) {
  cellDiv.addEventListener("click", handleCellClick);
}
