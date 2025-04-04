let todo = [];

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();

    if (task) {
        todo.push(task);
        taskInput.value = "";
        updateList();
    }
}

function deleteTask(index) {
    todo.splice(index, 1);
    updateList();
}

function deleteTask(index) {
    todo.splice(index, 1);
    updateList();
}

function editNewButton(index) {
    let newTask = prompt("Edit your task:", todo[index]);
    if (newTask !== null && newTask.trim() !== "") {
        todo[index] = newTask.trim();
        updateList();
    }
}

function updateList() {
    let list = document.getElementById("todoList");
    list.innerHTML = "";

    for (let i = 0; i < todo.length; i++) {
        let li = document.createElement("li");

        let editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = function () {
            editNewButton(i);
        };

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            deleteTask(i);
        };

        li.textContent = todo[i];
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        list.appendChild(li);
    }
}