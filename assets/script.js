var questions= [
    {
        text:'Question 1',
        choices:[
            'A','B','C','D'  
        ],
        answer:'A'
    },
    {
        text:'Question 1',
        choices:[
            'A','B','C','D'  
        ],
        answer:'A'
    },    
    {
        text:'Question 1',
        choices:[
            'A','B','C','D'  
        ],
        answer:'A'
    },    
    {
        text:'Question 1',
        choices:[
            'A','B','C','D'  
        ],
        answer:'A'
    },    
    {
        text:'Question 1',
        choices:[
            'A','B','C','D'  
        ],
        answer:'A'
    },
]
var Q= 0;
console.log(questions)
var startEl= document.getElementById('start');
var quizEl= document.getElementById('quiz')
//add start button title screen
var startBtn= document.querySelector('.startBtn');
//when start button is clicked we bring up the first question and answers
function startGame(){
    startEl.setAttribute('class', 'hide')
    quizEl.removeAttribute('class')
    askQuestion();
}
function askQuestion(){
    var currentQuestion= questions[Q];
    document.querySelector('.text').textContent=currentQuestion.text;
    var choicesBox= document.querySelector('.choiceBox');
    currentQuestion.choices.forEach( function(choice) {
        var btn= document.createElement('button');
        btn.textContent=choice;
        btn.setAttribute('value', choice);
        btn.onclick=function(){
            console.log(this.value);
            if (this.value===currentQuestion.answer){
                console.log('right')
            }
        }
        choicesBox.append(btn);
    })
}
startBtn.addEventListener('click', startGame);
//when answer choice is made by user we check for right or wrong and bring up second question

//when out of questions or time we end quiz