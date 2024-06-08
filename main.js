document.getElementById("addtask").addEventListener("click", addNewTask);

function addNewTask() {
  const taskInput = document.getElementById("inputbox");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const taskList = document.getElementById("list-container");
  const taskItem = document.createElement("li");
  taskItem.className = "item";

  const taskTextSpan = document.createElement("span");
  taskTextSpan.className = "tasktext";
  taskTextSpan.textContent = taskText;

  const taskButtons = document.createElement("div");
  taskButtons.className = "buttons";

  const doneButton = createButton("Mark as Complete", "mac-button", () => {
    taskItem.classList.toggle("completed");
  });

  const modifyButton = createButton("Edit", "modify-button", () => {
    const newTaskText = prompt("Edit task:", taskTextSpan.textContent);
    if (newTaskText !== null) {
      taskTextSpan.textContent = newTaskText.trim();
    }
  });

  const removeButton = createButton("Delete", "remove-button", () => {
    taskList.removeChild(taskItem);
  });

  taskButtons.appendChild(doneButton);
  taskButtons.appendChild(modifyButton);
  taskButtons.appendChild(removeButton);

  taskItem.appendChild(taskTextSpan);
  taskItem.appendChild(taskButtons);
  taskList.appendChild(taskItem);

  taskInput.value = "";
}

function createButton(buttonText, buttonClass, onClick) {
  const button = document.createElement("button");
  button.className = buttonClass;
  button.textContent = buttonText;
  button.addEventListener("click", onClick);
  return button;
}
