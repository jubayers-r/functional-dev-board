// theme btn
document.getElementById("theme-btn").addEventListener("click", function () {
  const body = document.body;
  const maxNum = 255;
  const minNum = 0;
  let randomNum1 = Math.floor(Math.random() * (maxNum - minNum + 1));
  let randomNum2 = Math.floor(Math.random() * (maxNum - minNum + 1));
  let randomNum3 = Math.floor(Math.random() * (maxNum - minNum + 1));
  let randomColors = `rgb(${randomNum1},${randomNum2},${randomNum3})`;
  if (body.classList.contains("bg-[#f4f7ff]")) {
    body.classList.remove("bg-[#f4f7ff]");
    body.style.backgroundColor = randomColors;
  } else {
    body.style.backgroundColor = randomColors;
  }
});

// discover
const discoverBtn = document.getElementById("discover");
discoverBtn.onclick = function () {
  window.location.href = "./blog.html";
};

// completed btn
const task = document.getElementById("task");
const taskDone = document.getElementById("task-done");
function taskUltimateById(bId, tId) {
  const btnId = document.getElementById(bId);
  const taskId = document.getElementById(tId).innerText;
  if (btnId.classList.contains("btn-primary")) {
    btnId.classList.remove("btn-primary");
    btnId.classList.remove("bg-[#3752FD]");
    btnId.classList.add("text-white");
    btnId.classList.add("bg-blue-200");
    task.textContent = parseInt(task.textContent) - 1;
    taskDone.textContent = parseInt(taskDone.textContent) + 1;

    notifications.innerHTML += `<div class="bg-[#F4F7FF] p-2.5 rounded-lg">
              <p class="font-normal text-lg">
                You have Completed The Task ${taskId} at ${timeNow}
              </p>
            </div>`;
    alert("Board updated successfully");
  }
  checkAllTasksCompleted();
}

// all tasked completed alert
function checkAllTasksCompleted() {
  const buttons = [
    document.getElementById("btn1"),
    document.getElementById("btn2"),
    document.getElementById("btn3"),
    document.getElementById("btn4"),
    document.getElementById("btn5"),
  ];

  const allCompleted = buttons.every(
    (btn) => !btn.classList.contains("btn-primary"),
  );

  if (allCompleted) {
    alert("Congrats!!! You have completed all the current task");
  }
}

// clear log
document.getElementById("clear").addEventListener("click", function () {
  notifications.innerHTML = "";
});

// live time
let timeNow = "";
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const meridiem = hours < 12 ? "AM" : "PM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);
  const mins = now.getMinutes().toString().padStart(2, 0);
  const secs = now.getSeconds().toString().padStart(2, 0);

  timeNow = `${hours}:${mins}:${secs} ${meridiem}`;
  return timeNow;
}
setInterval(updateClock, 1000);
updateClock();

// live date
const today = new Date();
const day = today.toLocaleString("en-US", { weekday: "short" });
const month = today.toLocaleString("en-US", { month: "short" });
const date = today.getDate();
const year = today.getFullYear();
const fullDate = document.getElementById("date");
fullDate.innerHTML = `${day} , <br> <span class="font-bold"> ${month} ${date} ${year}</span>`;
