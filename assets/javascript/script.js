// Initialize variables
var timeLeft = 30; // Set the initial time left
var elem = document.getElementById('timer'); // Get the timer element from the HTML
var scoreElement = document.querySelector("#score"); // Get the score element from the HTML
var yourScore = 0; // Initialize the user's score
var timerId; // Initialize a timer ID
var index = 0; // Initialize an index for the current question
var containerElement = document.querySelector("#container"); // Get the container element from the HTML
var questionElement = document.querySelector("#questions"); // Get the question element from the HTML
var responseElement = document.querySelector("#responses"); // Get the responses element from the HTML
var initialsEl = document.querySelector('#initials'); // Get the initials input element from the HTML
var startButton = document.querySelector('#startButton'); // Get the start button element from the HTML
var answerList = document.querySelector('#responses'); // Get the answer list element from the HTML
var title = document.querySelector("#title"); // Get the title element from the HTML
var isQuizOver = false; // Initialize a flag to track whether the quiz is over
var finalScore = document.querySelector("#quizEnd"); // Get the final score element from the HTML

var submit = document.querySelector('#submit'); // Get the submit button element from the HTML

// Event listener for the "Start" button click
startButton.addEventListener('click', function () {
    title.style.display = 'none'; // Hide the title
    startButton.style.display = 'none'; // Hide the start button
    answerList.style.display = ''; // Display the answer list
    startCountdown(); // Start the countdown timer
    renderQuestion(); // Render the current question
    renderAnswers(); // Render the answer choices
});

// Event listener for clicking on an answer choice
answerList.addEventListener('click', function (event) {
    var selectedAnswer = event.target.textContent; // Get the selected answer text
    var correctAnswerIndex = questions[index].answer; // Get the index of the correct answer for the current question

    if (selectedAnswer === questions[index].responses[correctAnswerIndex]) {
        yourScore = yourScore + 25; // Increase the score if the selected answer is correct
    } else {
        timeLeft -= 10; // Deduct time if the selected answer is incorrect
    }

    navigate(1); // Move to the next question
    if (index < questions.length) {
        renderQuestion(); // Render the next question
        renderAnswers(); // Render the answer choices for the next question
    } else {
        endQuiz(); // End the quiz if all questions have been answered
    }
});

// Function to start the countdown timer
function startCountdown() {
    elem.innerHTML = "Time: " + timeLeft;
    timerId = setInterval(countdown, 1000);
}

// Function to update the countdown timer
function countdown() {
    if (timeLeft <= 0 || isQuizOver) {
        clearInterval(timerId); // Clear the timer interval if time is up or the quiz is over
        endQuiz(); // End the quiz
    } else {
        elem.innerHTML = "Time: " + timeLeft;
        timeLeft--;
    }
}

// Array of quiz questions
var questions = [
    { question: "What is a function?", responses: ["Reusable code", "Primitive value", "None of the above"], answer: 0 },
    { question: "What is an array?", responses: ["List of values", "Key value pairs", "None of the above"], answer: 2 },
    { question: "What is a primitive value?", responses: ["123", "1234", "None of the above"], answer: 2 },
    { question: "What is the abbreviation JSON?", responses: ["JASON", "Javascript notation object", "None of the above"], answer: 1 },
];

// Function to navigate to the next or previous question
function navigate(direction) {
    index = index + direction;
    if (index < 0) {
        index = questions.length - 1;
    } else if (index >= questions.length) { }
}

// Function to render the current question
function renderQuestion() {
    questionElement.textContent = questions[index].question;
}

// Function to render the answer choices for the current question
function renderAnswers() {
    answerList.innerHTML = "";
    for (var i = 0; i < questions[index].responses.length; i++) {
        var li = document.createElement("li");
        li.textContent = questions[index].responses[i];
        answerList.appendChild(li);
    }
}

// Function to end the quiz
function endQuiz() {
    finalScore.style.display = "flex"; // Display the final score element
    questionElement.style.display = 'none'; // Hide the question element
    answerList.style.display = 'none'; // Hide the answer list
    isQuizOver = true; // Set the quiz over flag to true
    scoreElement.textContent = yourScore; // Display the user's final score
}

// Event listener for the "Submit" button click
submit.addEventListener("click", saveScore);

// Function to save the user's score and initials
function saveScore() {
    var initials = initialsEl.value.trim();

    localStorage.setItem("initials", initials); // Store the user's initials in local storage
    localStorage.setItem("score", yourScore); // Store the user's score in local storage
}