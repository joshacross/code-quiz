// quizQuestion = question

// inputs = choices

// Declarations
// var startQuiz = document.getElementById('startQuiz');
var quizSection = document.getElementById('quizSection');
var scoreBoard = document.getElementById('scoreBoard');
var currentScore = document.getElementById('currentScore');
var quizQuestion = document.getElementById('quizQuestion');
var choices = document.getElementById('choices');
var viewHighScores = document.getElementById('viewHighScores');
var successMessage = document.getElementById('successMessage');
var displayHighScores = document.getElementById('displayHighScores');
var highScoreName = document.getElementById('highScoreName');
var highScorePoints = document.getElementById('highScorePoints');
var yourHighScore = document.getElementById('yourHighScore');
var nameInput = document.getElementById('nameInput');
var hideItems = document.getElementById('hideItems');
var quizSection = document.getElementById('quizSection').style.display ="none";


hideElements = function() {
scoreBoard.setAttribute("hidden", true);
successMessage.setAttribute("hidden", true);
displayHighScores.setAttribute("hidden", true);
highScoreName.setAttribute("hidden", true);
yourHighScore.setAttribute("hidden", true);
highScorePoints.setAttribute("hidden", true);
};

hideElements();

var time = 30;
var timerValue = document.getElementById('timerValue');

var questions = [
    {
        question: "What is Your Name",
        choice1: jerry,
        choice2: Berry,
        choice3: Terry,
        choice4: Sam,
        answer: 1
    },
    {
        question: "What is Your Name",
        choice1: jerry,
        choice2: Berry,
        choice3: Terry,
        choice4: Sam,
        answer: 1
    },
    {
        question: "What is Your Name",
        choice1: jerry,
        choice2: Berry,
        choice3: Terry,
        choice4: Sam,
        answer: 1
    },
    {
        question: "What is Your Name",
        choice1: jerry,
        choice2: Berry,
        choice3: Terry,
        choice4: Sam,
        answer: 1
    },
    {
        question: "What is Your Name",
        choice1: jerry,
        choice2: Berry,
        choice3: Terry,
        choice4: Sam,
        answer: 1
    },
    {
        question: "What is Your Name",
        choice1: jerry,
        choice2: Berry,
        choice3: Terry,
        choice4: Sam,
        answer: 1
    },
    {
        question: "What is Your Name",
        choice1: jerry,
        choice2: Berry,
        choice3: Terry,
        choice4: Sam,
        answer: 1
    },
    {
        question: "What is Your Name",
        choice1: jerry,
        choice2: Berry,
        choice3: Terry,
        choice4: Sam,
        answer: 1
    },
    {
        question: "What is Your Name",
        choice1: jerry,
        choice2: Berry,
        choice3: Terry,
        choice4: Sam,
        answer: 1
    },
    {
        question: "What is Your Name",
        choice1: jerry,
        choice2: Berry,
        choice3: Terry,
        choice4: Sam,
        answer: 1
    }
]

var startQuiz = function() {
    var currentQuestionIndex = 0;
    youHighScore = 0;
    
    // Initialize countdown timer
    timerId = setInterval(clock, 1000);
    timeEl.textContent = time;

    showQuestion();
    //Populate first question

    // Function to populate questions from our question array.
    function showQuestion() {
        // Find question from array of questions
        var currentQuestion = questions[currentQuestionIndex];
        // Fill in question and answer choices
        var titleEl = document.getElementById("question-slot");
        titleEl.textContent = currentQuestion.question;
        choicesEl.innerHTML = "";
        // Run through questions
        currentQuestion.choices.forEach(function(choice, i) {
            var choiceNode = document.createElement("button");
            choiceNode.setAttribute("class", "choice-btn");
            choiceNode.setAttribute("value", choice);
            choiceNode.textContent = i + 1 + ". " + choice;
            // Make new choice buttons click listenter
            choiceNode.onclick = clickChoiceButton;
            // Append choice so it displays on page
            choicesEl.appendChild(choiceNode);
        });
    }

        function clock() {
        // Countdown clock
        time--;
        timeEl.textContent = time;
        // If user runs out of time before finishing quix, end quiz
        if (time <= 0) {
            quizEnd();
        }
    }

// Function to react to question choice being clicked. Depending on quiz status could move to next question or end quiz. Will also deduct time from timer if question is answered incorrectly.
    function clickChoiceButton() {
        // check to see if user answered question right or wrong
        if (this.value !== questions[currentQuestionIndex].answer) {
            time -= 10;

            if(time < 0) {
                time = 0;
            }
            timeEl.textContent = time;

            // Notify quiz taker if they answered right or wrong
            rightWrongEl.textContent = "Wrong"
            } else {
            rightWrongEl.textContent = "Correct! Good job!";
            }
            rightWrongEl.setAttribute("class", "right-wrong");

            setTimeout(function() {
                rightWrongEl.setAttribute("class", "right-wrong hide");
            }, 500);

            currentQuestionIndex++;

            if (currentQuestionIndex === questions.length) {
                quizEnd();
            } else {
                showQuestion ();
            }
    }

    // Function for when the quiz is finished
    function quizEnd() {
        // Stop timer
        clearInterval(timerId);
        // hide question container
        questionContainerEl.setAttribute("class", "hide");
        // show end quiz container
        endQuizContainerEl.setAttribute("class", "show");
        // users score equals time remaining
        scoreEl.textContent = time;
    }
}



document.getElementById('startQuiz').addEventListener('click', startQuiz());