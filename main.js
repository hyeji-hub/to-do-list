const todos = document.querySelector(".todos");
const input = document.querySelector(".header__input");
const addBtn = document.querySelector(".header__button");

function onAdd() {
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }

  const todo = createTodo(text);

  todos.appendChild(todo);

  todos.scrollIntoView({ block: "end" });

  input.value = "";
  input.focus();
}

let id = 0;
function createTodo(text) {
  const todoRow = document.createElement("li");
  todoRow.setAttribute("class", "todo__row");
  todoRow.setAttribute("data-id", id);

  todoRow.innerHTML = `
      <div class="todo">
          <span class="todo__name">${text}</span>
          <button class="todo__delete">
              <i class="fas fa-trash" data-id="${id}"></i>
          </button>
          </div>
      <div class="todo__divider"></div>
    `;

  id++;
  return todoRow;
}

addBtn.addEventListener("click", () => {
  onAdd();
});

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    onAdd();
  }
});

todos.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDelete = document.querySelector(`.todo__row[data-id="${id}"]`);
    toBeDelete.remove();
  }
});
