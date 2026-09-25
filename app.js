
const inputBox = document.getElementById("input-box");
const qoshishBtn = document.getElementById("qoshish-btn");
const listContainer = document.getElementById("list-container");
const themeBtn = document.getElementById("theme-btn");


qoshishBtn.addEventListener("click", addTask);

function addTask() {

    if (inputBox.value === '') {
        alert("Iltimos, vazifangizni yozing!");
    } else {

        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);


        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}


listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");

        themeBtn.innerHTML = isDark ? "☀️ Kun" : "🌙 Tun";


        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
}


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {

    listContainer.innerHTML = localStorage.getItem("data") || "";


    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        if (themeBtn) themeBtn.innerHTML = "☀️ Kun";
    }
}

showTask();