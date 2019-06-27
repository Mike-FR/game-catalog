import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Game } from './game.model';

export interface GamesState extends EntityState<Game> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'games' })
export class GamesStore extends EntityStore<GamesState, Game> {

  constructor() {
    super();
  }

}

