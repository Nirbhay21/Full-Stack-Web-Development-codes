// Game Constants & Variables.
const foodSound = new Audio("./music/food.mp3");
const gameOverSound = new Audio("./music/gameover.mp3");
const moveSound = new Audio("./music/move.mp3");
const musicSound = new Audio("./music/music.mp3");

let speedInMills = 100;
let lastPaintTime = 0;

const snakeArr = [{ x: 3, y: 6 }];
const food = { x: 5, y: 6 };
const snakeDirection = { x: 0, y: 0 };

let score = 0;
let highScore = parseInt(localStorage.getItem("highScore")) || 0;

if(highScore){
    document.querySelector("#highScore").innerText = `High Score: ${highScore}`;
}

// Game Loop - 
function gameLoop(currentTime) {
    window.requestAnimationFrame(gameLoop);

    if ((currentTime - lastPaintTime) < speedInMills) {
        return;
    }
    lastPaintTime = currentTime;

    gameEngine();
}

function isCollide() {
    // When snake head collide to it's body.
    for (let i = 1; i < snakeArr.length; i++) {
        if (snakeArr[0].x === snakeArr[i].x && snakeArr[0].y === snakeArr[i].y) {
            return true;
        }
    }
    // When snake goes out of board. 
    if (snakeArr[0].x < 0 || snakeArr[0].x > 18 || snakeArr[0].y < 0 || snakeArr[0].y > 18) {
        return true;
    }
    return false;
}

function gameEngine() {
    // Moving the snake 
    musicSound.play();
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] };
    }
    snakeArr[0].x += snakeDirection.x;
    snakeArr[0].y += snakeDirection.y;

    // Rendering the snake.
    const board = document.querySelector("#board");
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        const snakeBodyCell = document.createElement("div");
        snakeBodyCell.style.gridRowStart = e.y;
        snakeBodyCell.style.gridColumnStart = e.x;
        if (index === 0) {
            snakeBodyCell.classList.add("snake-body-head")
        } else {
            snakeBodyCell.classList.add("snake-body-cell");
        }
        board.appendChild(snakeBodyCell);
    });

    // Rendering the food.
    const foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food");
    board.appendChild(foodElement);

    // If snake eat's food then increment score and regenerate food.
    if (snakeArr[0].x === food.x && snakeArr[0].y === food.y) {
        snakeArr.unshift({ x: snakeArr[0].x + snakeDirection.x, y: snakeArr[0].y + snakeDirection.y });
        foodSound.play();

        const lowerRange = 2;
        const upperRange = 16;

        food.y = Math.floor(Math.random() * (upperRange - lowerRange + 1) + lowerRange);
        food.x = Math.floor(Math.random() * (upperRange - lowerRange + 1) + lowerRange);

        document.querySelector("#score").innerText = `Score: ${++score}`;

        if (score > highScore) {
            highScore = score;
            localStorage.setItem("highScore", highScore);
        }

        document.querySelector("#highScore").innerText = `High Score: ${highScore}`;

    }

    // When snake Collide.
    if (isCollide()) {
        gameOverSound.play();
        musicSound.pause();
        snakeDirection.x = 0;
        snakeDirection.y = 0;
        snakeArr.splice(0, snakeArr.length);
        snakeArr.push({ x: 3, y: 6 });
        score = 0;
        alert("Game Over. Press ok to play again!");
        document.querySelector("#score").innerText = `Score: ${score}`;
    }
}

window.requestAnimationFrame(gameLoop);

// To move snake using keyboard.
window.addEventListener("keydown", (event) => {
    snakeDirection.x = 1;
    snakeDirection.y = 0;   // When user press keys snake direction set as right;

    moveSound.play();

    switch (event.code) {
        case "KeyW":
        case "ArrowUp":
            snakeDirection.x = 0;
            snakeDirection.y = -1;
            break;

        case "KeyS":
        case "ArrowDown":
            snakeDirection.x = 0;
            snakeDirection.y = 1;
            break;

        case "KeyA":
        case "ArrowLeft":
            snakeDirection.x = -1;
            snakeDirection.y = 0;
            break;

        case "KeyD":
        case "ArrowRight":
            snakeDirection.x = 1;
            snakeDirection.y = 0;
            break;
    }
});