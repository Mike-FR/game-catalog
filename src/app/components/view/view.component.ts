import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '../../games/state/game.model';
import { GamesService } from 'src/app/games/state/games.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input('game') game: Game;
  games: Game;

  details = false;

  constructor(private gameService: GamesService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.games = this.gameService.get(id);
  }

  showDetails() {
    this.details = !this.details;
  }

  removeGame(game: Game) {
    this.gameService.remove(game);
  }

  editGame() {
    this.router.navigate(['/edit/' + this.game.id]);
  }
}
