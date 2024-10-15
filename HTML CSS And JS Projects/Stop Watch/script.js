const timerValue = document.querySelector("#timerValue");

let hours = 0;
let minutes = 0;
let seconds = 0;
let mills = 0;

let timerIntervalId = null;

function toDualDigit(num) {
    return (num < 10) ? `0${num}` : num;
}

document.querySelector("#startBtn").addEventListener("click", () => {
    if (!timerIntervalId) {
        timerIntervalId = setInterval(() => {
            if (mills >= 100) {
                seconds++;
                mills = 0;
            }
            if (seconds >= 60) {
                minutes++;
                seconds = 0;
            }
            if (minutes >= 60) {
                hours++;
                minutes = 0;
            }
            timerValue.innerText = `${toDualDigit(hours)}:${toDualDigit(minutes)}:${toDualDigit(seconds)}.${toDualDigit(mills)}`;
            mills++;
        }, 10);
    }
});

document.querySelector("#resetBtn").addEventListener("click", () => {
    hours = 0;
    minutes = 0;
    seconds = 0;
    mills = 0;
    timerValue.innerText = `00:00:00.00`;
    clearInterval(timerIntervalId);
    timerIntervalId = null;
});

document.querySelector("#stopBtn").addEventListener("click", () => {
    clearInterval(timerIntervalId);
    timerIntervalId = null;
});