
var questions= [
    {
        text:'Question 1',
        choices:[
            'A','B','C','D'  
        ],
        answer:'A'
    },
    {
        text:'Question 2',
        choices:[
            'A','B','C','D'  
        ],
        answer:'A'
    },    
    {
        text:'Question 3',
        choices:[
            'A','B','C','D'  
        ],
        answer:'A'
    },    
    {
        text:'Question 4',
        choices:[
            'A','B','C','D'  
        ],
        answer:'A'
    },    
    {
        text:'Question 5',
        choices:[
            'A','B','C','D'  
        ],
        answer:'A'
    },
]
var Q= 0;
var score = 0;
var highScores=JSON.parse(localStorage.getItem('highScore'))||[];
var time = 60;
var timeInterval;
var initials= document.getElementById('initials')
var formEl= document.querySelector('form');
var timerEl= document.querySelector('.timer');
var startEl= document.getElementById('start');
var quizEl= document.getElementById('quiz');
var endEl= document.querySelector('p');
var saveBtn=document.getElementById('savebtn');
//add start button title screen
var startBtn= document.querySelector('.startBtn');
//when start button is clicked we bring up the first question and answers
function clockTick(){
    time--;
    timerEl.textContent=time;
}

function startGame(){
    startEl.style.visibility='hidden';
    quizEl.removeAttribute('class');
    timeInterval=setInterval(clockTick, 1000);
    askQuestion();
}

function askQuestion(){
    var currentQuestion= questions[Q];
    document.querySelector('.text').textContent=currentQuestion.text;
    var choicesBox= document.querySelector('.choiceBox');
    choicesBox.innerHTML = "";
    currentQuestion.choices.forEach( function(choice) {
        var btn= document.createElement('button');
        btn.textContent=choice;
        btn.setAttribute('value', choice);
        btn.onclick=function(){
            console.log(this.value);
            if (this.value===currentQuestion.answer){
                score++;
            }
            else {
                time -=10;
            }
            Q++;
            if(Q===questions.length){
                endGame();
            } else {
                askQuestion();  
            }
        }

        choicesBox.append(btn);
    })
}

function endGame(){
        //hide screen
        quizEl.style.visibility='hidden';
        //reveal end screen 
        endEl.style.visibility='visible';
        // get initials
        formEl.style.display='block';
       //stop clock fn
        clearTimeout(timeInterval);
        //show score
        //ask to play again

}

function saveHighScore (event) {
    event.preventDefault();
    var finalScore= score*time;
    var initials= document.getElementById('initials').value;
    var scoreObj= {initials, finalScore};
    console.log (scoreObj);
    if(time>=0){
    highScores.push(scoreObj);
    localStorage.setItem('highScores', JSON.stringify(highScores));
    document.getElementById('final').textContent=`
    Congratulations on completing the test, please enter your initials to record your entry!

    This is your score: ${scoreObj}
    `;
     } else (err) => console.log(err);
    
}

//USER INTERACTIONS
saveBtn.addEventListener('click', saveHighScore);
startBtn.addEventListener('click', startGame);
//when answer choice is made by user we check for right or wrong and bring up second question

//when out of questions or time we end quiz
