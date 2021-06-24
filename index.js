let paper = document.getElementById("paperBack");
paper.style.display = 'none';



let questions =[
    {
        question:'Qual Time Brasileiro não tem mundial?',
        answer:`Palmeiras`,
        option:'Corinthias',
        option2:'São Paulo',   
    }
    // {
    //     question:'',
    //     answer:'',
    //     option:'',
    //     option2:'',
    // }
    // {
    //     question:'',
    //     answer:'',
    //     option:'',
    //     option2:'',
    // }
    // {
    //     question:'',
    //     answer:'',
    //     option:'',
    //     option2:'',
    // }
    // {
    //     question:'',
    //     answer:'',
    //     option:'',
    //     option2:'',
    // }
    // {
    //     question:'',
    //     answer:'',
    //     option:'',
    //     option2:'',
    // }
    // {
    //     question:'',
    //     answer:'',
    //     option:'',
    //     option2:'',
    // }
    // {
    //     question:'',
    //     answer:'',
    //     option:'',
    //     option2:'',
    // }
    // {
    //     question:'',
    //     answer:'',
    //     option:'',
    //     option2:'',
    // }
    // {
    //     question:'',
    //     answer:'',
    //     option:'',
    //     option2:'',
    // }
    // {
    //     question:'',
    //     answer:'',
    //     option:'',
    //     option2:'',
    // }
    // {
    //     question:'',
    //     answer:'',
    //     option:'',
    //     option2:'',
    // }
    // {
    //     question:'',
    //     answer:'',
    //     option:'',
    //     option2:'',
    // }
    // {
    //     question:'',
    //     answer:'',
    //     option:'',
    //     option2:'',
    // }
    // {
    //     question:'',
    //     answer:'',
    //     option:'',
    //     option2:'',
    // }
    
];


document.getElementById('startButton').addEventListener('click', function () {
    // console.log('oiii')
    clear();
    startQuestion();
    pushQuestions();
    
    
});

document.getElementById('')


function clear() {
    
    document.getElementById("startGame2").style.display = 'none';  
    
};




function startQuestion() {
    
    paper.style.display = 'block';
    
    
};

let pergunta = questions[0].question;
let option = questions[0].option;
let option2 = questions[0].option2;
let resposta = questions[0].answer;

function pushQuestions(){
    
    
    document.querySelector('#paperBack h1').innerHTML = `${pergunta}`;
    document.querySelector('#paperBack ul').innerHTML = `<li>${option}</li>`;
    document.querySelector('#paperBack ul').innerHTML += `<li>${option2}</li>`;
    document.querySelector('#paperBack ul').innerHTML += `<li>${resposta}</li>`;
};

let correctAnswers = 0;

function nextQuestion(){
    
}








