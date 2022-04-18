import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tic-tac-toe';


  board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ]

  winner='';
  player='X'
  ngOnInit() { }

  isWinner(player: string){
    if ((this.board[0][0] === player && this.board[0][1] === player && this.board[0][2] === player)
      || (this.board[1][0] === player && this.board[1][1] === player && this.board[1][2] === player)
      || (this.board[2][0] === player && this.board[2][1] === player && this.board[2][2] === player)

      || (this.board[0][0] === player && this.board[1][0] === player && this.board[2][0] === player)
      || (this.board[0][1] === player && this.board[1][1] === player && this.board[2][1] === player)
      || (this.board[0][2] === player && this.board[1][2] === player && this.board[2][2] === player)

      || (this.board[0][2] === player && this.board[1][1] === player && this.board[2][0] === player)
      || (this.board[0][0] === player && this.board[1][1] === player && this.board[2][2] === player)) {
      this.winner = player;

    } else if (
      (this.board[0][0] !== ' ' && this.board[0][1] !== ' ' && this.board[0][2] !== ' ')
      && (this.board[1][0] !== ' ' && this.board[1][1] !== ' ' && this.board[1][2] !== ' ')
      && (this.board[2][0] !== ' ' && this.board[2][1] !== ' ' && this.board[2][2] !== ' ')
    ) {
      this.winner = "No Winner! Game Over!"
    }
  }

   onClick(i: number,j: number){

    if (this.board[i][j]===' ' && this.winner === ''){
      this.board[i][j] = this.player;
      this.isWinner(this.player);
      this.player === 'X' ? this.player = 'O' : this.player = 'X';
    }
  }

  reset(){
    this.board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];
    this.winner = '';
    this.player = 'X';
  }

}
