// You'll create a trivia game that shows only one question until the player answers it or their time runs out.
// If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.
// The scenario is similar for wrong answers and time-outs.
// If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
// If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.
// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).


var questions = [{
        "question": "Which cartoon character says What's up, Doc?",
        "answers": ["Roger Rabbit", "Bugs Bunny", "Mickey Mouse", "Flounder"],
        "correctAnswer" : "Bugs Bunny",
        "correctVisual": "http://media1.giphy.com/media/l46CimW38a7TFxLVe/giphy.gif",
        "wrongVisual": "http://media4.giphy.com/media/pTU2mNuUjXxWo/giphy.gif",
        "intervalCorrect": "3",
        "intervalWrong": "5"
    },

    {
        "question": "Who had a 60s No 1 with It's Now Or Never?",
        "answers": ["The Beatles", "The Byrds", "Chuck Berry", "Elvis Presley"],
        "correctAnswer": "Elvis Presley",
        "correctVisual": "http://media1.giphy.com/media/l46CimW38a7TFxLVe/giphy.gif",
        "wrongVisual": "http://media2.giphy.com/media/TjpmXdglzXLt6/giphy.gif",
        "intervalCorrect": "3",
        "intervalWrong": "5"
    },

    {
        "question": "The deepwater port of Gdansk was developed in which country?",
        "answers": ["Iceland", "Sweden", "Greenland", "Poland"],
        "correctAnswer": "Poland",
        "correctVisual": "http://media1.giphy.com/media/l46CimW38a7TFxLVe/giphy.gif",
        "wrongVisual": "http://media2.giphy.com/media/l2JhyONP77ULVGjAs/giphy.gif",
        "intervalCorrect": "3",
        "intervalWrong": "5"
    },

    {
        "question": "Who was born first?",
        "answers": ["Arnold Schwarzenegger", "John Travolta", "Sylvester Stallone", "Denzel Washington"],
        "correctAnswer": "Sylvester Stallone",
        "correctVisual": "http://media1.giphy.com/media/l46CimW38a7TFxLVe/giphy.gif",
        "wrongVisual": "http://media0.giphy.com/media/xUPGceCHrPMjN9IB6E/giphy.gif",
        "intervalCorrect": "3",
        "intervalWrong": "5"
    },

    {
        "question": "Who had 60s No 1s with Mr. Tambourine Man and Turn Turn Turn?",
        "answers": ["The Mommas and the Papas", "The Beatles", "The Byrds", "Elvis Presley"],
        "correctAnswer": "The Byrds",
        "correctVisual": "http://media1.giphy.com/media/l46CimW38a7TFxLVe/giphy.gif",
        "wrongVisual": "http://web.lyon.edu/users/kadler/public_html/rmcguinn/brdslogo.gif",
        "intervalCorrect": "3",
        "intervalWrong": "5"
    },

    {
        "question": "Archbishop Makarios was president of which Mediterranean island?",
        "answers": ["Santorini", "Capri", "Cyprus", "Ithaca"],
        "correctAnswer": "Cyprus",
        "correctVisual": "http://media1.giphy.com/media/l46CimW38a7TFxLVe/giphy.gif",
        "wrongVisual": "http://news.bbc.co.uk/olmedia/50000/images/_53823_cap300cyprus.gif",
        "intervalCorrect": "3",
        "intervalWrong": "5"
    },

    {
        "question": "Who took the Miami Vice Theme to No 1 in the charts?",
        "answers": ["Jan Hammer", "Michael Mann", "Don Johnson", "Philip Michael Thomas"],
        "correctAnswer": "Jan Hammer",
        "correctVisual": "http://media1.giphy.com/media/l46CimW38a7TFxLVe/giphy.gif",
        "wrongVisual": "https://media0.giphy.com/media/HdoFUvjCu0py0/giphy.gif",
        "intervalCorrect": "3",
        "intervalWrong": "5"
    },

    {
        "question": "Which US state, which joined the Union in 1912, has New and the name of a country in its name?",
        "answers": ["Texas", "New Mexico", "Arizona", "California"],
        "correctAnswer": "New Mexico",
        "correctVisual": "http://media1.giphy.com/media/l46CimW38a7TFxLVe/giphy.gif",
        "wrongVisual": "https://upload.wikimedia.org/wikipedia/commons/8/85/Animated-Flag-New_Mexico.gif",
        "intervalCorrect": "3",
        "intervalWrong": "5"
    },

    {
        "question": "Which state is called the silver state?",
        "answers": ["Nevada", "California", "Arizona", "Oregon"],
        "correctAnswer": "Nevada",
        "correctVisual": "http://media1.giphy.com/media/l46CimW38a7TFxLVe/giphy.gif",
        "wrongVisual": "https://media2.giphy.com/media/ShZ1AHZ1AKyt2/giphy.gif",
        "intervalCorrect": "3",
        "intervalWrong": "5"
    },

    {
        "question": "What did Tony Bennett leave in San Francisco?",
        "answers": ["His Wife", "His Daugther", "His Heart", "His Wallet"],
        "correctAnswer": "His Heart",
        "correctVisual": "http://media1.giphy.com/media/l46CimW38a7TFxLVe/giphy.gif",
        "wrongVisual": "https://media.giphy.com/media/HGaPrt9MjoXZu/giphy.gif",
        "intervalCorrect": "3",
        "intervalWrong": "5"
    }
    
];

