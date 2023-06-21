import { AppState } from "../AppState.js";

export class PlayerController {
  constructor() {
    console.log('players from player controller', AppState.players)

  }

  addPlayer() {
    console.log('button pressed')
  }
}

