const taskCheckList = document.querySelector(".task-check-list");

const allTasks = JSON.parse(localStorage.getItem("allTasks")) || {};
const taskStatus = JSON.parse(localStorage.getItem("taskStatus")) || {};
let noOfTasksCompleted = localStorage.getItem("noOfTaskCompleted") || 0;

let allGoalsSelected = false;

// To read tasks from localStorage and print it on card, if it is available in localStorage. 
for (let i = 0; i < Object.keys(allTasks).length; i++) {
    document.querySelector(`input[name="${Object.keys(allTasks)[i]}"]`).value = allTasks[Object.keys(allTasks)[i]];

    if (taskStatus[Object.keys(taskStatus)[i]] === "completed") {
        document.querySelector(`input[name="${Object.keys(allTasks)[i]}"]`).previousElementSibling.src = "checked_icon.svg";
        document.querySelector(`input[name="${Object.keys(allTasks)[i]}"]`).parentElement.setAttribute("status", "completed");
    }
}

updateProgressBar(noOfTasksCompleted);

// To focus input:text field when user click on div.task 
taskCheckList.addEventListener("click", (event) => {
    if (event.target.classList.contains("task")) {
        event.target.lastElementChild.focus();
    }
});

// To update tasks in allTasks variable and localStorage.
taskCheckList.addEventListener("keyup", (event) => {
    allTasks[event.target.name] = event.target.value.trim();
    localStorage.setItem("allTasks", JSON.stringify(allTasks));

    if (event.key === "Enter") {
        if (event.target.parentElement.nextElementSibling) {
            event.target.parentElement.nextElementSibling.lastElementChild.focus();
        } else {
            event.target.blur();
        }
    }
});


// To check that is all tasks are set and show warning based on that.
function checkForWarning() {
    if (Object.keys(allTasks).length === 3 && !Object.values(allTasks).includes("")) {
        document.querySelector(".card .warning-label").style.visibility = "hidden";
        allGoalsSelected = true;
    } else {
        document.querySelector(".card .warning-label").style.visibility = "visible";
        allGoalsSelected = false;
    }
}

// To check that clicked task is set or not to show warning.
taskCheckList.addEventListener("focusout", () => {
    checkForWarning();
});

function updateProgressBar(tasksCompleted) {
    document.querySelector(".progress-bar .progress").style.width = `${33.33 * tasksCompleted}%`;
    document.querySelector(".progress-bar .label").innerText = `Completed - ${noOfTasksCompleted} / 3`;
}

// To update progress-bar and check-boxes on click if all goals are set.
taskCheckList.addEventListener("click", (event) => {
    checkForWarning();
    if (allGoalsSelected) {
        if (event.target.classList.contains("check-box")) {
            if (event.target.parentElement.getAttribute("status") === "incomplete") {
                noOfTasksCompleted++;
                updateProgressBar(noOfTasksCompleted);
                event.target.src = "checked_icon.svg";
                event.target.parentElement.setAttribute("status", "completed");
                taskStatus[event.target.parentElement.lastElementChild.name] = "completed";
                localStorage.setItem("taskStatus", JSON.stringify(taskStatus));
                localStorage.setItem("noOfTaskCompleted", noOfTasksCompleted);
            } else if (event.target.parentElement.getAttribute("status") === "completed") {
                noOfTasksCompleted--;
                updateProgressBar(noOfTasksCompleted);
                event.target.src = "unchecked_icon.svg";
                event.target.parentElement.setAttribute("status", "incomplete");
                taskStatus[event.target.parentElement.lastElementChild.name] = "incomplete";
                localStorage.setItem("taskStatus", JSON.stringify(taskStatus));
                localStorage.setItem("noOfTaskCompleted", noOfTasksCompleted);
            }
            console.log(localStorage);
        }
    }
});
