import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, transaction } from '@datorama/akita';
import { Game, createGame } from './game.model';
import gamesList from '../../game.data';

export interface GamesState extends EntityState<Game> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'games' })
export class GamesStore extends EntityStore<GamesState, Game> {

  constructor() {
    super();
    this.getGameList();
  }

  @transaction()
  getGameList() {
    this.add(gamesList);
  }

}

