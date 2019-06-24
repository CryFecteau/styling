import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameService } from '../shared/game.service';
import { Game } from '../models/game';
import { Player } from '../models/player';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.sass'],
  providers: [GameService]
})
export class LobbyComponent implements OnInit {

  constructor(
    private gameService: GameService,
    private router: Router) { }

  ngOnInit() {

  }

  createGame(username: string) {
    if(!username) return;

    // TODO? Randomize red or blue team?
    let newGame = new Game([new Player(username, 'r'), null]);
    let key = this.gameService.createGame(newGame);
    
    this.router.navigate(['games', key]);    
  }
  
  joinGame(username: string, gameKey: string) {
    if(!username || !gameKey) return;

    this.gameService.getGame(gameKey);
  }

}
