// make start button dissapear when it is clicked
var startBtn= document.getElementById('startBtn');
var quizContainer=document.getElementById('quiz');

//question bank
var questions= [
    {
        question1:"How old am i?",
        answers:{A:'25', 
                 B:'27', 
                 C:'28', 
                 D:'37'},
        correctAnswer: "A"   
    },
    {
        question1:"How old am i?",
        answers:{A:'25', 
                 B:'27', 
                 C:'28', 
                 D:'37'},
        correctAnswer: "A"   
    },
    {
        question1:"How old am i?",
        answers:{A:'25', 
                 B:'27', 
                 C:'28', 
                 D:'37'},
        correctAnswer: "A"   
    },
    {
        question1:"How old am i?",
        answers:{A:'25', 
                 B:'27', 
                 C:'28', 
                 D:'37'},
        correctAnswer: "A"   
    },  
];
console.log(questions);

//start the quiz
function startQuiz(){
    document.getElementById('startBtn').style.display='none';
    document.getElementById('qStart').style.visibility='visible';
    popQuest();
}
//function to import questions into HTML
// function popQuest (){
//     var showQuest= document.querySelector('.quiz').textContent.questions;
//     console.log(showQuest);
// }
function popQuest(){
    var ansBtn= document.createElement('button')
    ansBtn.innerHTML=questions.answers
}
//compare the answers to the correct answer

// if right or wrong either add/substract from score

//when questions are done or time is up test is over

//provide a graded score at the end

startBtn.addEventListener('click', startQuiz);