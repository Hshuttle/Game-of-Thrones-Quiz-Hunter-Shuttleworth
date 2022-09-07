// Setting all my variables
var startBtn = document.querySelector(".startBtn");
var highscoreBtn = document.querySelector(".highscoreBtn");
var questionbox = document.querySelector(".questionbox");
var questionsample = document.querySelector(".questionsample");
var timeLeft = 60;
i = 0;

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
  var question1 = questions[i];
  var title = question1.question;
  var choices = question1.answers;
  questionsample.textContent = title;
  i++;
  timer();
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
