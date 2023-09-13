const taskForm = document.getElementById("new-task");
taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskInputField = document.getElementById("task");
  const newTask = taskInputField.value;
  const newTaskCard = document.createElement("div");
  newTaskCard.classList.add("task-card");

  newTaskCard.innerHTML = `
    <p onclick="taskDone(event)">${newTask}</p>
    <button onclick="deleteCard(event)">DELETE</button>
    `;
  const sectionForTasks = document.getElementById("saved-tasks");
  sectionForTasks.appendChild(newTaskCard);
  taskInputField.value = "";
});

const deleteCard = function (e) {
  const clickedButton = e.target;
  const reallyRemove = confirm("Do you really want to delete your task?");
  if (reallyRemove) {
    clickedButton.parentElement.remove();
  }
};

const taskDone = function (e) {
  //e.target.style.textDecoration = "line-through";
  if (e.target.style.textDecoration === "line-through") {
    e.target.style.textDecoration = "none";
  } else {
    e.target.style.textDecoration = "line-through";
  }
};