var inputAnswer = "";
var correct = 0;
var wrong = 0;
var timeup = 0;
var notice = "";
var qIdx = 0;
var aIdx = 0;
var gameTimer = 30;
var indQuestion = "";
var indAnswers = [];
var indCorrect = "";
var indCorrectVis = "";
var indWrongVis = ""
var indVis = ""
var indCorrectInterval = 0;
var indWrongInterval = 0;
var indInterval = 0;
var prevAnswerClass = "";
var answerDiv = [".answer1", ".answer2", ".answer3", ".answer4"];
var timeLeft;
var checkAnswerWait;
var gameTimerRunning;

$(document).ready(function() {
    $(".startButton").on("click", function() {
        $(".img-container").empty();
        $(".start-container").empty();

function run() {
    if (qIdx <10) {
    timeLeft = setInterval(decrement, 1000);
    } else {
        console.log("countdown: game over");
    }
}

function decrement() {
    gameTimer--;
    $(".timer").text(gameTimer);
    if (gameTimer === 0) {
      //reset();
      checkAnswer();
    }
}

function stop() {
    clearInterval(timeLeft);
}

function reset() {
    gameTimer = 30;
}

               
function initiate() {
    reset();
    indQuestion = "";
    indAnswers = [];
    indCorrect = "";
    indCorrectVis = "";
    indWrongVis = ""
    indCorrectInterval = 0;
    indWrongInterval = 0;
    qIdx = 0;
    $(".question-container").empty();
    // $(".img-container").append('"<img class="'+'gen-image'+'" src="https://pixy.org/images/placeholder.png" height="300px" width="600px">');
    $(".img-container").append('<center><img class="triv-image" src="http://schmoesknow.com/wp-content/uploads/2016/07/We-Want-You.png" height="300px" width="600px"></center">');
    $(".start-container").append('<button class="resetButton">Restart</button>');
    $(".resetButton").on("click", function() {
        console.log("RESET GAME");
        correct = 0;
        wrong = 0;
        timeup = 0;
        $(".img-container").empty();
        $(".start-container").empty();
        $(".answer").remove();
        run();
        gotoQuestion();
        });
    $(".answers-container").append('<div class="answer answer1"></div>');
    $(".answers-container").append('<div class="answer answer2"></div>');
    $(".answers-container").append('<div class="answer answer3"></div>');
    $(".answers-container").append('<div class="answer answer4"></div>');
    //display stats

    stop();
    $(".answer1").text("# correct: " + correct);
    $(".answer2").text("# incorrect: " + wrong);
    $(".answer3").text("# unanswered: " + timeup);
    $(".answer4").text("% correct: " + (parseInt(correct)/questions.length) * 100 + '%')
}

function prepNext() {
    clearTimeout(checkAnswerWait);
    qIdx++
    if (qIdx === questions.length) {
        initiate();
    } else {
        gotoQuestion();
    }

}

function checkAnswer() {
    
        if (gameTimer > 0) {
            //stop(); //stop gameTimer
            if (inputAnswer === questions[qIdx].correctAnswer) {
                correct++;;
                indVis = indCorrectVis;
                indInterval = indCorrectInterval;
                notice = "Yes, " + questions[qIdx].correctAnswer + " is correct!"
                $(".timer").empty();
                $(".question-container").text(notice);
                $(".answer").remove();
                $(".question-container").append('<br><img src="' + indVis + '">');
            
                checkAnswerWait = setTimeout(prepNext, indCorrectInterval * 1000);
            } 
            else {
                wrong++;
                indVis = indWrongVis;
                indInterval = indWrongInterval;
                notice = "Sorry, the correct answer is " + questions[qIdx].correctAnswer
                $(".timer").empty();
                $(".question-container").text(notice);
                $(".answer").remove();
                $(".question-container").append('<br><img src="' + indVis + '">');
                checkAnswerWait = setTimeout(prepNext, indWrongInterval * 1000);
            }
        } 
        else {
            timeup++;
            notice = "Yikes, time is up. The correct answer is " + questions[qIdx].correctAnswer;
            $(".question-container").text(notice);
            $(".timer").empty();
            $(".question-container").text(notice);
                $(".answer").remove();
                $(".question-container").append('<br><img src="' + indVis + '">');
            checkAnswerWait = setTimeout(prepNext, indWrongInterval * 1000);
        }
        console.log("correct: " + correct);
        console.log("Wrong: " + wrong);
        console.log("Timeup: " + timeup);
    }
 
 function nextQuestion() {
        indQuestion = questions[qIdx].question;
        indAnswers = questions[qIdx].answers;
        indCorrect = questions[qIdx].correctAnswer;
        indCorrectVis = questions[qIdx].correctVisual;
        indWrongVis = questions[qIdx].wrongVisual;
        indCorrectInterval = questions[qIdx].intervalCorrect;
        indWrongInterval = questions[qIdx].intervalWrong;
}
    //Recurisve function
    function gotoQuestion() {
        if (qIdx <10) {
            var clicked = false;
            nextQuestion();
            reset();
            console.log("while" + qIdx);

            $(".question-container").text(indQuestion);

            //create answer sub-divs
            $(".question-container").append('<div class="timer"></div>');
            $(".timer").text(gameTimer);
            $(".answers-container").append('<div class="answer answer1"></div>');
            $(".answers-container").append('<div class="answer answer2"></div>');
            $(".answers-container").append('<div class="answer answer3"></div>');
            $(".answers-container").append('<div class="answer answer4"></div>');


            var newAnswerId = indAnswers[0].replace(" ", "-");
            $(".answer1").attr("id", newAnswerId);
            $(".answer1").text(indAnswers[0]);

            var newAnswerId = indAnswers[1].replace(" ", "-");
            $(".answer2").attr("id", newAnswerId);
            $(".answer2").text(indAnswers[1]);

            var newAnswerId = indAnswers[2].replace(" ", "-");
            $(".answer3").attr("id", newAnswerId);
            $(".answer3").text(indAnswers[2]);

            var newAnswerId = indAnswers[3].replace(" ", "-");
            $(".answer4").attr("id", newAnswerId);
            $(".answer4").text(indAnswers[3]);


            $(".answer").on("click", function() {

            reset();
                inputAnswer = this.id.replace("-", " ");
                console.log(inputAnswer);
                checkAnswer();
                $(".timer").remove();
                
            });
        }
        else{
            //Break statement, if qIdx is !<10
            console.log("DONE")
        }
}
    run(); //start timer after start button is clicked
    
    gotoQuestion();

    }); //start button




});