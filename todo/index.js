let TaskList = document.getElementById("TaskListBox");
let All = document.getElementById("All");
let Active = document.getElementById("Active");
let Completed = document.getElementById("Completed");

function AddedTasks() {
  let inputBox = document.getElementById("CreateTask");
  let NewTask = inputBox.value;

  if (emptyMessage) {
    emptyMessage.style.display = "none";
  }
  if (inputBox.value === "") {
    alert("Уучлаарай та хоосон утга нэмэх боломжгүй ");
    return;
  }
  let taskDiv = document.createElement("div");
  taskDiv.className = "task-item";
  // taskdiv nertei task item class uusgesen

  let NewInputBox = document.createElement("input");
  NewInputBox.type = "checkbox";
  NewInputBox.name = "AddedTask";
  NewInputBox.onclick = ClickCheckbox;
  function ClickCheckbox() {
    if (NewInputBox.checked) {
      NewLabel.style.textDecoration = "line-through";
      console.log("checkbox is checked");
      All.addEventListener();
    } else {
      NewLabel.style.textDecoration = "none";
      console.log("checkbox is unchecked");
    }
  }

  // checkbox iin input
  let NewLabel = document.createElement("label");
  NewLabel.textContent = NewTask;
  // checkboxiin label
  let DelBtn = document.createElement("div");
  DelBtn.className = "DelBtn";
  DelBtn.textContent = "Delete";
  DelBtn.onclick = Delete;
  function Delete() {
    taskDiv.remove();
  }

  let TaskAll = document.createElement("div");
  let TaskCompleted = document.createElement("div");
  let All = document.createElement("div");
  All.textContent = (TaskCompleted, "of", TaskAll, "tasks completed");

  taskDiv.appendChild(NewInputBox);
  taskDiv.appendChild(NewLabel);
  taskDiv.appendChild(DelBtn);

  TaskList.appendChild(taskDiv);
  inputBox.value = "";
}
function showAll() {
  All.style.background = "#3C82F6";
  All.style.color = "white";
  Completed.style.background = "none";
  Completed.style.color = "black";
  Active.style.background = "none";
  Active.style.color = "black";
}
function showActive() {
  Active.style.background = "#3C82F6";
  Active.style.color = "white";
  All.style.background = "none";
  All.style.color = "black";
  Completed.style.background = "none";
  Completed.style.color = "black";
}
function showCompleted() {
  Completed.style.background = "#3C82F6";
  Completed.style.color = "white";
  All.style.background = "none";
  All.style.color = "black";
  Active.style.background = "none";
  Active.style.color = "black";
}
