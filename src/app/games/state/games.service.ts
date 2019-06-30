import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { GamesStore } from './games.store';
import { Game } from './game.model';
import gamesList from '../../game.data'
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GamesService {

  private static id = 3;

  constructor(private gamesStore: GamesStore) {
  }


 

  add(game: Game) {
    game.id = GamesService.id++;
    this.gamesStore.add(game);
  }

  update(game: Partial<Game>) {
    this.gamesStore.update(game.id, game);
  }

  remove(game) {
    this.gamesStore.remove(game.id);
  }
}