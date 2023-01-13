function printHighscores() {
  let highscores = JSON.parse(localStorage.getItem("highscores")) || [];

  // Sort highscores by score property in descending order
  highscores.sort(function (a, b) {
    return b.score - a.score;
  });

  // Append highscores to the new page
  let highscoresList = document.getElementById("highscores");
  for (let i = 0; i < highscores.length; i++) {
    let newScore = document.createElement("li");
    newScore.innerHTML = `${highscores[i].initials} - ${highscores[i].score}`;
    highscoresList.appendChild(newScore);
  }
}

// Run the function when the page loads
printHighscores();

// Clear the localStorage
function clearStorage() {
  localStorage.clear();
  highscoresList.innerHTML = "";
}
// Add event listener to Clear Highscores buttons
let clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", clearStorage);
