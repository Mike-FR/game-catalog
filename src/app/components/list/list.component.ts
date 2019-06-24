import { Component, OnInit } from '@angular/core';
import { Game } from '../../model/game';
import { DataService } from '../../service/data.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  games: Game[];
  detailView = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.games = this.dataService.getGame();
  }

  viewDetails() {
    this.detailView = !this.detailView;
  }

  addGame(game: Game) {
    this.dataService.addGames(game);
  }

  removeGame(game: Game) {
    this.dataService.removeGame(game);
  }
}
