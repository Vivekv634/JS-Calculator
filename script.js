var theme = document.querySelector(".theme");
var body = document.body;
var darkBtn = document.querySelector(".darkBtn");
var lightBtn = document.querySelector(".lightBtn");
var ansDisplay = document.querySelector("#ansDisplay");
var screen = document.querySelector("#screen");
var menu = document.querySelector(".menu-icon");
var menu_open = document.querySelector(".menu_list");
var menu_close = document.querySelector(".closeBtn");


theme.onclick = () => {
    body.classList.toggle("dark");
    darkBtn.classList.toggle("dark-mode");
    lightBtn.classList.toggle("light-mode");
}

menu.onclick = () => {
    menu_open.classList.toggle("menu-clicked");
}

menu_close.onclick = () => {
    menu_open.classList.toggle("menu-clicked");
}

function display(value) {
    screen.textContent += value;
    saveData();
}

function solve() {
    var expression = screen.textContent;
    var result = eval(expression);
    ansDisplay.textContent = result;
    saveData();
}

function clearAll() {
    screen.textContent = '';
    ansDisplay.textContent = '';
    saveData();
}

function backspace() {
    var expression = screen.textContent;
    screen.textContent = expression.slice(0, expression.length - 1);
    saveData();
}

function copyResult() {
    var result = ansDisplay;
    if (result.textContent != "") {
        navigator.clipboard.writeText(result.textContent);
        alert(`Result copied to Clipboard : ${result.textContent}`);
    } else {
        alert(`There is not result to copy!`);
    }
}

function saveData() {
    localStorage.setItem("screenData", screen.textContent);
    localStorage.setItem("answerData", ansDisplay.textContent);
}

function loadData() {
    screen.textContent = localStorage.getItem("screenData");
    ansDisplay.textContent = localStorage.getItem("answerData");
}

loadData();