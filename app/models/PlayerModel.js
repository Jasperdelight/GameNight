export class Player {

  constructor(data) {

    this.name = data.name
    this.score = data.score
    this.emoji = data.emoji
  }

  get playerTemplate() {
    return `  
    <div class="row">
    <section class="col-12 d-flex justify-content-center fs-4">
      <i class="playerEmoji">${this.emoji}</i>
      <p class="playerName">${this.name}</p>
      <i onclick="app.ScoreController.decreaseScore('${this.name}')" class="mdi mdi-minus-circle"></i>
      <p class="playerScore">${this.score}</p>
      <i onclick="app.ScoreController.increaseScore('${this.name}')" class="mdi mdi-plus-circle"></i>
    </section>
  </div>
  `
  }

}