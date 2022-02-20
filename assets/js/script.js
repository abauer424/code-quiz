//variables defined
var timerEl = document.querySelector('.timer');
var startQuiz = document.querySelector('.start');


//timer function
function timer() {
    //if 'start quiz' button is clicked then the timer starts
  document.addEventListener("click", startQuiz);

  $(".start").click(function () {
    var timeLeft = 75;
    setInterval(function () {
      counter--;
      if (counter >= 0) {
        span = dcument.getElementById("time");
        span.innherHTML - timeLeft;
      }
      if (timeLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);
  });

  //setInterval method to call function to be executed every 1000 miliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft;
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);

 

}
// timer();



// if start quiz button is clicked, then hide coding quiz challenge & show the first question
function startQuiz() {
  var startQuiz = document.getElementById("intro");
  if (startQuiz.style.display === "none") {
    startQuiz.style.display = "block";
  } else {
    startQuiz.style.display = "none";
  }
  
}
startQuiz();

//questions
var question = [
  { //question1
    title: "what type of datatype is true or false?",
    choices: ["strings", "alerts", "numbers", "boolean"],
    solution: 3
  },
  {//question1
    title: "what allows you to exit a for loop?",
    choices: ["break", "array", "null", "all the above"],
    solution: 0
  },

  {//question3
    title: "What is the name of this: i++ ?",
    choices: ["decrement", "for loop", "increment", "condition"],
    solution: 2
  },

  {//question4
    title: "What is an example of a datatype?",
    choices: ["null", "bigInt", "string", "all the above"],
    solution: 3
  },

]
//question1 
question[0].title
question[0].choices[0] //strings
question[0].choices[1] //alerts
question[0].choices[2] //numbers
question[0].choices[3] //boolean
question[0].solution
Collapse

//question2
question[1].title
question[1].choices[0] //break
question[1].choices[1] //array
question[1].choices[2] //null
question[1].choices[3] //all the above
question[1].solution
Collapse

//question3
question[2].title
question[2].choices[0] //decrement 
question[2].choices[1] //for loop
question[2].choices[2] //increment
question[2].choices[3] //condition
question[2].solution
Collapse


//question4
question[3].title
question[3].choices[0] //null 
question[3].choices[1] //bigInt
question[3].choices[2] //string
question[3].choices[3] //all the above
question[3].solution
Collapse















//    const button = document.querySelector('button');

//    button.addEventListener('click', event => {
//      button.textContent = `Click count: ${event.detail}`;
//    });

//when start quiz button is clicked then the timer starts



