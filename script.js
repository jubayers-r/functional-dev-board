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

// discover

const discoverBtn = document.getElementById("discover");

discoverBtn.onclick = function(){
    window.location.href = "./blog.html";
}


//btns on
