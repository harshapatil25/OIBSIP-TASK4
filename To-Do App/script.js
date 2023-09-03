const pendingTasksList = document.getElementById("pendingTasks");
const completedTasksList = document.getElementById("completedTasks");
const taskInput = document.getElementById("taskInput");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = '<span>' + taskText + '</span><span class="actions"><button onclick="completeTask(this)">Complete</button><button onclick="editTask(this)">Edit</button><button onclick="deleteTask(this)">Delete</button></span>';
        pendingTasksList.appendChild(li);
        taskInput.value = "";
    }
}

function completeTask(button) {
    const li = button.parentElement.parentElement;
    const taskText = li.querySelector("span").textContent;
    li.remove();

    const completedLi = document.createElement("li");
    completedLi.innerHTML = '<span class="completed">' + taskText + '</span><span class="actions"><button onclick="deleteTask(this)">Delete</button></span>';
    completedTasksList.appendChild(completedLi);
}

function editTask(button) {
    const li = button.parentElement.parentElement;
    const taskText = li.querySelector("span").textContent;
    const newText = prompt("Edit the task:", taskText);

    if (newText !== null && newText.trim() !== "") {
        li.querySelector("span").textContent = newText.trim();
    }
}

function deleteTask(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
