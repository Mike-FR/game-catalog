import { Component, OnInit } from '@angular/core';
import { Game } from '../../model/game';
import { DataService } from '../../service/data.service';
import { GamesQuery } from 'src/app/games/state/games.query';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  games: Game[];

  constructor(public dataService: DataService,
              private gameQuery: GamesQuery) { }

  ngOnInit() {
    this.games = this.dataService.getGame();
  }

  addGame(game: Game) {
    this.dataService.addGames(game);
  }

  removeGame(game: Game) {
    this.dataService.removeGame(game);
  }
}
