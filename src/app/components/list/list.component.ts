import { Component, OnInit } from '@angular/core';
import { Game } from '../../games/state/game.model';
import { GamesQuery } from 'src/app/games/state/games.query';
import { GamesService } from 'src/app/games/state/games.service';
import { Observable } from 'rxjs';
import gamesList from 'src/app/game.data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  games$: Observable<Game[]>;
  showFiller = false;

  constructor(private gameQuery: GamesQuery,
              private gameService: GamesService,
              ) { }

  ngOnInit() {
    this.games$ = this.gameQuery.selectAll();
  }



}
