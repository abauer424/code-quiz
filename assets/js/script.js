//variables defined
var timerEl = document.querySelector('.timer');
var startQuizBtn = document.querySelector('.start');
var timeLeft = 75;
var questionsBox = document.getElementById("questions");
var startQuizEl = document.getElementById("intro");
var index=0

//when I click the “start quiz” a timer starts
startQuizBtn.addEventListener("click", function () {
startQuiz()
  console.log("start game");
});

//when the timer starts I am presented with a question
function startQuiz() { 
  if (startQuizEl.style.display === "none") {
    startQuizEl.style.display = "block";
  } else {
    startQuizEl.style.display = "none";
  }
  questionsBox.style.display = "block";

  //setInterval method to call function to be executed every 1000 miliseconds
var timeInterval = setInterval(function () {
  // As long as the `timeLeft` is greater than 1
  timeLeft--;
  timerEl.textContent = timeLeft;
  if(timeLeft <= 0) {
    timeLeft = 0
    timerEl.textContent = 0
  } 
  if(timeLeft === -1) { 

  }
  // console.log(timeLeft)
} ,1000);
buildCard()
}

function buildCard () {
  var questionText = document.createElement("h2")
  questionText.textContent = question[index].title
  questionsBox.appendChild(questionText)
  question[index].choices.forEach(function(choice){
  var choiceBtn = document.createElement("button")
  choiceBtn.textContent = choice
  choiceBtn.setAttribute("value", choice)
  choiceBtn.onclick = evaluateAnswer;
  questionsBox.appendChild(choiceBtn)
  
  })
}

function evaluateAnswer() {
 if(this.value !== question[index].solution) {
   console.log("wrong")
 } else {
   console.log("right")
 }
//increase the index of the question 
//call buildQuestion
}

//questions
var question = [
  { //question1
    title: "what type of datatype is true or false?",
    choices: ["strings", "alerts", "numbers", "boolean"],
    solution: "boolean"
  },
  {//question2
    title: "what allows you to exit a for loop?",
    choices: ["break", "array", "null", "all the above"],
    solution: "break"
  },

  {//question3
    title: "What is the name of this: i++ ?",
    choices: ["decrement", "for loop", "increment", "condition"],
    solution: "increment"
  },

  {//question4
    title: "What is an example of a datatype?",
    choices: ["null", "bigInt", "string", "all the above"],
    solution: "all the above"
  },

]
// //question1
// question[0].title
// question[0].choices[0] //strings
// question[0].choices[1] //alerts
// question[0].choices[2] //numbers
// question[0].choices[3] //boolean
// question[0].solution
// Collapse

// //question2
// question[1].title
// question[1].choices[0] //break
// question[1].choices[1] //array
// question[1].choices[2] //null
// question[1].choices[3] //all the above
// question[1].solution
// Collapse

// //question3
// question[2].title
// question[2].choices[0] //decrement 
// question[2].choices[1] //for loop
// question[2].choices[2] //increment
// question[2].choices[3] //condition
// question[2].solution
// Collapse


// //question4
// question[3].title
// question[3].choices[0] //null 
// question[3].choices[1] //bigInt
// question[3].choices[2] //string
// question[3].choices[3] //all the above
// question[3].solution
// Collapse


//when I answer with the question incorrectly, 15 seconds is deducted from the timer




//when all the questions are answered then the game is over




//when the timer reaches zero then the game is over




//I can save my score with my initials
