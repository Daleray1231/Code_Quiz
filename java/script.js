var timeLeft = 75;
var elem = document.getElementById('timer');
var timerId;

var startButton = document.getElementById('startButton') ;

startButton.addEventListener('click', startCountdown);

function startCountdown() {
    clearInterval(timerId);
    elem.innerHTML = "Time: " + timeLeft;
    timerId = setInterval(countdown, 1000);
}

function countdown() {
    if (timeLeft == 0) {
        clearTimeout(timerId);
        endTimer();
    } else {
        elem.innerHTML = "Time: " + timeLeft;
        timeLeft--;
    }
};

function endTimer() {
    // Your code to handle the end of the countdown

};


// QUESTIONS (Shitty Youtube Example, uses window prompts)
// var score = 0;
// var questions = [
    
//     {
//         promt:"First Question?\n(A) answer \n(B) answer \n(C) answer \n(D) answer",
//         answer: "A"
//     },
//     {
//         promt:"Second Question?\n(A) answer \n(B) answer \n(C) answer \n(D) answer",
//         answer: "A"
//     },
//     {
//         promt:"Third Question?\n(A) answer \n(B) answer \n(C) answer \n(D) answer",
//         answer: "A"
//     },
//     {
//         promt:"Fourth Question?\n(A) answer \n(B) answer \n(C) answer \n(D) answer",
//         answer: "A"
//     },
//     {
//         promt:"Fifth Question?\n(A) answer \n(B) answer \n(C) answer \n(D) answer",
//         answer: "A"
//     },
//     {
//         promt:"Sixth Question?\n(A) answer \n(B) answer \n(C) answer \n(D) answer",
//         answer: "A"
//     },
//     {
//         promt:"Seventh Question?\n(A) answer \n(B) answer \n(C) answer \n(D) answer",
//         answer: "A"
//     },
//     {
//         promt:"Eighth Question?\n(A) answer \n(B) answer \n(C) answer \n(D) answer",
//         answer: "A"
//     },
//     {
//         promt:"Ninth Question?\n(A) answer \n(B) answer \n(C) answer \n(D) answer",
//         answer: "A"
//     },
//     {
//         promt:"Tenth Question?\n(A) answer \n(B) answer \n(C) answer \n(D) answer",
//         answer: "A"
//     }
// ];

// for (var i=0; i < questions.length; i++){
//     var response = window.prompt(questions[i].prompt);
//     if(response == questions[i].answer){
//         score++;
//         alert("Correct!");
//     } else {
//         alert("WRONG!");
//         // MINUS 10 SECONDS
//     }
//     alert("You got " + score + "/" + questions.length);
// };