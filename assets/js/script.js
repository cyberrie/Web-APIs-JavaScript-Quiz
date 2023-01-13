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
    choices: [
      "getElementById()",
      "getElementsByClassName()",
      "Both",
      "None of the above",
    ],
    correctAnswer: "Both",
  },

  {
    title:
      "Which of the following methods can be used to display data in some form using JavaScript?",
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
      "Which function is used to serialize an object into JSON string in JavaScript?",
    choices: ["parse()", "stringify()", "convert()", "None of the above"],
    correctAnswer: "stringify()",
  },

  {
    title: "Which of the following is not a JavaScript framework?",
    choices: ["Node", "Vue", "React", "Cassandra"],
    correctAnswer: "Cassandra",
  },

  {
    title: "Why did JavaScript developer go broke?",
    choices: [
      "Null",
      "404 Not Found",
      "He used parseInt() instead of parseFloat() when calculating his finances",
      "False",
    ],
    correctAnswer:
      "He used parseInt() instead of parseFloat() when calculating his finances",
  },
];

// DOM elements
let startScreenEl = document.querySelector("#start-screen");
let scoresEl = document.querySelector("#choices");
let timerEl = document.querySelector("#time");
let startBtn = document.querySelector("#start");
let questionsEl = document.querySelector("#questions");
let questionTitleEl = document.querySelector("#question-title");
let choicesEl = document.querySelector("#choices");
let submitBtn = document.querySelector("#submit");
let initialsEl = document.querySelector("#initials");
let feedbackEl = document.querySelector("#feedback");
let endScreenEl = document.querySelector("#end-screen");
let finalScoreEl = document.querySelector("#final-score");

// Quiz state variables
let currentQuestionIndex = 0;
// Total time given = 15 secs per question, i.e. 100 Q = 150 secs
let time = questions.length * 10;
// For clearance of the interval
let timerId;

// Create a function that will start the Quiz
function startQuiz() {
  // Hide start screen
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

// Add event listeners to start button
startBtn.addEventListener("click", startQuiz);

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
    choiceButton.onclick = questionChoiceClick;

    // When the answer button is clicked, next question displays
    //appendChild
    choicesEl.appendChild(choiceButton);
  });
}

// Function to click question choice for each question
function questionChoiceClick() {
  // Check if the user guessed wrong
  if (this.value !== questions[currentQuestionIndex].correctAnswer) {
    // Decrement 10 secs from the clock
    time -= 10;
    if (time < 0) {
      time = 0;
    }

    // Display new time on the page
    timerEl.textContent = time;
    // Display feedback - wrong
    feedbackEl.textContent = "Incorrect!";
    feedbackEl.style.color = "red";
    feedbackEl.style.fontSize = "50px";
  } else {
    // Display feedback - correct
    feedbackEl.textContent = "Correct!";
    feedbackEl.style.color = "green";
    feedbackEl.style.fontSize = "50px";
  }

  // Display wrong/correct feedback
  feedbackEl.setAttribute("class", "feedback");
  setInterval(function () {
    feedbackEl.setAttribute("class", "hide");
  }, 1000);
  // move onto the next question
  currentQuestionIndex++;

  // check time
  // if last question quiz end
  if (currentQuestionIndex === questions.length) {
    endQuiz();
  } else {
    displayQuestion();
  }
}

// Timer Function
function clockTick() {
  // Update time
  time--;
  // Display the time
  timerEl.textContent = time;

  // Check if user ran out of time
  if (time <= 0) {
    endQuiz();
  }
}

// Function to end the quiz
function endQuiz() {
  // Stop timer
  clearInterval(timerId);

  // Show end screen
  endScreenEl.removeAttribute("class");
  // Final score
  finalScoreEl.textContent = time;

  // Hide the questions div
  questionsEl.setAttribute("class", "hide");
}

// Function to store highscores
function storeHighscores() {
  // Empty the input
  // Get value of input box
  let initials = initialsEl.value;

  // Get saved scores from local storage or if not, set to an empty array
  if (initialsEl !== "") {
    let highscores = JSON.parse(localStorage.getItem("highscores")) || [];

    // New score format
    let newScore = {
      score: time,
      initials: initials,
    };

    // Push new values and save to local storage
    highscores.push(newScore);
    localStorage.setItem("highscores", JSON.stringify(highscores));

    // Redirect to new page
    // as soon as page redirects, this function stops executing, so we need to create a new .js file
    location.href = "highscores.html";
  }
}

// Add event listener to submit button
submitBtn.addEventListener("click", storeHighscores);

// if the answer is incorrect, 10secs subtracted from the timer
// quiz ends if time === 0 || all the questions are answered
// when the game ends, score is displayed
// user can save their initials and their score
