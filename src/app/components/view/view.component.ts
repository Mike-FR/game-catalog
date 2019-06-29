import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '../../games/state/game.model';
import { GamesService } from 'src/app/games/state/games.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input('game') game: Game;

  details = false;

  constructor(private gameService: GamesService) { }

  ngOnInit() {
  }

  removeGame(game: Game) {
    this.gameService.remove(game);
  }


  showDetails() {
    this.details = !this.details;
  }
}
