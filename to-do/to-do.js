let taskList = document.getElementById("taskList");
let input = document.getElementById("Input");

let todos = [];

function addTask() {
  const task = input.value.trim();
  todos.push({
    taskInput: task,
    isCompleted: false,
  });

  input.value = "";
  renderTodos();
}

function renderTodos() {
  taskList.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = "li";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.isCompleted;
    checkbox.onchange = () => {
      todos[index].isCompleted = checkbox.checked;
    };

    const span = document.createElement("span");
    span.textContent = todo.taskInput;

    if (todo.isCompleted) {
      span.style.textDecoration = "line-through";
    }

    const button = document.createElement("button");
    button.textContent = "Delete";
    button.onclick = () => {
      todos.splice(index, 1);
      renderTodos();
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);
    taskList.appendChild(li);
  });
}
