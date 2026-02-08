const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-name");
const taskList = document.querySelector(".task-list");
const taskResult = document.querySelector(".task-result-box");
const taskResultPEl = document.getElementById("task-result");
const randomizeBtnEl = document.getElementById("randomize");
let tasks = [];

taskForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const task = taskInput.value;

  if (task !== "") {
    tasks.push(task);
    taskForm.reset();

    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    taskItem.style.backgroundColor = pickRandomColor();

    const taskText = document.createElement("p");
    taskText.classList.add("task-text");
    taskText.textContent = task;
    taskItem.append(taskText);

    taskList.insertAdjacentElement("afterbegin", taskItem);
  }

  console.log(tasks);
}

randomizeBtnEl.addEventListener("click", () => chooseRandomTask(tasks));

function chooseRandomTask(tasks) {
  const maxNumber = tasks.length;
  const randomTaskIndex = Math.floor(Math.random() * maxNumber);

  taskResultPEl.textContent = tasks[randomTaskIndex];
  taskResult.style.backgroundColor = pickRandomColor();
  taskResult.style.boxShadow = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";
}

const pickRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + randomColor;
};
