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
    this.currentPlayer = this.player1;
    this.currPlayerBoard;
    this.numTurns = 1;
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
    if (this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    }
  }

  findCell(id) {
    let r = -1;
    let c = -1;
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (this.magicSquare[row][col] == id) {
          r = row;
          c = col;
        }
      }
    }
  }

  checkWin() {
    let win = false;
    if (this.isColWin() || this.isDiagWin() || this.isRowWin()) win = true;
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
        }
      }
    }
    //Update boards for both players
    if (r != -1) {
      console.log("Row and col: ", r, c);
      console.log("ID: ", id);
      if (xIsNext) {
        game.boardX[r][c] = id;
        game.boardY[r][c] = -1;
      } else {
        game.boardY[r][c] = id;
        game.boardX[r][c] = -1;
      }
      //update num turns
    } else {
      console.log("Error finding row and col of id. Boards not updated!");
    }

    //Check for winner
  }

  get getTurns() {
    return this.numTurns;
  }
}

// console.log(`Test board wins on col: ${game.isColWin(game.boardX)}`);
// console.log(`Test board wins on row: ${game.isRowWin(game.boardX)}`);
// console.log(`Test board wins on diag: ${game.isDiagWin(game.boardX)}`);
