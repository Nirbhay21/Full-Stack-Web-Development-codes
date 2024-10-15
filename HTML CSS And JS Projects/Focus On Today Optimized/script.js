const checkBoxList = document.querySelectorAll(".checkbox");
const goalInputs = document.querySelectorAll(".goal-input");
const errorLabel = document.querySelector(".error-label");
const progressValue = document.querySelector(".progress-value");

const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {};

let completedGoalsCount = Object.values(allGoals).filter((goals) => goals.completed).length;

progressValue.style.width = `${completedGoalsCount / goalInputs.length * 100}%`;
progressValue.firstElementChild.innerText = `${completedGoalsCount}/${goalInputs.length}  completed`;

checkBoxList.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
        const allGoalsSet = [...goalInputs].every((goal) => goal.value);
        if (allGoalsSet) {
            checkbox.parentElement.classList.toggle("completed");
            allGoals[checkbox.nextElementSibling.name].completed = !allGoals[checkbox.nextElementSibling.name].completed;
            localStorage.setItem("allGoals", JSON.stringify(allGoals));
            completedGoalsCount = Object.values(allGoals).filter((goals) => goals.completed).length;
            progressValue.style.width = `${completedGoalsCount / goalInputs.length * 100}%`;
            progressValue.firstElementChild.innerText = `${completedGoalsCount}/${goalInputs.length} completed`;
        } else {
            errorLabel.parentElement.classList.add("show-warning");
        }
    });
});

goalInputs.forEach((goal) => {
    if (allGoals[goal.name]) {
        goal.value = allGoals[goal.name].name;
        if (allGoals[goal.name].completed) {
            goal.parentElement.classList.add("completed");
        }
    }

    goal.addEventListener("focus", () => {
        errorLabel.parentElement.classList.remove("show-warning");
    });

    goal.addEventListener("input", (event) => {
        allGoals[event.target.name] = {
            name: event.target.value,
            completed: false
        }
        localStorage.setItem("allGoals", JSON.stringify(allGoals));
    });
});

