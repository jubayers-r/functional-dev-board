// theme btn

document.getElementById("theme-btn").addEventListener("click", function () {
    const body = document.body;
    const colors = [
        "rgb(155, 95, 224)", "rgb(22, 164, 216)", "rgb(96, 219, 232)", "rgb(139, 211, 70)", "rgb(239, 223, 72)",
        "rgb(249, 165, 44)", "rgb(214, 78, 18)"
    ];

    let currentColor = body.style.backgroundColor;

   if (body.classList.contains("bg-[#f4f7ff]")) {
    body.classList.remove("bg-[#f4f7ff]");
    body.style.backgroundColor = colors[0];
   } else {
    let colorIdx = colors.indexOf(currentColor);
    if(currentColor === -1 || colorIdx === colors.length - 1){
        body.classList.add("bg-[#f4f7ff]");
        body.style.backgroundColor = "";
    } else {
        body.style.backgroundColor = colors[colorIdx + 1]
    }
   }
});

// discover click

const discoverBtn = document.getElementById("discover");

discoverBtn.onclick = function(){
    window.location.href = "./blog.html";
}


//btns
const task = document.getElementById("task");
const taskDone = document.getElementById("task-done");
const notifications = document.getElementById('notifications');
const task1 = document.getElementById("task1").innerText;
const task2 = document.getElementById("task2").innerText;
const task3 = document.getElementById("task3").innerText;
const task4 = document.getElementById("task4").innerText;
const task5 = document.getElementById("task5").innerText;

// live time
let timeNow = '';
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours < 12 ? 'AM' : 'PM';
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const mins = now.getMinutes().toString().padStart(2, 0);
    const secs = now.getSeconds().toString().padStart(2, 0);

    timeNow = `${hours}:${mins}:${secs} ${meridiem}`;
    return timeNow;
}

setInterval(updateClock, 1000);
updateClock();


document.getElementById("btn1").addEventListener("click", function () {
const btn1 = document.getElementById("btn1");
if(btn1.classList.contains("btn-primary")){
    btn1.classList.remove("btn-primary");
    btn1.classList.remove("bg-[#3752FD]");
    btn1.classList.add("text-white");
    btn1.classList.add("bg-blue-200");
    task.textContent = parseInt(task.textContent) - 1;
    taskDone.textContent = parseInt(taskDone.textContent) + 1;

    notifications.innerHTML += `<div class="bg-[#F4F7FF] p-2.5 rounded-lg">
            <p class="font-normal text-lg">
              You have Completed The Task ${task1} at ${timeNow}
            </p>
          </div>`;
}
})
document.getElementById("btn2").addEventListener("click", function () {
const btn1 = document.getElementById("btn1");
if(btn2.classList.contains("btn-primary")){
    btn2.classList.remove("btn-primary");
    btn2.classList.remove("bg-[#3752FD]");
    btn2.classList.add("text-white");
    btn2.classList.add("bg-blue-200");
    task.textContent = parseInt(task.textContent) - 1;
    taskDone.textContent = parseInt(taskDone.textContent) + 1;
    notifications.innerHTML += `<div class="bg-[#F4F7FF] p-2.5 rounded-lg">
            <p class="font-normal text-lg">
              You have Completed The Task ${task2} at ${timeNow}
            </p>
          </div>`;
}
})
document.getElementById("btn3").addEventListener("click", function () {
const btn3 = document.getElementById("btn3");
if(btn3.classList.contains("btn-primary")){
    btn3.classList.remove("btn-primary");
    btn3.classList.remove("bg-[#3752FD]");
    btn3.classList.add("text-white");
    btn3.classList.add("bg-blue-200");
    task.textContent = parseInt(task.textContent) - 1;
    taskDone.textContent = parseInt(taskDone.textContent) + 1;

    notifications.innerHTML += `<div class="bg-[#F4F7FF] p-2.5 rounded-lg">
            <p class="font-normal text-lg">
              You have Completed The Task ${task3} at ${timeNow}
            </p>
          </div>`;
}
})
document.getElementById("btn4").addEventListener("click", function () {
const btn4 = document.getElementById("btn4");
if(btn4.classList.contains("btn-primary")){
    btn4.classList.remove("btn-primary");
    btn4.classList.remove("bg-[#3752FD]");
    btn4.classList.add("text-white");
    btn4.classList.add("bg-blue-200");
    task.textContent = parseInt(task.textContent) - 1;
    taskDone.textContent = parseInt(taskDone.textContent) + 1;
    notifications.innerHTML += `<div class="bg-[#F4F7FF] p-2.5 rounded-lg">
            <p class="font-normal text-lg">
              You have Completed The Task ${task4} at ${timeNow}
            </p>
          </div>`;
}
})
document.getElementById("btn5").addEventListener("click", function () {
const btn5 = document.getElementById("btn5");
if(btn5.classList.contains("btn-primary")){
    btn5.classList.remove("btn-primary");
    btn5.classList.remove("bg-[#3752FD]");
    btn5.classList.add("text-white");
    btn5.classList.add("bg-blue-200");
    task.textContent = parseInt(task.textContent) - 1;
    taskDone.textContent = parseInt(taskDone.textContent) + 1;
    notifications.innerHTML += `<div class="bg-[#F4F7FF] p-2.5 rounded-lg">
            <p class="font-normal text-lg">
              You have Completed The Task ${task5} at ${timeNow}
            </p>
          </div>`;
}
})


// clear log

document.getElementById("clear").addEventListener("click", function () {
    notifications.innerHTML = "";
})

// live date
const today = new Date();
const day = today.toLocaleString('en-US', { weekday: 'short' });
const month = today.toLocaleString('en-US', { month: 'short' });
const date = today.getDate();
const year = today.getFullYear();

const fullDate = document.getElementById("date");
fullDate.innerHTML = `${day} , <br> <span class="font-bold"> ${month} ${date} ${year}</span>`;

// back to desk button

const backBtn = document.getElementById("back-btn");

backBtn.onclick = function(){
    window.location.href = "./index.html";
}
