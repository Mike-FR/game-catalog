import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Game, createGame } from '../../games/state/game.model';
import { GamesService } from 'src/app/games/state/games.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  id: any;
  title: string;
  description: string;
  price: number;
  cover: string;

  game: Game;

  updated = false;

  constructor(private gameService: GamesService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.game = this.gameService.get(this.id);
      this.updated = true;
    } else {
      this.game = createGame();
      this.id = this.game.id;
    }
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
