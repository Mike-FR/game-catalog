import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../games/state/game.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input('game') game: Game;


  details = false;

  constructor() { }

  ngOnInit() {
  }

  removeGame(game: Game) {
    // this.dataService.removeGame(game);
  }

  showDetails() {
    this.details = !this.details;
  }
}
