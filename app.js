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

const handleClick = (e) => {
  let currTarget = e.target;
  console.log(e.target);
  if (currTarget.classList.contains("game-cell")) {
    if (game.isLive()) {
      game.process(currTarget);
      if (game.hasWinner()) {
        console.log("Found winner");
        game.dispWinner(game.getWinner);
      }
    } else {
      console.log("Game over!");
      game.dispWinner("Game over! " + game.getWinner);
    }
  } else if (currTarget.classList.contains("reset")) {
    game.reset();
  }
};

container.addEventListener("click", handleClick);
