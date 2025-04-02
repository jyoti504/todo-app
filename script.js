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

function updateList() {
    let list = document.getElementById("todoList");
    list.innerHTML = "";

    for (let i = 0; i < todo.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = `${todo[i]} <button onclick="deleteTask(${i})">Delete</button>`;
        list.appendChild(li);
    }
}