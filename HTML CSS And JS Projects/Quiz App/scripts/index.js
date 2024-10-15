function startQuiz() {
    console.log("Quiz is started");
}

function getStartFragment() {
    const startFragment = document.createDocumentFragment();

    const startScreen = document.createElement("div");
    startScreen.classList.add("start-screen");

    const quizTimeImage = document.createElement("img");
    quizTimeImage.classList.add("quiz-time-image");
    quizTimeImage.src = "images/quiz_time.svg";
    const startButton = document.createElement("button");
    startButton.classList.add("start-button");
    startButton.innerText = "Start Now >>>";
    startButton.addEventListener("click", startQuiz);

    startScreen.appendChild(quizTimeImage);
    startScreen.appendChild(startButton);

    startFragment.appendChild(startScreen);

    return startFragment;
}

const startFragment = getStartFragment();

// document.body.appendChild(startFragment);