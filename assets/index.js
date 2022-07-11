// Global varriables
var currentScore = 0;
var time = 60;
var timer = null;

// Created Functions

// Functions for high score list
function scoreButton() {
    document.getElementById(`highScores`).style.display = `flex`;
};
function scoreHide() {
    document.getElementById(`highScores`).style.display = `none`;
};

// Functions for timer
function timeStart() {
    time = 60;
    timer = setInterval(function(){
        document.getElementById(`timer`).innerHTML = `Seconds remaining: ${time}`;
        time--;
        if (time < .5) {
            timesUp();
        }
    }, 1000);
};
function timesUp() {
    time = 0;
    q2();
    q3();
    q4();
    q5();
    q6();
    q7();
    q8();
    q9();
    q10();
    end();
}
// Functions for score
function startScore() {
    document.getElementById(`playerScore`).innerHTML = `Your Score: ${currentScore}`;
};

// Functions for question display
function startQuestion() {
    document.getElementById(`startContain`).style.display = `none`;
    document.getElementById(`q1`).style.display = `flex`;
    currentScore = 0;
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
// Function for start of evaluation
function start() {
    timeStart();
    startQuestion();
    startScore();
}

// Functions for correct responses
function correct() {
    currentScore += 5;
    startScore();
    document.getElementById(`correctAlert`).style.display = `flex`;
    document.getElementById(`incorrectAlert`).style.display = `none`;
};
function q2C() {
    q2();
    correct();
};
function q3C() {
    q3();
    correct();
};
function q4C() {
    q4();
    correct();
};
function q5C() {
    q5();
    correct();
};
function q6C() {
    q6();
    correct();
};
function q7C() {
    q7();
    correct();
};
function q8C() {
    q8();
    correct();
};
function q9C() {
    q9();
    correct();
};
function q10C() {
    q10();
    correct();
};
function endC() {
    correct();
    end();
};

// Functions for incorrect responses
function incorrect() {
    time -= 10;
    if (time < 0) {
        time = 0;
    };
    document.getElementById(`incorrectAlert`).style.display = `flex`;
    document.getElementById(`correctAlert`).style.display = `none`;
};
function q2I() {
    q2();
    incorrect();
};
function q3I() {
    q3();
    incorrect();
};
function q4I() {
    q4();
    incorrect();
};
function q5I() {
    q5();
    incorrect();
};
function q6I() {
    q6();
    incorrect();
};
function q7I() {
    q7();
    incorrect();
};
function q8I() {
    q8();
    incorrect();
};
function q9I() {
    q9();
    incorrect();
};
function q10I() {
    q10();
    incorrect();
};
function endI() {
    incorrect();
    end();
};

// Function for ending evaluation and recording name and score
function end() {
    document.getElementById(`correctAlert`).style.display = `none`;
    document.getElementById(`incorrectAlert`).style.display = `none`;
    clearInterval(timer);
    currentScore += time;
    var name = prompt(`Please enter your name:`);
    var list = document.createElement(`li`);
    list.innerHTML = `${name} - ${currentScore}`;
    document.getElementById(`playerList`).appendChild(list);
    document.getElementById(`q10`).style.display = `none`;
    document.getElementById(`startContain`).style.display = `flex`;
    scoreButton();
    startScore();
    document.getElementById(`timer`).innerHTML = `Seconds remaining: ${time}`;
};


// Declared Functions
// Functions for score list
document.getElementById(`scoreButton`).onclick = scoreButton;
document.getElementById(`scoreHide`).onclick = scoreHide;

// Function to start evaluation
document.getElementById(`startButton`).onclick = start;

// Functions for each question and response
// Question 1
document.getElementById(`c1`).onclick = q2C;
document.getElementById(`i11`).onclick = q2I;
document.getElementById(`i12`).onclick = q2I;
document.getElementById(`i13`).onclick = q2I;

// Question 2
document.getElementById(`c2`).onclick = q3C;
document.getElementById(`i21`).onclick = q3I;
document.getElementById(`i22`).onclick = q3I;
document.getElementById(`i23`).onclick = q3I;

// Question 3
document.getElementById(`c3`).onclick = q4C;
document.getElementById(`i31`).onclick = q4I;
document.getElementById(`i32`).onclick = q4I;
document.getElementById(`i33`).onclick = q4I;

// Question 4
document.getElementById(`c4`).onclick = q5C;
document.getElementById(`i41`).onclick = q5I;
document.getElementById(`i42`).onclick = q5I;
document.getElementById(`i43`).onclick = q5I;

// Question 5
document.getElementById(`c5`).onclick = q6C;
document.getElementById(`i51`).onclick = q6I;
document.getElementById(`i52`).onclick = q6I;
document.getElementById(`i53`).onclick = q6I;

// Question 6
document.getElementById(`c6`).onclick = q7C;
document.getElementById(`i61`).onclick = q7I;
document.getElementById(`i62`).onclick = q7I;
document.getElementById(`i63`).onclick = q7I;

// Question 7
document.getElementById(`c7`).onclick = q8C;
document.getElementById(`i71`).onclick = q8I;
document.getElementById(`i72`).onclick = q8I;
document.getElementById(`i73`).onclick = q8I;

// Question 8
document.getElementById(`c8`).onclick = q9C;
document.getElementById(`i81`).onclick = q9I;
document.getElementById(`i82`).onclick = q9I;
document.getElementById(`i83`).onclick = q9I;

// Question 9
document.getElementById(`c9`).onclick = q10C;
document.getElementById(`i91`).onclick = q10I;
document.getElementById(`i92`).onclick = q10I;
document.getElementById(`i93`).onclick = q10I;

// Question 10
document.getElementById(`c10`).onclick = endC;
document.getElementById(`i101`).onclick = endI;
document.getElementById(`i102`).onclick = endI;
document.getElementById(`i103`).onclick = endI;