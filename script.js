document.addEventListener("DOMContentLoaded", function () {
  const taskForm = document.getElementById("task-form");
  const taskInput = document.getElementById("new-task");
  const taskList = document.getElementById("task-list");

  taskForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;
    li.classList.add("task-item");

    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function () {
      li.remove();
    });

    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
  });
});
