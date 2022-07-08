// Global varriables

var startButton = document.getElementById(`startButton`);
var correct2 = document.getElementById(`correct2`);
var incorrect2 = document.getElementById(`incorrect2`);

// Created Functions

function start() {
    document.getElementById(`startContain`).style.display = `none`;
    document.getElementById(`q1`).style.display = `flex`;
};
function q2() {
    document.getElementById(`q1`).style.display = `none`;
    document.getElementById(`q2`).style.display = `flex`;
};
function q3() {
    document.getElementById(`q2`).style.display = `none`;
    document.getElementById(`q3`).style.display = `flex`;
};

// Declared Functions

startButton.onclick = start;

document.getElementById(`c1`).onclick = q2;
document.getElementById(`i11`).onclick = q2;
document.getElementById(`i12`).onclick = q2;
document.getElementById(`i13`).onclick = q2;

document.getElementById(`c2`).onclick = q3;
document.getElementById(`i21`).onclick = q3;
document.getElementById(`i22`).onclick = q3;
document.getElementById(`i23`).onclick = q3;