let TaskList = document.getElementById("TaskListBox");
let All = document.getElementById("All");
let Active = document.getElementById("Active");
let Completed = document.getElementById("Completed");
let emptyMessage = document.getElementById("emptyMessage");
let taskCount = document.getElementById("taskCount");

let TaskListBox = [];
let TaskActiveBox = [];
let TaskCompletedBox = [];
let currentFilter = "all";

function AddedTasks() {
  let inputBox = document.getElementById("CreateTask");
  let NewTask = inputBox.value.trim();

  if (emptyMessage) {
    emptyMessage.style.display = "none";
  }

  if (NewTask === "") {
    alert("Уучлаарай та хоосон утга нэмэх боломжгүй ");
    return;
  }

  let taskDiv = document.createElement("div");
  taskDiv.className = "task-item";

  let NewInputBox = document.createElement("input");
  NewInputBox.type = "checkbox";
  NewInputBox.name = "AddedTask";

  let NewLabel = document.createElement("label");
  NewLabel.textContent = NewTask;

  let DelBtn = document.createElement("div");
  DelBtn.className = "DelBtn";
  DelBtn.textContent = "Delete";

  TaskListBox.push(taskDiv);
  TaskActiveBox.push(taskDiv);

  NewInputBox.onclick = ClickCheckbox;

  function ClickCheckbox() {
    if (NewInputBox.checked) {
      NewLabel.style.textDecoration = "line-through";

      TaskActiveBox = TaskActiveBox.filter(function (task) {
        return task !== taskDiv;
      });

      if (!TaskCompletedBox.includes(taskDiv)) {
        TaskCompletedBox.push(taskDiv);
      }
    } else {
      NewLabel.style.textDecoration = "none";

      TaskCompletedBox = TaskCompletedBox.filter(function (task) {
        return task !== taskDiv;
      });

      if (!TaskActiveBox.includes(taskDiv)) {
        TaskActiveBox.push(taskDiv);
      }
    }

    updateTaskCount();
    applyCurrentFilter();
  }

  DelBtn.onclick = Delete;

  function Delete() {
    taskDiv.remove();

    TaskListBox = TaskListBox.filter(function (task) {
      return task !== taskDiv;
    });

    TaskActiveBox = TaskActiveBox.filter(function (task) {
      return task !== taskDiv;
    });

    TaskCompletedBox = TaskCompletedBox.filter(function (task) {
      return task !== taskDiv;
    });

    if (TaskListBox.length === 0) {
      emptyMessage.style.display = "block";
    }

    updateTaskCount();
    applyCurrentFilter();
  }

  taskDiv.appendChild(NewInputBox);
  taskDiv.appendChild(NewLabel);
  taskDiv.appendChild(DelBtn);
  TaskList.appendChild(taskDiv);

  inputBox.value = "";

  updateTaskCount();
  applyCurrentFilter();
}

function showAll() {
  currentFilter = "all";

  All.style.background = "#3C82F6";
  All.style.color = "white";
  Completed.style.background = "none";
  Completed.style.color = "black";
  Active.style.background = "none";
  Active.style.color = "black";

  for (let i = 0; i < TaskListBox.length; i++) {
    TaskListBox[i].style.display = "flex";
  }
}

function showActive() {
  currentFilter = "active";

  Active.style.background = "#3C82F6";
  Active.style.color = "white";
  All.style.background = "none";
  All.style.color = "black";
  Completed.style.background = "none";
  Completed.style.color = "black";

  for (let i = 0; i < TaskListBox.length; i++) {
    TaskListBox[i].style.display = "none";
  }

  for (let i = 0; i < TaskActiveBox.length; i++) {
    TaskActiveBox[i].style.display = "flex";
  }
}

function showCompleted() {
  currentFilter = "completed";

  Completed.style.background = "#3C82F6";
  Completed.style.color = "white";
  All.style.background = "none";
  All.style.color = "black";
  Active.style.background = "none";
  Active.style.color = "black";

  for (let i = 0; i < TaskListBox.length; i++) {
    TaskListBox[i].style.display = "none";
  }

  for (let i = 0; i < TaskCompletedBox.length; i++) {
    TaskCompletedBox[i].style.display = "flex";
  }
}

function applyCurrentFilter() {
  if (currentFilter === "all") {
    showAll();
  } else if (currentFilter === "active") {
    showActive();
  } else if (currentFilter === "completed") {
    showCompleted();
  }
}

function updateTaskCount() {
  taskCount.textContent =
    TaskCompletedBox.length + " of " + TaskListBox.length + " tasks completed";
}

function clearCompleted() {
  for (let i = 0; i < TaskCompletedBox.length; i++) {
    TaskCompletedBox[i].remove();
  }

  TaskListBox = TaskListBox.filter(function (task) {
    return !TaskCompletedBox.includes(task);
  });

  TaskActiveBox = TaskActiveBox.filter(function (task) {
    return !TaskCompletedBox.includes(task);
  });

  TaskCompletedBox = [];

  if (TaskListBox.length === 0) {
    emptyMessage.style.display = "block";
  }

  updateTaskCount();
  showAll();
}
