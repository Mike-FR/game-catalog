import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { GamesStore } from './games.store';
import { Game } from './game.model';
import gamesList from '../../game.data'
import { of } from 'rxjs';
import { GamesQuery } from './games.query';

@Injectable({ providedIn: 'root' })
export class GamesService {

  constructor(private gamesStore: GamesStore,
              private gamesQuery: GamesQuery) {
  }


  getGames() {
    of(gamesList).subscribe(entities => {
      this.gamesStore.set(entities);
    });
  }

  add(game: Game) {
    game.id = this.gamesQuery.getCount();
    this.gamesStore.add(game);
  }

  update(game: Partial<Game>) {
    this.gamesStore.update(game.id, game);
  }

  remove(game) {
    this.gamesStore.remove(game.id);
  }

  get(id) {
    return this.gamesQuery.getEntity(id);
  }
}
