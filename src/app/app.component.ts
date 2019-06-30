import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import gamesList from './game.data';
import { GamesStore } from './games/state/games.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Mike game\'s store';

  constructor (private gamesStore: GamesStore) {}

  ngOnInit(): void {
    of(gamesList).subscribe(entities => {
      this.gamesStore.set(entities);
    });
  }
}
