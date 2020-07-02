magicSquare = [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 6],
];

let game = new ttt();
//Html elements
const statusDiv = document.querySelector(".status");
const resetDiv = document.querySelector(".reset");
const cellDivs = document.querySelectorAll(".game-cell");

//game var's
let gameIsLive = true;
let xIsNext = true;

//event handlers
const handleReset = (e) => {
  console.log(e);
};
const handleCellClick = (e) => {
  //Backend update
  //Work on this part now
  const id = Number(e); //convert to number
  game.updateGame(id);

  // updateBoards(e.target.id);
  //frontend update
  //Frontend done for now
  const classList = e.target.classList;
  if (classList[1] == "x" || classList[1] == "o") {
    return;
  }
  if (xIsNext) {
    classList.add("x");
    xIsNext = !xIsNext;
  } else {
    classList.add("o");
    xIsNext = !xIsNext;
  }
};

//event listeners
resetDiv.addEventListener("click", handleReset);

for (const cellDiv of cellDivs) {
  cellDiv.addEventListener("click", handleCellClick);
}
