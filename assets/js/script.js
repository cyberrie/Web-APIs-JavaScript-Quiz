// create questions object, containing all the questions, answer choices and correct answer

let questions = [
  { question1: "", answers: ["ex1", "ex2", "ex3", "ex4"], correctAnswer: 3 },

  { question2: "", answers: ["ex1", "ex2", "ex3", "ex4"], correctAnswer: 2 },

  { question2: "", answers: ["ex1", "ex2", "ex3", "ex4"], correctAnswer: 2 },

  { question2: "", answers: ["ex1", "ex2", "ex3", "ex4"], correctAnswer: 2 },

  { question2: "", answers: ["ex1", "ex2", "ex3", "ex4"], correctAnswer: 2 },

  { question2: "", answers: ["ex1", "ex2", "ex3", "ex4"], correctAnswer: 2 },

  { question2: "", answers: ["ex1", "ex2", "ex3", "ex4"], correctAnswer: 2 },

  { question2: "", answers: ["ex1", "ex2", "ex3", "ex4"], correctAnswer: 2 },
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
