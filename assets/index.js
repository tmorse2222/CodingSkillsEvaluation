// Global varriables

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
function q4() {
    document.getElementById(`q3`).style.display = `none`;
    document.getElementById(`q4`).style.display = `flex`;
};
function q5() {
    document.getElementById(`q4`).style.display = `none`;
    document.getElementById(`q5`).style.display = `flex`;
};
// Declared Functions

document.getElementById(`startButton`).onclick = start;

document.getElementById(`c1`).onclick = q2;
document.getElementById(`i11`).onclick = q2;
document.getElementById(`i12`).onclick = q2;
document.getElementById(`i13`).onclick = q2;

document.getElementById(`c2`).onclick = q3;
document.getElementById(`i21`).onclick = q3;
document.getElementById(`i22`).onclick = q3;
document.getElementById(`i23`).onclick = q3;

document.getElementById(`c3`).onclick = q4;
document.getElementById(`i31`).onclick = q4;
document.getElementById(`i32`).onclick = q4;
document.getElementById(`i33`).onclick = q4;

document.getElementById(`c4`).onclick = q5;
document.getElementById(`i41`).onclick = q5;
document.getElementById(`i42`).onclick = q5;
document.getElementById(`i43`).onclick = q5;