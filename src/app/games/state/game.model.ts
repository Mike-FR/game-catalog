import { ID } from '@datorama/akita';

export class Game {
  id: ID;
  title: string;
  description: string;
  price: number;
  cover: string;
}

/**
 * A factory function that creates Games
 */
export function createGame(): Game {
  const game = new Game();
  game.id = this.id;
  this.id++;

  return game;
}


