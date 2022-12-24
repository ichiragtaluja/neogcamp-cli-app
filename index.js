var readlineSync = require("readline-sync")

var userName = readlineSync.question("What is your name? ")

console.log("Welcome to the quizz, " + userName, "!")
console.log("________________________________")
console.log("This Quiz is about Geography")

console.log("________________________________")


var score = 0

questions = [{
  
  question: "Tokyo is the capital of which country? ",
  answer: "Japan"
}, {
  
  question: "Eiffel Tower is in which country? ",
  answer: "France"
  }, {
  
  question: "Flag of Canada has how many colors? (Enter a digit) ",
  answer: "2" 
},{
  
  question: "Which is the largest country in the world? ",
  answer: "Russia"}, {
  
  question: "Mount everest is on the border of Nepal and ?? ",
  answer: "Tibet"}]

function checkAnswer (question, answer) {
  userAnswer = readlineSync.question(question)

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    score = score + 1
    console.log("Correct Answer")
    
  } else {
    console.log("Incorrect answer")
  }
  console.log("Your score is ", score)
  console.log("-------------------------")
}


function playGame () {
  for (i = 0; i < questions.length; i ++) {
    checkAnswer(questions[i].question, questions[i].answer)
  } 

  console.log("Your final score is ", score)

}



playGame();
