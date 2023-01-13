// Questions array of objects, containing question, choices and a correct answer

let questions = [
  {
    question1: "What is JavaScript?",
    answers: ["Game", "Programming Language", "Software", "Chrome Extension"],
    correctAnswer: "Programming Language",
  },

  {
    question2: "Which data type is not supported by JavaScript?",
    answers: ["Undefined", "Boolean", "Date", "Object"],
    correctAnswer: "Date",
  },
  {
    question3:
      "Which of the following keywords is used to define a varible in JavaScript",
    answers: ["let", "const", "Both", "None of the above"],
    correctAnswer: "Both",
  },
  {
    question4: "What does NaN stand for in JavaScript?",
    answers: ["Nandos", "Not A Number", "Grandma", "It does not exist"],
    correctAnswer: "Not A Number",
  },

  {
    question5:
      "How can you convert the string of any base to integer in JavaScript?",
    answers: ["forEach()", "parseInt()", "splice()", "push()"],
    correctAnswer: "parseInt()",
  },

  {
    question6:
      "Which of the following methods is used to access HTML elements using JavaScript?",
    answers: [
      "getElementById()",
      "getElementsByClassName()",
      "Both",
      "None of the above",
    ],
    correctAnswer: "Both",
  },

  {
    question7:
      "Which of the following methods can be used to display data in some form using JavaScript",
    answers: [
      "document.write()",
      "console.log()",
      "window.alert()",
      "All of the above",
    ],
    correctAnswer: 3,
  },

  {
    question8:
      "Which function is used to serialize an object into JSON string in JavaScript",
    answers: ["parse()", "stringify()", "convert()", "None of the above"],
    correctAnswer: "stringify()",
  },

  {
    question9: "Which of the following is not a JavaScript framework",
    answers: ["Node", "Vue", "React", "Cassandra"],
    correctAnswer: "Cassandra",
  },

  {
    question10: "Why did JavaScript developer go broke?",
    answers: [
      "He did not handle money correctly",
      "He did not know what he was doing",
      "He used parseInt() instead of parseFloat() when calculating his finances",
      "Unsure",
    ],
    correctAnswer:
      "He used parseInt() instead of parseFloat() when calculating his finances",
  },
];

// DOM elements
let scoresEl = document.querySelector("#choices");
let timerEl = document.querySelector("#time");
let startBtn = document.querySelector("#start");
let questionsEl = document.querySelector("#questions");
let choicesEl = document.querySelector("#choices");
let submitBtn = document.querySelector("#submit");
let initialsEl = document.querySelector("#initials");
let feedbackEl = document.querySelector("#feedback");

// Quiz state variables
let currentQuestion = 0;
let time = questions.length * 15;
let timerId;

// Create a function that will start the Quiz
function startQuiz() {
  // Hide start screen
  let startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");
  // Un-hide the first question
  questionsEl.removeAttribute("class");
  // Start Timer
  timerId = setInterval(clockTick, 1000);
  // Show starting time
  timerEl.textContent = time;
  // Display Question
  displayQuestion();
}

// Create a function to get the questions
function displayQuestion() {
  // display the current question (hook into #questions) - I need to access the question in the object and display it
  // every question contains buttons for each answer (hook into addEventListener #choices)
  //use eventDelegation for questions to add 1 event listener
  //otherwise need 4 for each answer (#choices)
  // when the answer is clicked, next question appears
}

// Timer Function
function clockTick() {
  // Update time
  time--;
  // Display the time
  timerEl.textContent = time;

  // Check if user ran out of time
  if (time <= 0) {
    quizEnd();
  }
}

// Function to end the quiz
function quizEnd() {}

// Function to display highscores
function getHighscores() {}

// if the answer is incorrect, 10secs subtracted from the timer
// quiz ends if time === 0 || all the questions are answered
// when the game ends, score is displayed
// user can save their initials and their score
