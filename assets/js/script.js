// Questions array of objects, containing question, choices and a correct answer

let questions = [
  {
    title: "What is JavaScript?",
    choices: ["Game", "Programming Language", "Software", "Chrome Extension"],
    correctAnswer: "Programming Language",
  },

  {
    title: "Which data type is not supported by JavaScript?",
    choices: ["Undefined", "Boolean", "Date", "Object"],
    correctAnswer: "Date",
  },

  {
    title:
      "Which of the following keywords is used to define a varible in JavaScript",
    choices: ["let", "const", "Both", "None of the above"],
    correctAnswer: "Both",
  },

  {
    title: "What does NaN stand for in JavaScript?",
    choices: ["Nandos", "Not A Number", "Grandma", "It does not exist"],
    correctAnswer: "Not A Number",
  },

  {
    title:
      "How can you convert the string of any base to integer in JavaScript?",
    choices: ["forEach()", "parseInt()", "splice()", "push()"],
    correctAnswer: "parseInt()",
  },

  {
    title:
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
    choices: [
      "document.write()",
      "console.log()",
      "window.alert()",
      "All of the above",
    ],
    correctAnswer: "All of the above",
  },

  {
    title:
      "Which function is used to serialize an object into JSON string in JavaScript",
    choices: ["parse()", "stringify()", "convert()", "None of the above"],
    correctAnswer: "stringify()",
  },

  {
    title: "Which of the following is not a JavaScript framework",
    choices: ["Node", "Vue", "React", "Cassandra"],
    correctAnswer: "Cassandra",
  },

  {
    title: "Why did JavaScript developer go broke?",
    choices: [
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
let questionTitleEl = document.querySelector("#question-title");
let choicesEl = document.querySelector("#choices");
let submitBtn = document.querySelector("#submit");
let initialsEl = document.querySelector("#initials");
let feedbackEl = document.querySelector("#feedback");

// Quiz state variables
let currentQuestionIndex = 0;
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

// let currentQuestion = questions[currentQuestionIndex];
// console.log(currentQuestion.title);

// Create a function to get the questions
function displayQuestion() {
  // Get current question object from an array
  let currentQuestion = questions[currentQuestionIndex];

  // Update question title with the current question
  questionTitleEl.textContent = currentQuestion.title;

  // Clear any older question choices
  choicesEl.innerHTML = "";

  // Loop over choices
  currentQuestion.choices.forEach((choice, i) => {
    // Create a button for each choice
    let choiceButton = document.createElement("button");
    choiceButton.setAttribute("class", "choice");
    choiceButton.setAttribute("value", choice);

    // Set the text content of a button element
    choiceButton.textContent = i + 1 + ". " + choice;

    // Attach click event listener to each choice
    choiceButton.onclick = clickQuestionChoice;

    // When the answer button is clicked, next question displays
    //appendChild
    choicesEl.appendChild(choiceButton);
  });
}

// Function to click question choice for each question
function clickQuestionChoice() {
  // If the user guessed correctly
  let correctAnswer = questions[i].correctAnswer;
  if (choiceButton === correctAnswer) {
    // Display feedback - correct
    feedbackEl.textContent = "Correct!";
    feedbackEl.setAttribute("style", "color: green; fontSize: 3rem");
  } else {
    // Display feedback - wrong
    feedbackEl.textContent = "Wrong!";
    feedbackEl.setAttribute("style", "color: red; fontSize: 3rem");
    // Decrement 15 secs from the clock
    time -= 15;

    if (time < 0) {
      time = 0;
    }
    // Display new time on the page
    timerEl.textContent = time;

    // move onto the next question
    currentQuestionIndex++;
    // check time
    // if last question quiz end
    if (currentQuestion === questions.length) {
      endQuiz(); // need to create this function
    } else {
      displayQuestion();
    }
  }

  // when there is no more questions
  // display highscores and textarea to input initials
  // i need calculate highscores function
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
function endQuiz() {}

// Function to display highscores
function getHighscores() {}

// if the answer is incorrect, 10secs subtracted from the timer
// quiz ends if time === 0 || all the questions are answered
// when the game ends, score is displayed
// user can save their initials and their score

// Add event listeners to relevant elements
startBtn.addEventListener("click", startQuiz);
