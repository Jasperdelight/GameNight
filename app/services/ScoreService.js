import { AppState } from "../AppState.js";

class ScoreService {
  // currentScore = AppState.score
  increaseScore(playerName) {
    const players = AppState.players

    const foundPlayer = players.find(p => p.name == playerName)

    foundPlayer.score++
    console.log('found player score?', foundPlayer)

    // AppState.foundPlayer.score++
    // console.log('player score increase?', AppState.foundPlayer.score)
  }

  decreaseScore(playerName) {
    const players = AppState.players

    const foundPlayer = players.find(p => p.name == playerName)

    foundPlayer.score--
    console.log('found player score decrease?', foundPlayer)
  }
}

export const scoreService = new ScoreService();