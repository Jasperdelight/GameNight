import { AppState } from "../AppState.js"
import { scoreService } from "../services/ScoreService.js"
import { setHTML } from "../utils/Writer.js";

function _drawPlayers() {
  const players = AppState.players

  let template = ''

  players.forEach(player => template += player.playerTemplate)

  setHTML('playerList', template)

}

export class ScoreController {
  constructor() {
    console.log('scorecontroller :)')
    console.log(scoreService)
    _drawPlayers();

    // AppState.on('score', _drawPlayers)
  }

  increaseScore(playerName) {
    console.log('do i find score in the controller?', playerName)

    scoreService.increaseScore(playerName)
    _drawPlayers();
  }

  decreaseScore(playerName) {
    console.log('decrease button clicked')
    scoreService.decreaseScore(playerName)
    _drawPlayers();
  }
}

