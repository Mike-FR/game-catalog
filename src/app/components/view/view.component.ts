import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../model/game';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input('game') game: Game;

  games: Game[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.games = this.dataService.getGame();

  }

  removeGame(game: Game) {
    this.dataService.removeGame(game);
  }


}