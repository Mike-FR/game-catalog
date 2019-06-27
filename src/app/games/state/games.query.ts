import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { GamesStore, GamesState } from './games.store';
import { Game } from './game.model';

@Injectable({
  providedIn: 'root'
})
export class GamesQuery extends QueryEntity<GamesState, Game> {

  constructor(protected store: GamesStore) {
    super(store);
  }

}
