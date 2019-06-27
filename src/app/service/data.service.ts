import { Injectable } from '@angular/core';
import { Game } from '../model/game';

@Injectable({ providedIn: 'root' })
export class DataService {

  games: Game[] = [{
    title: 'Horizon Zero Dawn',
    description: 'Horizon Zero Dawn prend place dans un univers post-apocalyptique dominé par des créatures mécanisées, en particulier des animaux robotiques. Le jeu se déroule donc dans un futur éloigné de 1 000 ans, où la civilisation humaine s\'est effondrée et où les créatures robotiques, devenues les plus puissantes en ce monde, dominent. La région visitée dans le jeu est indéterminée, mais plusieurs éléments du DLC The Frozen Wilds la situent près du parc de Yellowstone.',
    price: 29.9,
    cover: 'https://static.fnac-static.com/multimedia/Images/FR/NR/ea/11/8c/9179626/1507-1/tsp20171108084043/Jeu-Horizon-Zero-Dawn-Edition-Complete-PS4.jpg'
  },
  {
    title: 'Battlefield 5',
    description: 'Semblable aux opus précédents, Battlefield V est un jeu de tir à la première personne se basant sur le travail d\'équipe. Le jeu se déroule dans la période de la Seconde Guerre mondiale et est inspiré par des événements historiques. Environnements destructibles et personnalisation d’armes, caractéristiques présentes dans les opus précédents, sont de retour dans Battlefield V et sont plus dynamiques et variées. Les joueurs peuvent également prendre part à des batailles multijoueur massives pouvant accueillir jusqu\'à 64 joueurs.',
    price: 39.9,
    cover: 'https://i2.cdscdn.com/pdt2/2/8/5/1/700x700/5030932122285/rw/battlefield-5-jeu-ps4.jpg'
  },
  ];

  constructor() {
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
      games.unshift(game);
      localStorage.setItem('games', JSON.stringify(games));
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
