class ttt {
  constructor() {
    //Game variables
    this.magicSquare = [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
    ];
    this.boardX = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    this.boardY = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    this.xIsNext = true;
    this.numTurns = 0;
    this.cellDivs = document.querySelectorAll(".game-cell");

    //Selectors
    this.status = document.querySelector("#status");
    this.banner = document.querySelector(".winner");
  }
  isLive() {
    //Check for winner or full board
    if (
      this.checkWin(this.boardX) ||
      this.checkWin(this.boardY) ||
      this.numTurns == 9
    ) {
      return false;
    } else {
      return true;
    }
  }

  isRowWin(playerBoard) {
    for (let i = 0; i < 3; i++) {
      let sum = 0;
      for (let j = 0; j < 3; j++) {
        sum += playerBoard[i][j];
      }
      if (sum == 15) return true;
    }
    return false;
  }

  isColWin(playerBoard) {
    for (let i = 0; i < 3; i++) {
      let sum = 0;
      for (let j = 0; j < 3; j++) {
        sum += playerBoard[j][i];
      }
      if (sum == 15) return true;
    }
    return false;
  }

  isDiagWin(playerBoard) {
    let sum = 0;
    if (playerBoard[0][0] + playerBoard[1][1] + playerBoard[2][2] == 15) {
      return true;
    } else if (
      playerBoard[2][0] + playerBoard[1][1] + playerBoard[0][2] ==
      15
    ) {
      return true;
    } else {
      return false;
    }
  }

  togglePlayer() {
    this.xIsNext = !this.xIsNext;
  }

  checkWin(playerBoard) {
    let win = false;
    if (
      this.isColWin(playerBoard) ||
      this.isDiagWin(playerBoard) ||
      this.isRowWin(playerBoard)
    )
      win = true;
    return win;
  }

  process(currTarget) {
    if (
      currTarget.classList.contains("x") ||
      currTarget.classList.contains("o")
    ) {
      this.status.innerHTML = "Please choose a different square.";
      console.log("Wrong square");
      return;
    }
    let id = currTarget.id;
    this.numTurns++;
    this.updateMagicSquares(id);
    this.updateFrontend(currTarget);
    this.togglePlayer();
  }

  updateMagicSquares(id) {
    let notFound = true;
    //find index of current id in 2d magic square
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (this.magicSquare[row][col] == id) {
          notFound = false;
          if (this.xIsNext) {
            game.boardX[row][col] = id;
            game.boardY[row][col] = -1;
          } else {
            game.boardY[row][col] = id;
            game.boardX[row][col] = -1;
          }
        }
      }
    }

    if (notFound) {
      console.log(`Could not find id specified: ${id}`);
    }
  }

  updateFrontend(currTarget) {
    if (this.xIsNext) {
      currTarget.classList.add("x");
      this.status.innerHTML = "O is next";
    } else {
      currTarget.classList.add("o");
      this.status.innerHTML = "X is next";
    }
  }

  get getTurns() {
    return this.numTurns;
  }

  reset() {
    this.boardX = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    this.boardY = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    this.xIsNext = true;
    this.numTurns = 0;
    this.gameIsLive = true;
    this.status.innerHTML = "X is next";
    // set inner html of each game cell to blank
    for (let cellDiv of this.cellDivs) {
      cellDiv.classList.remove("x");
      cellDiv.classList.remove("o");
    }
  }
}
