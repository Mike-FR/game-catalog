import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Game} from '../../games/state/game.model';
import { GamesService } from 'src/app/games/state/games.service';
import { Router } from '@angular/router';

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


  constructor(private gameService: GamesService,
              private router: Router) { }

  ngOnInit() {
  }

  addGame() {
    this.gameService.add({
      title: this.title,
      description: this.description,
      price: this.price,
      cover: this.cover
    } as Game);
    this.router.navigate(['/home']);
  }

}