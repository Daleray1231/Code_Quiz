var timeLeft = 30;
var elem = document.getElementById('timer');
var scoreElement = document.querySelector("#score");
var yourScore = 0;
var timerId;
var index = 0;
var containerElement = document.querySelector("#container");
var questionElement = document.querySelector("#questions");
var responseElement = document.querySelector("#responses");
var initialsEl = document.querySelector('#initials');
var startButton = document.querySelector('#startButton');
var answerList = document.querySelector('#responses');
var title = document.querySelector("#title");
var isQuizOver = false;
var finalScore = document.querySelector("#quizEnd");


var submit = document.querySelector('#submit');


startButton.addEventListener('click', function () {
    title.style.display = 'none';
    startButton.style.display = 'none';
    answerList.style.display = '';
    startCountdown();
    renderQuestion();
    renderAnswers();
});

answerList.addEventListener('click', function (event) {
    var selectedAnswer = event.target.textContent;
    var correctAnswerIndex = questions[index].answer;

    if (selectedAnswer === questions[index].responses[correctAnswerIndex]) {
        yourScore = yourScore + 25;
    } else {
        timeLeft -= 10;
    }

    navigate(1);
    if (index < questions.length) {
        renderQuestion();
        renderAnswers();
    } else {
        endQuiz();
    }
});

function startCountdown() {
    elem.innerHTML = "Time: " + timeLeft;
    timerId = setInterval(countdown, 1000);
}

function countdown() {
    if (timeLeft <= 0 || isQuizOver) {
        clearInterval(timerId);
        endQuiz();
    } else {
        elem.innerHTML = "Time: " + timeLeft;
        timeLeft--;
    }
}

var questions = [
    { question: "What is a function?", responses: ["Reusable code", "Primitive value", "None of the above"], answer: 0 },
    { question: "What is an array?", responses: ["List of values", "Key value pairs", "None of the above"], answer: 2 },
    { question: "What is a primitive value?", responses: ["123", "1234", "None of the above"], answer: 2 },
    { question: "What is the abbreviation JSON?", responses: ["JASON", "Javascript notation object", "None of the above"], answer: 1 },
];

function navigate(direction) {
    index = index + direction;
    if (index < 0) {
        index = questions.length - 1;
    } else if (index >= questions.length) { }
}

function renderQuestion() {
    questionElement.textContent = questions[index].question;
}

function renderAnswers() {
    answerList.innerHTML = "";
    for (var i = 0; i < questions[index].responses.length; i++) {
        var li = document.createElement("li");
        li.textContent = questions[index].responses[i];
        answerList.appendChild(li);
    }
}

function endQuiz() {
    finalScore.style.display = "flex";
    questionElement.style.display = 'none';
    answerList.style.display = 'none';
    isQuizOver = true;
    scoreElement.textContent = yourScore;

}

submit.addEventListener("click", saveScore);

function saveScore() {
    var initials = initialsEl.value.trim();

    localStorage.setItem("initials", initials);
    localStorage.setItem("score", yourScore);
}