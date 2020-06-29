magicSquare = [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 6],
];
//Html elements
const statusDiv = document.querySelector(".status");
const resetDiv = document.querySelector(".reset");
const cellDivs = document.querySelectorAll(".game-cell");

//game var's
let gameIsLive = true;
let xIsNext = true;

//helper functions
const updateBoards = (e) => {
  //Backend function for magic square boards
  const id = Number(e); //convert to number
  console.log(typeof id);
  //find my number in my 2d array
  //update both blocks
  //num turns++
};

//event handlers
const handleReset = (e) => {
  console.log(e);
};
const handleCellClick = (e) => {
  updateBoards(e.target.id);
  //frontend update
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
