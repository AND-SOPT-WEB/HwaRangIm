const toDoInput = document.querySelector(".todo-input");
const addButton = document.querySelector(".add-button");
const todoList = document.querySelector(".todo-list");

let inputText;
let todoListArray = localStorage.getItem("todo") || [];
console.log(todoListArray);

localStorage.setItem("todo", todoListArray);

toDoInput.addEventListener("input", (e) => {
  inputText = e.target.value;
});

addButton.addEventListener("click", () => {
  if (!inputText) return;
  const li = document.createElement("li");
  const span = document.createElement("p");
  const deleteButton = document.createElement("button");

  const newTodo = {
    todoText: inputText,
    id: Date.now(),
  };

  deleteButton.addEventListener("click", (e) => {
    handleDelete(e);
  });

  span.textContent = inputText;
  deleteButton.textContent = "삭제";

  li.appendChild(span);
  li.appendChild(deleteButton);
  todoList.appendChild(li);

  todoListArray.push({ ...newTodo });

  localStorage.setItem("todo", JSON.stringify(todoListArray));

  toDoInput.value = null;
});

const handleDelete = (e) => {
  const li = e.target.closest("li");
  li.remove();
  todoListArray = todoListArray.filter((todo) => todo.id !== newTodo.id);
  localStorage.setItem("todo", JSON.stringify(todoListArray));
};
