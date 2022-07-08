// Global varriables
var startButton = document.getElementById(`startButton`);
// Created Functions
function start() {
    document.getElementById(`startContain`).style.display = "none";
    document.getElementById(`q1`).style.display = "unset";
};

startButton.onclick = start;