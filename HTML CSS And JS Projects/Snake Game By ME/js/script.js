const gameBoard = document.querySelector(".game-board");
const snakeHead = document.querySelector(".snake-head");
const gameController = document.querySelector(".game-controller");
const gameScore = document.querySelector(".score span");
const gameHighScore = document.querySelector(".high-score");

const defaults = { 
    SNAKE_X: 2,
    SNAKE_Y: 9,
    FOOD_X: 8,
    FOOD_Y: 9,
    DIRECTION_X: 0,
    DIRECTION_Y: 0,
};

Object.freeze(defaults);

const snakeArr = [{ x: defaults.SNAKE_X, y: defaults.SNAKE_Y }];
const food = { x: defaults.FOOD_X, y: defaults.FOOD_Y, element: null };
const direction = { x: defaults.DIRECTION_X, y: defaults.DIRECTION_Y };
let score = 0;



let lastPaintTime = 0;
let snakeSpeedInMills = 100;


const renderSnake = () => {
    for (let i = 0; i < snakeArr.length; i++) {
        const snakeBodyCell = document.createElement("div");
        snakeBodyCell.style.gridRowStart = snakeArr[i].y;
        snakeBodyCell.style.gridColumnStart = snakeArr[i].x;
        if (i === 0) {
            snakeBodyCell.classList.add("snake-head");
            snakeBodyCell.innerHTML = `<div class="eye eye1"></div>
            <div class="eye eye2"></div>`;
        } else {
            snakeBodyCell.classList.add("snake-body");
        }
        gameBoard.appendChild(snakeBodyCell);
    }
}

// Move snake by one block towards it's set direction.
const moveSnake = () => {
    gameBoard.innerHTML = "";

    let temp = {};
    
    const moveSnakeBody = () => {
        let temp = {};
        for (let i = 0; i < snakeArr.length; i++) {
            if (i === 0) {
                temp.x = snakeArr[i].x;
                temp.y = snakeArr[i].y;
                snakeArr[i].x += direction.x;
                snakeArr[i].y += direction.y;
            }
        }
    }

    moveSnakeBody();

    renderSnake();
}




// To span food 
const spanFood = () => {
    // Function to span food on given position.
    const spanFoodOnPosition = (posX, posY) => {
        food.element = document.createElement("div");
        food.element.classList.add("food");
        food.element.style.gridRowStart = posY;
        food.element.style.gridColumnStart = posX;
    }

    // To find empty position for food and set as food.x, food.y.
    const setFoodPosition = () => {
        let foodPosNotEmpty = false;
        do {
            food.x = Math.ceil(Math.random() * 18);
            food.y = Math.ceil(Math.random() * 18);
            foodPosNotEmpty = snakeArr.some((snakeBodyCell) => {
                return snakeBodyCell.x === food.x && snakeBodyCell.y === food.y;
            });
        } while (foodPosNotEmpty);
    }


    const renderFood = () => {
        gameBoard.appendChild(food.element);
    }

    if (!food.element) {
        spanFoodOnPosition(defaults.FOOD_X, defaults.FOOD_Y);
    }

    // When snake eat food.
    if (snakeArr[0].x === food.x && snakeArr[0].y === food.y) {
        snakeArr.push({ x: snakeArr[0].x + direction.x, y: snakeArr[0].y + direction.y });
        food.element.remove();
        score++;
        gameScore.innerText = score;

        setFoodPosition();
        spanFoodOnPosition(food.x, food.y);
    }

    renderFood();
}

// Checks snake collide to boundary or to itself.
const isSnakeCollide = () => {
    if (snakeArr[0].x < 1 || snakeArr[0].x > 18 || snakeArr[0].y < 1 || snakeArr[0].y > 18) {
        return true;
    }
    return false;
}

// Set all value to defaults (initial values) when game restarts.
const restartGame = () => {
    snakeArr.splice(0, snakeArr.length, { x: defaults.SNAKE_X, y: defaults.SNAKE_Y });
    direction.x = defaults.DIRECTION_X;
    direction.y = defaults.DIRECTION_Y;
    food.x = defaults.FOOD_X;
    food.y = defaults.FOOD_Y;
    food.element.remove();
    food.element = null;
    spanFood();
    score = 0;
    gameScore.innerText = score;
}

const gameLoop = (currentTime) => {
    requestAnimationFrame(gameLoop);
    if ((currentTime - lastPaintTime) < snakeSpeedInMills) {
        return;
    }
    lastPaintTime = currentTime;

    moveSnake();
    spanFood();

    if (isSnakeCollide()) {
        alert("Game Over");
        restartGame();
    }
}

window.requestAnimationFrame(gameLoop);


// To set snake's direction and it's head rotation.
const setDirection = (directionName) => {
    if (directionName === "up") {
        direction.x = 0;
        direction.y = -1;
        snakeHead.style.transform = "rotateZ(0deg)";
    } else if (directionName === "down") {
        direction.x = 0;
        direction.y = 1;
        snakeHead.style.transform = "rotateZ(180deg)";
    } else if (directionName === "left") {
        direction.y = 0;
        direction.x = -1;
        snakeHead.style.transform = "rotateZ(-90deg)";
    } else if (directionName === "right") {
        direction.y = 0;
        direction.x = 1;
        snakeHead.style.transform = "rotateZ(90deg)";
    }
}







// If Controller display is 'none' then set keyboard as input device. (set event listener for keyboard)
if (window.getComputedStyle(gameController).display === "none") {
    const setSnakeDirection = (event) => {
        if ((event.code === "ArrowUp" || event.code === "KeyW") && (direction.y !== 1)) {
            setDirection("up");
        } else if ((event.code === "ArrowDown" || event.code === "KeyS") && (direction.y !== -1)) {
            setDirection("down");
        } else if ((event.code === "ArrowLeft" || event.code === "KeyA") && (direction.x !== 1)) {
            setDirection("left");
        } else if ((event.code === "ArrowRight" || event.code === "KeyD") && (direction.x !== -1)) {
            setDirection("right");
        }
    }
    window.addEventListener("keydown", setSnakeDirection)
} else { // else set controller.
    gameController.addEventListener("click", (event) => {
        const controllerBtn = event.target.closest(".controller-btn");
        if (controllerBtn) {
            if (controllerBtn.id === "upBtn" && direction.y !== 1) {
                setDirection("up");
            } else if (controllerBtn.id === "downBtn" && direction.y !== -1) {
                setDirection("down");
            } else if (controllerBtn.id === "leftBtn" && direction.x !== 1) {
                setDirection("left");
            } else if (controllerBtn.id === "rightBtn" && direction.x !== -1) {
                setDirection("right");
            }
        }
    });
}  