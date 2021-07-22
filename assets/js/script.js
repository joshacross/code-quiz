// quizQuestion = question

// inputs = choices

// Declarations
// var startQuiz = document.getElementById('startQuiz');
var quizSection = document.getElementById('quizSection');
var scoreBoard = document.getElementById('scoreBoard');
var currentScore = document.getElementById('currentScore');
var quizQuestion = document.getElementById('quizQuestion');
var choices = document.getElementById('choices');
var solution = document.getElementById('solution');
var viewHighScores = document.getElementById('viewHighScores');
var successMessage = document.getElementById('successMessage');
var displayHighScores = document.getElementById('displayHighScores');
var highScoreName = document.getElementById('highScoreName');
var highScorePoints = document.getElementById('highScorePoints');
var yourHighScore = document.getElementById('yourHighScore');
var nameInput = document.getElementById('nameInput');
var hideItems = document.getElementById('hideItems');
// var quizSection = document.getElementById('quizSection').style.display ="none";


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
        question: "What does HTML stand for?",
        choices: [
            "Hyper-Text Markup Language",
            "Hex-Tex-Mex-Lex",
            "Hilbert Taylor's Micro Language",
            "Hyper-Text Market Language"
        ],
        answer: "Hyper-Text Markup Language"
    },
    {
        question: "Which of the following is not an HTML tag?",
        choices: [
            "Doctype",
            "Paragraph",
            "Table",
            "Style"
        ],
        answer: "Style"
    },
    {
        question: "What symbol indicates a tag?",
        choices: [
            "Angled brackets (<>)",
            "Cureved brackets ({})",
            "Comma (,)",
            "Exclamation Mark:  (!)"
        ],
        answer: "Angled brackets (<>)"
    },
    {
        question: "Which of these is a genuine tag keyword",
        choices: [
            "Header",
            "Bold",
            "Body",
            "Image"
        ],
        answer: "Body"
    },
    {
        question: "(T/F) A CSS file can be applied to only one HTML file",
        choices: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        question: "What is the corect tag for a line break in HTML",
        choices: [
            "<brk />",
            "<line />",
            "<bk />",
            "<br />"
        ],
        answer: "<br />"
    },
    {
        question: "What does CSS stand for?",
        choices: [
            "Computing Style Sheet",
            "Creative Style System",
            "Cascading Style Sheet",
            "Creative Styling Sheet"
        ],
        answer: "Cascading Style Sheet"
    },
    {
        question: "Where should a CSS file be referenced in a HTML file?",
        choices: [
            "Before any HTML code",
            "After all HTML code",
            "Inside the head section",
            "Inside the body section"
        ],
        answer: "Inside the head section"
    },
    {
        question: "What is the correct format for aligning written content to the center of the page in CSS?",
        choices: [
            "Text-align: center",
            "Font-align: center",
            "Text: align-center",
            "Font: align-center"
        ],
        answer: "Text-align: center"
    },
    {
        question: "What is the correct format for a Div?",
        choices: [
            "Div",
            "<Div>",
            "<Div />",
            "<Div></Div>"
        ],
        answer: "<Div></Div>"
    },
]

var currentQuestion = {};

var startQuiz = function() {
    var currentQuestionIndex = 0;
    youHighScore = 0;


    
    // // Initialize countdown timer
    timerValue = setInterval(clock, 1000);
    timeEl.textContent = time;

    showQuestion();
    //Populate first question

    // Function to populate questions from our question array.
    function showQuestion() {

        // Find question from array of questions
        var currentQuestion = questions[currentQuestionIndex];
        // Fill in question and answer choices
        var titleEl = quizQuestion;
        titleEl.textContent = currentQuestion.question;
        choices.innerHTML = "";
        // Run through questions
        currentQuestion.choices.forEach(function(choice, i) {
            var choiceNode = document.createElement("button");
            choiceNode.setAttribute("class", "choice-btn");
            choiceNode.setAttribute("value", choice);
            choiceNode.textContent = i + 1 + ". " + choice;
            // Make new choice buttons click listenter
            choiceNode.onclick = clickChoiceButton;
            // Append choice so it displays on page
            choices.appendChild(choiceNode);
        });
    }

        function clock() {
        // Countdown clock
        time--;
        timerValue.textContent = time;
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
            timerValue.textContent = time;

            // Notify quiz taker if they answered right or wrong
            solution.textContent = "Woops! That is incorrect :("
            } else {
            solution.textContent = "Correct! Great job!";
            }
            solution.setAttribute("class", "solution");

            setTimeout(function() {
                solution.setAttribute("class", "solution hide");
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
        clearInterval(timerValue);
        // hide question container
        questionContainerEl.setAttribute("class", "hide");
        // show end quiz container
        endQuizContainerEl.setAttribute("class", "show");
        // users score equals time remaining
        scoreEl.textContent = time;
    }
}



document.getElementById('startQuiz').addEventListener('click', startQuiz());