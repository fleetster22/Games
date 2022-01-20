import Paddle from "/src/paddle.js";
import InputHandler from "/src/input.js";

let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0, 0, 800, 600);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

paddle.draw(ctx);

new InputHandler(paddle);

let lastTime = 0;

// images
let imgBall = document.getElementById("img_ball");

// Game loop
function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, 800, 600);
  paddle.update(deltaTime);
  paddle.draw(ctx);

  ctx.drawImage(imgBall, 14, -12);

  requestAnimationFrame(gameLoop);
}

gameLoop();
