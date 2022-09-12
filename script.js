// Setting all my variables
var startBtn = document.querySelector(".startBtn");
var highscoreBtn = document.querySelector(".highscoreBtn");
var questionBox = document.querySelector(".questionbox");
var questionSample = document.querySelector(".questionsample");
var timeLeft = 60;
var questionIndex = 0;

var questions = [
  {
    question: "Who is the youngest Stark Child?",
    answers: ["Robb Stark", "Arya Stark", "Bran Stark", "Rickon Stark"],
    rightAns: "Rickon Stark",
  },
  {
    question: "Why was the Red Wedding called the Red Wedding?",
    answers: [
      "They had red velvet cake served",
      "Everyone died and there was lot of blood",
      "Red was the main theme color for the wedding",
      "Both the bride and groom had red hair",
    ],
    rightAns: "Everyone died and there was lot of blood",
  },
  {
    question: "What titles did Daenerys Targaryen hold?",
    answers: [
      "Breaker of Chains",
      "Mother of Dragons",
      "Khaleesi of the Great Grass Sea",
      "All of the above",
    ],
    rightAns: "All of the above",
  },
  {
    question: "What was the sigil of house Lannister?",
    answers: ["A boar", "A dragon", "A cute little puppy", "A lion"],
    rightAns: "A lion",
  },
  {
    question: "What were House Tyrell’s words?",
    answers: [
      "Family, Duty, Honor",
      "Every Rose Has Its Thorns",
      "Growing Strong",
      "High Tea Is For Me #OlennaGang",
    ],
    rightAns: "Growing Strong",
  },
];

timeEl = document.querySelector(".timer");

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  renderQ();
  timer();
}

function renderQ() {
  questionSample.textContent = questions[questionIndex].question;
  for (i = 0; i < questions[questionIndex].answers.length; i++) {
    var ansChoice = document.createElement("button");
    ansChoice.textContent = questions[questionIndex].answers[i];
    ansChoice.addEventListener("click", function () {
      if (this.textContent === questions[questionIndex].rightAns) {
        console.log("You got it right!");
      } else {
        console.log("SHAME!");
      }
      questionIndex++;
      questionBox.innerHTML = "";
      renderQ();
    });
    questionBox.appendChild(ansChoice);
  }
}

function timer() {
  var timerInterval = setInterval(function () {
    timeEl.textContent = timeLeft + " second(s) remaining";
    timeLeft--;
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      timeEl.textContent = "";
    }
  }, 1000);
}
