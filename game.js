class ttt {
  constructor() {
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
    this.gameIsLive = true;
    this.xIsNext = true;
    this.numTurns = 0;
  }

  checkStatus() {
    console.log("Is x next: ", this.xIsNext);
    console.log("Board x: ", this.boardX);
    console.log("Board y: ", this.boardY);
    console.log("Num turns: ", this.numTurns);
    console.log("Game is live: ", this.gameIsLive);
  }

  resetGame() {
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
    this.currentPlayer = this.player1;
    this.numTurns = 1;
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
    if (this.xIsNext) {
      this.xIsNext = !this.xIsNext;
    } else {
      this.xIsNext = !this.xIsNext;
    }
  }

  checkWin() {
    let playerBoard = this.xIsNext ? this.boardX : this.boardY;
    let win = false;
    if (
      this.isColWin(playerBoard) ||
      this.isDiagWin(playerBoard) ||
      this.isRowWin(playerBoard)
    )
      win = true;
    return win;
  }

  updateGame(id) {
    //Update num of turns
    this.numTurns++;
    //find index of current id in 2d magic square
    let r = -1;
    let c = -1;
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (this.magicSquare[row][col] == id) {
          r = row;
          c = col;
        } else {
        }
      }
    }
    //Update boards for both players
    if (r != -1) {
      console.log("Index of id: ", r, c);
      console.log("ID passed: ", id);
      if (this.xIsNext) {
        game.boardX[r][c] = id;
        game.boardY[r][c] = -1;
      } else {
        game.boardY[r][c] = id;
        game.boardX[r][c] = -1;
      }
      //update num turns
    } else {
      console.log("Error finding row and col of id. Boards not updated!");
      console.log("Row and col: ", r, c);
    }

    //Check for winner
    if (this.checkWin()) {
      this.gameIsLive = false;
    }
  }

  get getTurns() {
    return this.numTurns;
  }
}
