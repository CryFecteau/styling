import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Game } from '../models/game';
import { Key } from 'protractor';
import { map } from 'rxjs/operators';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  games: Observable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.games = this.database.list('games').snapshotChanges();
  }

  getGames() {
    return this.games;
  }

  getGame(key: string) {

    // // console.log(this.database.object('games/'+key));
    // return this.database.object('games/' + key).valueChanges().subscribe((data) => {
    //   data.players.push("TEST");
    // });
  }

  createGame(game: Game) {    
    return this.database.list('games').push(game).key;
  }
}