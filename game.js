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
    this.player1 = "X";
    this.player2 = "O";
    this.currentPlayer = this.player1;
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

  checkWin() {
    let win = false;
    if (this.checkRows || this.checkCol || this.checkDiag) win = true;
    return win;
  }
}

let game = new ttt();

//Game ends when board is full or someone wins

// console.log(`Test board wins on col: ${game.isColWin(game.boardX)}`);
// console.log(`Test board wins on row: ${game.isRowWin(game.boardX)}`);
// console.log(`Test board wins on diag: ${game.isDiagWin(game.boardX)}`);
