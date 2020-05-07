var highScore= document.getElementById("high-scores");
var timerEl= document.getElementById("timer");
var startPage= document.getElementById("quiz-start-page");
var startButton= document.getElementById("start-button");
var quizContainer= document.getElementById("question-container");
var quizQuestion= document.getElementById("question-text");
var answer1= document.getElementById("a");
var answer2= document.getElementById("b");
var answer3= document.getElementById("c");
var answer4= document.getElementById("d");
var quickResultEl= document.getElementById("quick-result");;
var scoreResult= document.getElementById("your-score");
var initialInput= document.querySelector("#inputInitials");
var resultEntryPage= document.getElementById("quiz-result-entry-page")
var submitButton = document.getElementById("submit-button");



// Timer at the top
var secondsLeft = 75;

var intId = setInterval(counter, 1000);

function counter(value) {
--secondsLeft === value;
    timerEl.textContent = "Timer: " + secondsLeft;
    if(secondsLeft === 0) {
        clearInterval(intId);
        resultEntryPage.style.display = "block";
        quizContainer.style.display = "none";
      }
      if(secondsLeft < 20){
        timerEl.style.color="red";
      }
      scoreResult.textContent = "Your score is: " + secondsLeft; 
}

// Questions  made into an object, since they are easier to work with than arrays, and there are more online refrences for this method. 

var questions = [
    {
        quizQuestion: "What is my worst Injury?", // questions at the top
        answer1: "a) stubbing my toe",
        answer2: "b) breaking my wrist",
        answer3: "c) breaking my back",
        answer4: "d) peeling a hangnail",
        correctAnswer: "c"
         // showing 3 since this will be the correct answer choice, i declared the choices in the HTML under my funciton.

    },
    {
        quizQuestion: "What is my favorite Musical Perfromer ?",
        answer1: "a) Nirvana",
        answer2: "b) Arctic Monkeys",
        answer3: "c) Atlas Road Crew",
        answer4: "d) Rolling Stones",
        correctAnswer: "b"
        
    },
    {
        quizQuestion: "What is my favorite Alcoholic Beverage ?",
        answer1: "a) Beer",
        answer2: "b) Margarita",
        answer3: "c) Gin and Tonic",
        answer4: "d) Moscow Mule",
        correctAnswer: "d"
        
    },
    {
        quizQuestion: "What is my Favoite Resteraunt ?",
        answer1: "a) Artisinal",
        answer2: "b) Bojangles",
        answer3: "c) Sup Dog's",
        answer4: "d) McDonald's",
        correctAnswer: "a"
        
    },
    {
        quizQuestion: "Which extreme sport is my favorite ?",
        answer1: "a) Ziplining",
        answer2: "b) Snowboarding",
        answer3: "c) Downhill Chesse Rolling",
        answer4: "d) Skateboarding",
        correctAnswer: "b"
        
    },
];

var questionsLen = questions.length -1;
var questionArr = 0;


function assignQuiz () {
    var questionAssign = questions[questionArr];
    quizQuestion.textContent = questionAssign.quizQuestion;
    answer1.textContent = questionAssign.answer1;
    answer2.textContent = questionAssign.answer2;
    answer3.textContent = questionAssign.answer3;
    answer4.textContent = questionAssign.answer4;
}
startButton.addEventListener("click", startBtnFunc);
assignQuiz();


// giving my start button functionality
function startBtnFunc(){
startPage.style.display = "none";
quizContainer.style.display = "block"; // showing the main quiz page
}



// checking answers/ giving the correct/ incorrect funcitonality
// assignened this fucntion to my onclick in my html since my query selector was acting up here(looked for alternatives for the method i used and found this)
// each button is assinged to the function in the HTML: onclick= "answerFunc('a')
function answerFunc(marryPoppins){
    if (marryPoppins === questions[questionArr].correctAnswer){
        quickResultEl.style.display = "block"; // shows the correct answer at the bottom of screen 
        quickResultEl.textContent = "Correct";
        quickResultEl.style.backgroundColor = "green";
        quickResultEl.style.color = "white";
    }
     if (marryPoppins !== questions[questionArr].correctAnswer){
        secondsLeft -= 10;
        quickResultEl.style.display = "block";
        quickResultEl.textContent = "Incorrect";
        quickResultEl.style.backgroundColor = "red";
        quickResultEl.style.color = "white";
     } 
     if (questionArr < questionsLen){
         questionArr++;
         assignQuiz();
     } else {
        quizContainer.style.display = "none";
        resultEntryPage.style.display = "block";
        clearInterval(intId);
     }
    } 
    // JSON.parse(localStorage.getItem('userArr')) 
    //here is the funcitonality to enter my 
    function saveInitials() {
        var userArr = JSON.parse(localStorage.getItem("userArr")) || []; //get userArr fromlocal storage, if it's null or otherwise not there, set to a []
        var inputText = initialInput.value.trim();
        console.log("inputText: " + inputText)
        if (inputText && inputText !== "") {
            // create object, push into array, then store in local storage
            var inputObj = { score: inputText };
            userArr.push(inputObj);
            localStorage.setItem("userArr", JSON.stringify(userArr));
            JSON.stringify(inputObj); // trying to get my JSON object to a string
        }
    }

 // using local storage to link my submit button between JS pages, this will lead my js page to the results.js

    var initBtn = function(){ // adding a function onto my submit button
        var submitButton = document.querySelector("#submit-button");
        submitButton.addEventListener("click", function(e){
            event.preventDefault(e);
        
            saveInitials();
           window.document.location = './results.html';
        });
    };

    document.addEventListener('DOMContentLoaded', function(){
    initBtn();});


