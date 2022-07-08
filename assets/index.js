// Global varriables

var startButton = document.getElementById(`startButton`);
var correct = document.getElementById(`correct`);
var incorrect = document.getElementById(`incorrect`);

// Created Functions

function start() {
    document.getElementById(`startContain`).style.display = `none`;
    document.getElementById(`q1`).style.display = `flex`;
};
function q2() {
    document.getElementById(`q1`).style.display = `none`;
    document.getElementById(`q2`).style.display = `flex`;
};

// Declared Functions

startButton.onclick = start;
correct.onclick = q2;