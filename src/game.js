import Paddle from "/src/paddle.js";
import InputHandler from "/src/input.js";
import Ball from "/src/ball.js";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
  }
  start() {
    let paddle = new Paddle(this);
    let ball = new Ball(this);

    new InputHandler(paddle);
  }
}
