let highscores = JSON.parse(localStorage.getItem("highscores")) || [];

// Append highscores to the new page
let highscoresList = document.getElementById("highscores");
for (let i = 0; i < highscores.length; i++) {
  let newScore = document.createElement("li");
  newScore.innerHTML = `${highscores[i].initials} - ${highscores[i].score}`;
  highscoresList.appendChild(newScore);
}

// Clear the localStorage
function clearStorage() {
  localStorage.clear();
  highscoresList.innerHTML = "";
}
// Add event listener to Clear Highscores buttons
let clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", clearStorage);
