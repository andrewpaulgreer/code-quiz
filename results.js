// var displayScore = document.querySelector("#score-display")
var displayScore = document.querySelector("#score-list");

// assigning  my array of objects  to a variable to manipulate on this page
var lastUser = JSON.parse(localStorage.getItem("userArr"));
// setting a renderScores function to then turn my inputs into list items
function renderScores() {
  // Clear todoList element and update todoCountSpan
  displayScore.textContent = lastUser.length;
  console.log(lastUser)
  // Render a new li for each todo
  for (var i = 0; i < lastUser.length; i++) {
    var display = 'Intials: '+ lastUser[i].intials + " score: "+  lastUser[i].score;

    var li = document.createElement("li");
    li.textContent = display;
    li.setAttribute("data-index", i);
    displayScore.appendChild(li);
  }
}
console.log(lastUser);
renderScores();
// linking my submitbutton
var initBtn = function () {};

document.addEventListener("DOMContentLoaded", function () {
  initBtn();
});

initBtn();
