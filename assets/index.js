// Global varriables
var currentScore = 0;
// Created Functions

// Start functions
function startQuestion() {
    document.getElementById(`startContain`).style.display = `none`;
    document.getElementById(`q1`).style.display = `flex`;
};
function startScore() {
    document.getElementById(`playerScore`).innerHTML = `Your Score: ${currentScore}`;
};
function start() {
    startQuestion();
    startScore();
}
// Question functions
function correct() {
    currentScore =+ 5;
    startScore();
};
function q2() {
    document.getElementById(`q1`).style.display = `none`;
    document.getElementById(`q2`).style.display = `flex`;
};
function q2C() {
    q2();
    correct();
}

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
function q6() {
    document.getElementById(`q5`).style.display = `none`;
    document.getElementById(`q6`).style.display = `flex`;
};
function q7() {
    document.getElementById(`q6`).style.display = `none`;
    document.getElementById(`q7`).style.display = `flex`;
};
function q8() {
    document.getElementById(`q7`).style.display = `none`;
    document.getElementById(`q8`).style.display = `flex`;
};
function q9() {
    document.getElementById(`q8`).style.display = `none`;
    document.getElementById(`q9`).style.display = `flex`;
};
function q10() {
    document.getElementById(`q9`).style.display = `none`;
    document.getElementById(`q10`).style.display = `flex`;
};
function end() {
    document.getElementById(`q10`).style.display = `none`;
    document.getElementById(`startContain`).style.display = `flex`;
};
// Declared Functions

document.getElementById(`startButton`).onclick = start;

document.getElementById(`c1`).onclick = q2C;
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

document.getElementById(`c5`).onclick = q6;
document.getElementById(`i51`).onclick = q6;
document.getElementById(`i52`).onclick = q6;
document.getElementById(`i53`).onclick = q6;

document.getElementById(`c6`).onclick = q7;
document.getElementById(`i61`).onclick = q7;
document.getElementById(`i62`).onclick = q7;
document.getElementById(`i63`).onclick = q7;

document.getElementById(`c7`).onclick = q8;
document.getElementById(`i71`).onclick = q8;
document.getElementById(`i72`).onclick = q8;
document.getElementById(`i73`).onclick = q8;

document.getElementById(`c8`).onclick = q9;
document.getElementById(`i81`).onclick = q9;
document.getElementById(`i82`).onclick = q9;
document.getElementById(`i83`).onclick = q9;

document.getElementById(`c9`).onclick = q10;
document.getElementById(`i91`).onclick = q10;
document.getElementById(`i92`).onclick = q10;
document.getElementById(`i93`).onclick = q10;

document.getElementById(`c10`).onclick = end;
document.getElementById(`i101`).onclick = end;
document.getElementById(`i102`).onclick = end;
document.getElementById(`i103`).onclick = end;