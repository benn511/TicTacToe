let game = new ttt();

const handleClick = (e) => {
  let currTarget = e.target;
  console.log(e.target);
  if (currTarget.classList.contains("game-cell")) {
    if (game.isLive()) {
      game.process(currTarget);
      if (game.hasWinner()) {
        game.dispWinner(game.getWinner);
      }
    } else {
      game.dispWinner("Game over! " + game.getWinner);
    }
  } else if (currTarget.classList.contains("reset")) {
    game.reset();
  }
};

//Add event handler to container
const container = document.querySelector(".container");
container.addEventListener("click", handleClick);
