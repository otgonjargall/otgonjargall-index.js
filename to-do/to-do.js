let taskList = document.getElementById("taskList");
let input = document.getElementById("Input");

let todos = [];

function createTodo() {
  todos.push({ taskInput: input.value, isCompleted: false });
}

function addTask() {
  let todosContainer = document.getElementById("todos");
  for (let i = 0; i < todos.length; i++) {
    let li = document.createElement("li");
    li.className = "li";
    let checkbox = document.createElement("input");
    let button = document.createElement("button");
    checkbox.type = "checkbox";

    button.textContent = "Delete";
    button.onclick = deletedoto;

    function deletedoto() {
      li.remove();
    }
    li.textContent = input.value;

    li.appendChild(checkbox);
    li.appendChild(button);
    taskList.appendChild(li);
  }
}
// const todos = [
//   { taskInput: "Create PR 2", isCompleted: false },
//   { taskInput: "Create PR ", isCompleted: true },
// ];

// let taskInput = document.getElementById("taskInput");
// for (let i = 0; i < todos.length; i++) {
//   let todo = todos[i];
//   let todohtml = `<div class="todo">
//                       <div>${todo.taskInput}</div>
//                       <input type="checkbox" />
//                     </div>`;
//   box.innerHTML += todohtml;
// }
// if (input.value === "") {
//   alert("Please enter a task");
//   return;
// } else {
//   span.style.display = "none";
// }
