const barLabels = document.querySelector(".bar-labels");
const hourLabels = document.querySelector(".number-labels");

const hoursHand = document.querySelector(".hour-hand");
const minutesHand = document.querySelector(".minute-hand");
const secondsHand = document.querySelector(".second-hand");

for (let i = 1; i <= 12; i++) {
    hourLabels.insertAdjacentHTML("beforeend", `<span style="--index:${i}"><p>${i}</p></span>`);
}

for (let i = 1; i <= 60; i++) {
    barLabels.insertAdjacentHTML("beforeend", `<span style="--index:${i}"><p></p></span>`);
}

function updateClockTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    hoursHand.style.transform = `rotate(${hours * 30 + minutes / 2}deg)`;
    minutesHand.style.transform = `rotate(${minutes * 6}deg)`;
    secondsHand.style.transform = `rotate(${seconds * 6}deg)`;
}

setInterval(updateClockTime, 1000);