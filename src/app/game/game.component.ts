import { Component, OnInit } from '@angular/core';
import { Piece } from '../models/piece';
import { Game } from '../models/game';
import { Router, ActivatedRoute } from '@angular/router';
import { GameService } from '../shared/game.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
 
  key: string;
  board: any[][];
  game: Observable<any[]>;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private gameService: GameService) { }
  

  ngOnInit() {
     
    this.activeRoute.params.forEach((urlParameters) => {
      this.key = urlParameters['id'];
    })

  }

  
  
  // combat(attacker: Piece, defender: Piece) {
  //   if (attacker.value === 3 && defender.value === 11) {
  //     defender.dies();

  //   }else if (attacker.value === 1 && defender.value === 10) {
  //     defender.dies();

  //   }else if (attacker.value === defender.value) {
  //     attacker.dies() && defender.dies();

  //   }else if (attacker.value > defender.value) {
  //     defender.dies();
      
  //   }else if (defender.value === 12) {
  //     attacker.winsGame();

  //   }else {
  //     attacker.dies();
  //   }
  // }

  // movePiece(piece: Piece, squareId: string) {
  //   this.board[piece.position.y][piece.position.x] = 0;
  //   piece.position.y = squareId[0];
  //   piece.position.x = squareId[1];
  //   this.board[piece.position.y][piece.position.x] = piece;
  // }

  // dies(squareId: number) {
  //   this.graveyard.push(this.board[squareId[0]][squareId[1]]);
  //   this.board[squareId[0]][squareId[1]] = 0;
  // }
  
}
