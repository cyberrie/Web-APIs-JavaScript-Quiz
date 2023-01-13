// create questions object, containing all the questions, answer choices and correct answer

let questions = [
  {
    question1: "What is JavaScript?",
    answers: ["Game", "Programming Language", "Software", "Chrome Extension"],
    correctAnswer: 1,
  },

  {
    question2: "Which data type is not supported by JavaScript?",
    answers: ["Undefined", "Boolean", "Date", "Object"],
    correctAnswer: 2,
  },
  {
    question3:
      "Which of the following keywords is used to define a varible in JavaScript",
    answers: ["let", "const", "Both", "None of the above"],
    correctAnswer: 2,
  },
  {
    question4: "What does NaN stand for in JavaScript?",
    answers: ["Nandos", "Not A Number", "Grandma", "It does not exist"],
    correctAnswer: 1,
  },

  {
    question5:
      "How can you convert the string of any base to integer in JavaScript?",
    answers: ["forEach()", "parseInt()", "splice()", "push()"],
    correctAnswer: 1,
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
    correctAnswer: 2,
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
    correctAnswer: 1,
  },

  {
    question9: "Which of the following is not a JavaScript framework",
    answers: ["Node", "Vue", "React", "Cassandra"],
    correctAnswer: 3,
  },

  {
    question10: "Why did JavaScript developer go broke?",
    answers: [
      "He did not handle money correctly",
      "He did not know what he was doing",
      "He used parseInt() instead of parseFloat() when calculating his finances",
      "Unsure",
    ],
    correctAnswer: 2,
  },
];

let currentQuestion = 0;

// store elements in variables
let start = document.querySelector("#start");
let qTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choices");
let submit = document.querySelector("#submit");

// click event on start quiz to start the quiz
start.addEventListener("click", function (event) {});

// on 1st click event I need to display the 1st question (hook into #questions) - I need to access the question in the object and display it
// every question contains buttons for each answer (hook into addEventListener #choices)
//use eventDelegation for questions to add 1 event listener
//otherwise need 4 for each answer (#choices)
// when the answer is clicked, next question appears
// if the answer is incorrect, 10secs subtracted from the timer
// quiz ends if time === 0 || all the questions are answered
// when the game ends, score is displayed
// user can save their initials and their score
