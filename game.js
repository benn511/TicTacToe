class ttt {
  constructor() {
    this.display = [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
    ];
    this.p1Turn = true;
    this.p1Var = "X";
  }

  displayBoard() {
    console.log(this.display);
  }

  checkRows() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // console.log(i, " ", j);
        // console.log(board[i][j]);
        if (j + (1 % 3) == 0) {
        }
      }
    }
  }

  checkCol() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // console.log(i, " ", j);
        console.log(board[j][i]);
      }
    }
  }

  togglePlayer() {
    if (this.p1Turn) {
      this.p1Turn = false;
      this.p1Var = "O";
    } else {
      this.p1Turn = true;
      this.p1Var = "X";
    }
  }

  checkWin() {
    let win = false;
    if (this.checkRows || this.checkCol || this.checkDiag) win = true;
    return win;
  }

  checkDiag() {}
}

let game = new ttt();
