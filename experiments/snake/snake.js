// Get canvas element and its context
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Snake variables
let snake = [{ x: 200, y: 200 }];
let dx = 0;
let dy = 0;
const snakeSize = 20;

// Game loop
function gameLoop() {
  clearCanvas();
  moveSnake();
  drawSnake();
}

// Function to clear the canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Function to draw the snake
function drawSnake() {
  snake.forEach((segment) => {
    ctx.fillStyle = "green";
    ctx.fillRect(segment.x, segment.y, snakeSize, snakeSize);
  });
}

// Function to move the snake
function moveSnake() {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(head);
  snake.pop();
}

// Set up event listeners for keyboard input
document.addEventListener("keydown", changeDirection);

// Function to handle keyboard input
function changeDirection(event) {
  const keyPressed = event.key;
  // Update direction based on arrow keys
  // For example:
  // if (keyPressed === "ArrowUp" && dy !== 20) { dx = 0; dy = -20; }
  // Add similar conditions for other arrow keys
}

// Start the game loop
setInterval(gameLoop, 100); // Adjust the interval for the desired speed
