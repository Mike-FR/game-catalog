import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Game} from '../../games/state/game.model';
import { GamesService } from 'src/app/games/state/games.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  title: string;
  description: string;
  price: number;
  cover: string;

  // @Output() gameAdded = new EventEmitter<Game>();

  constructor(private gameService: GamesService) { }

  ngOnInit() {
  }

  addGame() {
    this.gameService.add({
      title: this.title,
      description: this.description,
      price: this.price,
      cover: this.cover
    } as Game);

  }

}
