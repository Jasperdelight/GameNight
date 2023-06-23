import { Player } from "./models/PlayerModel.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./models/Value.js').Player[]} */

  players = [
    new Player({ name: 'Jasper', score: 5, emoji: '😎' }),
    new Player({ name: 'Jon', score: 0, emoji: '🐣' }),
    new Player({ name: 'Bob', score: 0, emoji: '😊' }),
  ]



  // WHY DO MY PAGES NOT WORK BUT LOCAL HOST DOES??
  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
