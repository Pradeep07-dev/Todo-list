const inputItem = document.querySelector(".task-input");
const addItem = document.querySelector(".add-item");
const ul = document.querySelector(".ul");
const clearList = document.querySelector(".clear-list");

addItem.addEventListener("click", todolist);

function todolist() {
  // let inputItem = document.querySelector(".task-input");
  let name = document.querySelector(".task-input").value;
  if (name === "") {
    alert("Task can't be empty!");
  } else {
    let textItem = document.createTextNode(name);
    let a = document.createElement("a");
    a.textContent = "X";
    a.className = "remove";
    a.addEventListener("click", deleteItem);

    let li = document.createElement("li");
    li.classList.add("li-todo");
    li.append(a);
    li.appendChild(textItem);
    ul.appendChild(li);
    inputItem.value = "";
    let toggle = false;
    li.addEventListener("click", () => {
      toggle = !toggle;
      if (toggle) {
        li.style.textDecoration = "line-through";
      } else {
        li.style.textDecoration = "none";
      }
    });

    function deleteItem() {
      // console.log(e.target);
      li.remove();
    }
    clearList.addEventListener("click", deleteAll);
    function deleteAll() {
      // console.log(e.target);
      ul.innerHTML = "";
    }
  }
}
