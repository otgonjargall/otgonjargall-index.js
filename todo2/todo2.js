let todos = [];
let todo = {
  title: "heviin daalgavar",
  isDone: false,
};
function createTodo(title) {
  todos.push({ title, isDone: false });
}
function renderTodo() {
  let todosContainer = document.getElementById("todos");
  for (let i = 0; i < todoList.length; i++) {
    let div = document.createElement("div");
    let checkbox = document.createElement("input");
    let title = document.createElement("p");
    let romoveBtn = document.createElement("button");

    div.classList.add("todo");
    title.textContent = todo[i].title;
    checkbox.type = "checkbox";
    romoveBtn.textContent = "x";

    div.appendChild(checkbox);
    div.appendChild(title);
    todoContainer.appendChild(div);
    div.appendChild(romoveBtn);
    console.log(todos[i]);
  }
}
function filterByDone(value) {
  let result = [];
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].isDone === value) {
      result.push(todos[i]);
    }
  }
}

function updateTodoIndex(index) {
  for (let i = 0; i < todos.length; i++) {
    if (index === i) {
      todos[i].isDone = true;
      break;
    }
    console.log(todos);
  }
}

function deleteTodo(index) {
  let result = [];
  for (let i = 0; i < todos.length; i++) {
    if (i !== index) {
      result.push(todos[i]);
    }
  }
  console.log(result);
}
createTodo("usand oroh");
createTodo("gertee ochih");
updateTodoIndex(0);
deleteTodo(1);
renderTodo();
