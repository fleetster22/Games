export default class Paddle {
  constructor(gameWidth, gameHeight) {
    this.width = 160;
    this.height = 22;

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 12,
    };
  }

  draw(ctx) {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
