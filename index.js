const now = new Date();
const month = now.getMonth();
const date = now.getDate();
const day = now.getDay();
const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
// 今日の日付
const output = `${month + 1}/${date}(${weekdays[day]})`;
const today = (document.getElementById("day").textContent = output);

const todoinput = document.querySelector(".todo-input");
const addButton = document.querySelector(".add");
const todolist = document.querySelector(".todo-list");
const count = document.querySelector(".count");
const deleteButton = document.querySelector(".delete");
const total = [];

// event listner
addButton.addEventListener("click", () => {
  event.preventDefault();

  // create div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // create li
  const li = document.createElement("li");
  li.innerText = todoinput.value;
  li.classList.add("todo-item");
  total.push(li);

  // 親要素.appendChild(追加したい要素)
  todoDiv.appendChild(li);

  // 追加するたびにクリアにする
  todoinput.value = "";

  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("completed-btn");
  todoDiv.appendChild(completedButton);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  todolist.appendChild(todoDiv);

  // 全削除ボタンを出す
  deleteButton.innerHTML =
    '<button type="submit" class="button">全て削除<i class="fas fa-trash"></i></button>';
  count.textContent = `タスク残り：${total.length}`;

  // チェックしたら線で消す
  completedButton.addEventListener("click", (index) => {
    li.classList.add("line");
    total.splice(index, 1);
    count.textContent = `タスク残り：${total.length}`;
  });
  // ゴミボタンでそれぞれ消す
  trashButton.addEventListener("click", (index) => {
    todoDiv.remove(index);
    total.splice(index, 1);
    count.textContent = `タスク残り：${total.length}`;
  });
  // 全削除ボタンで消す
  deleteButton.addEventListener("click", (index) => {
    todolist.innerHTML = "";
    deleteButton.innerHTML = "";
    total.splice(index);
    count.textContent = `タスク残り：${total.length}`;
  });
});
