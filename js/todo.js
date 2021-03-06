const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-form__input");
const todoList = document.querySelector(".todo-list");

const deleteTodo = (event) => {
  const li = event.target.parentNode;
  const id = li.id;
  li.remove();
  const toDos = loadLocalTodos();
  let resultToDos = [];
  for (toDo in toDos) {
    if (String(id) !== String(toDos[toDo].id)) {
      resultToDos.push(toDos[toDo]);
    }
  }
  localStorage.setItem("todos", JSON.stringify(resultToDos));
};

function paintTodo(item) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = item.value + " ";
  const textDelete = document.createElement("span");
  textDelete.innerText = " x";
  textDelete.addEventListener("click", deleteTodo);
  li.id = item.id;
  li.appendChild(span);
  li.appendChild(textDelete);
  todoList.appendChild(li);
}

const submitTodo = (event) => {
  event.preventDefault();
  const id = Date.now();
  const newTodo = { value: todoInput.value, id };
  todoInput.value = "";
  let toDos = JSON.parse(localStorage.getItem("todos"));
  if (toDos === null) {
    toDos = [];
  }
  toDos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(toDos));
  while (todoList.hasChildNodes()) {
    todoList.removeChild(todoList.firstChild);
  }
  if (toDos !== null) {
    toDos.forEach(paintTodo);
  }
};

function saveLocalTodos() {}

function loadLocalTodos() {
  const todos = localStorage.getItem("todos");
  const parsedTodos = JSON.parse(todos);
  return parsedTodos;
}

function init() {
  const loadedTodos = loadLocalTodos();
  if (loadedTodos !== null) {
    loadedTodos.forEach(paintTodo);
  }
}

const handleStart = () => {
  todoList.classList.add(HIDDEN_CLASSNAME);
};

init();

todoForm.addEventListener("submit", submitTodo);
