// var timeLeft = 75;
// var elem = document.getElementById('timer');
// var timerId;

// var startButton = document.getElementById('startButton');

// startButton.addEventListener('click', startCountdown);

// function startCountdown() {
//     clearInterval(timerId);
    
//     elem.innerHTML = "Time: " + timeLeft;
    
//     timerId = setInterval(countdown, 1000);
// }

// function countdown() {
//     if (timeLeft === 0) {
//         clearInterval(timerId);
//         doSomething();
//     } else {
//         elem.innerHTML = "Time: " + timeLeft;
//         timeLeft--;
//     }
// }

// function doSomething() {
// }

var timeLeft = 75;
var elem = document.getElementById('timer');
var timerId;

var startButton = document.getElementById('startButton');

startButton.addEventListener('click', startCountdown);

function startCountdown() {
    clearInterval(timerId);
    elem.innerHTML = "Time: " + timeLeft;
    timerId = setInterval(countdown, 1000);
}

function countdown() {
    if (timeLeft == 0) {
        clearTimeout(timerId);
        doSomething();
    } else {
        elem.innerHTML = "Time: " + timeLeft;
        timeLeft--;
    }
};

function doSomething() {
    // Your code to handle the end of the countdown
};