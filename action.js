
let btn = document.getElementById("todo-btn");
let input = document.getElementById("todo-input");
let ul = document.getElementById("todo-items");

btn.addEventListener("click", () => {
  if (input.value.trim() === "") {
    alert("Please enter a todo item");
    return;
  } else {
    let li = document.createElement("li");
    li.textContent = input.value;
    ul.appendChild(li);

    let span = document.createElement("span");
    span.textContent = "\u00d7";
    span.classList.add("close");
    li.appendChild(span);

    saveTolocalStorage();
  }
  input.value = "";
});

ul.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("selected");
    saveTolocalStorage();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveTolocalStorage();
  }
});

function saveTolocalStorage() {
  localStorage.setItem("todos", ul.innerHTML);
}
function loadFromLocalStorage() {
  let todos = localStorage.getItem("todos");
  if (todos) {
    ul.innerHTML = todos;
  }
}
loadFromLocalStorage();