import { Injectable } from '@angular/core';
import { Game } from '../model/game';

@Injectable({ providedIn: 'root' })
export class DataService {

  games: Game[] = [{
    title: 'Horizon Zero Dawn',
    description: 'Test Horizon',
    price: 29.9,
    cover: 'https://static.fnac-static.com/multimedia/Images/FR/NR/ea/11/8c/9179626/1507-1/tsp20171108084043/Jeu-Horizon-Zero-Dawn-Edition-Complete-PS4.jpg'
  },
  {
    title: 'Battlefield 5',
    description: 'Test Battlefield',
    price: 39.9,
    cover: 'https://i2.cdscdn.com/pdt2/2/8/5/1/700x700/5030932122285/rw/battlefield-5-jeu-ps4.jpg'
  },
  ];

  
  constructor() {
    // this.games = [];
    localStorage.setItem('games', JSON.stringify(this.games));
  }

  getGame(): Game[] {
    if (localStorage.getItem('games') === null) {
      this.games = [];
    } else {
      this.games = JSON.parse(localStorage.getItem('games'));
    }
    return this.games;
  }

  addGames(game: Game): void {
    this.games.unshift(game);
    let games;

    if (localStorage.getItem('games') === null) {
      games = [];
      games.unshift(game);
      localStorage.setItem('games', JSON.stringify(games));
    } else {
      games = JSON.parse(localStorage.getItem('games'));
      games.unshift(games);
      localStorage.setItem('games', JSON.stringify(this.games));
    }
  }

  removeGame(game: Game) {
    for (let i = 0; i < this.games.length; i++) {
      if (game === this.games[i]) {
        this.games.splice(i, 1);
        localStorage.setItem('games', JSON.stringify(this.games));
      }
    }
  }
}
