let paper = document.getElementById("paperBack");
paper.style.display = 'none';

let winnerHtml = document.getElementById("winner");
winnerHtml.style.display = 'none';

let questions = [
    {
        question: 'O Estádio do Morumbi pertence a qual time abaixo?',
        answer: './images/sp.png',
        option: './images/corinthians.png',
        option2: './images/palmeirass.png',
        
    },
    {
        question: 'Qual desses times abaixo é considerado com a maior torcida do brasil?',
        answer: './images/Flamengo-RJ_(BRA).png',
        option: './images/sp.png',
        option2: './images/corinthians.png',
       
    },
    {
        question: 'Qual deles Atualmente é o time mais rico do brasil?',
        answer: './images/Flamengo-RJ_(BRA).png',
        option: './images/palmeirass.png',
        option2: './images/gremio.png',
       
    },
    {
        question: 'Qual desses times abaixo é considerado como "Time do Povo"?',
        answer: './images/corinthians.png',
        option: './images/Santos.png',
        option2: './images/ECBahia.png',
    },
    {
        question: 'Qual desses times abaixo é do estado de São Paulo ?',
        answer: './images/Santos.png',
        option: './images/Flamengo-RJ_(BRA).png',
        option2: './images/Atletico_mineiro_galo.png',
    },
    {
        question: 'Qual desses times abaixo é do estado do Rio de Janeiro ?',
        answer: './images/FluminenseFCBA.png',
        option: './images/Santos.png',
        option2: './images/inter.png',
    },
    {
        question: 'Qual clube que teve o maior número de jogadores Campeões Mundiais?',
        answer: './images/Santos.png',
        option: './images/Atletico_mineiro_galo.png',
        option2: './images/corinthians.png',
    },
    {
        question: 'Qual desses times a baixo foi campeão invicto da Libertadores?',
        answer: './images/corinthians.png',
        option: './images/Santos.png',
        option2: './images/inter.png',
    },
    {
        question: 'Qual Foi o Primeiro Clube a Jogar a Taça Libertadores ?',
        answer: './images/ECBahia.png',
        option: './images/gremio.png',
        option2: './images/FluminenseFCBA.png',
    },
    {
        question: 'Qual desses times abaixo participa do Campeonato Mineiro ?',
        answer: './images/Atletico_mineiro_galo.png',
        option: './images/corinthians.png',
        option2: './images/gremio.png',
    },
    {
        question: 'Qual desses times abaixo é chamado de São Paulo?',
        answer: './images/sp.png',
        option: './images/gremio.png',
        option2: './images/Santos.png',
    },
    {
        question: 'Qual desses times abaixo é chamado de Santos?',
        answer: './images/Santos.png',
        option: './images/sp.png',
        option2: './images/Atletico_mineiro_galo.png',
    },
    {
        question: 'Qual desses times abaixo é chamado de Palmeiras ?',
        answer: './images/palmeirass.png',
        option: './images/gremio.png',
        option2: './images/ECBahia.png',
    },
    {
        question: 'Qual desses Times abaixo é chamado de Atlético Mineiro?',
        answer: './images/Atletico_mineiro_galo.png',
        option: './images/Santos.png',
        option2: './images/ECBahia.png',
    },
    {
        question: 'Qual desses times abaixo é chamado de Bahia ?',
        answer: './images/ECBahia.png',
        option: './images/inter.png',
        option2: './images/corinthians.png',
    },
    {
        question: 'Qual desses times abaixo é chamado de Gremio?',
        answer: './images/gremio.png',
        option: './images/sp.png',
        option2: './images/Santos.png',
    },
    {
        question: 'Qual desses times abaixo é chamado de Fluminense?',
        answer: './images/FluminenseFCBA.png',
        option: './images/sp.png',
        option2: './images/Flamengo-RJ_(BRA).png',
    },
    {
        question: 'Qual desses times abaixo é chamado de Internacional?',
        answer: './images/inter.png',
        option: './images/Atletico_mineiro_galo.png',
        option2: './images/Flamengo-RJ_(BRA).png',
    },

];

let fund = document.querySelector('#sound');
let playPauseBNT = document.querySelector('#playPauseBNT');
let audio = document.querySelector('#audio');
let audioLose = document.querySelector('#audioLose');
let audioWin = document.querySelector('#audioWin');
let count = 0;

document.getElementById('startButton').addEventListener('click', function () {

    clear();
    startQuestion();
    pushQuestions();
    audio.play()

});

document.getElementById('')

function playPause(){
    if(count === 0){
        count = 1;
        audio.play();
        fund.innerHTML = `<img id="playPauseBNT" onclick="playPause()" src="images/mute.png" alt="">`
        
    }else{
        count = 0;
        audio.pause()
        fund.innerHTML = `<img id="playPauseBNT" onclick="playPause()" src="images/soundd.png" alt="">`
    }
}


function clear() {

    document.getElementById("startGame2").style.display = 'none';

};


function startQuestion() {
    
    paper.style.display = 'block';
       
};


let questionNumber = 0;
let pergunta = questions[questionNumber].question;
let option = questions[questionNumber].option;
let option2 = questions[questionNumber].option2;
let resposta = questions[questionNumber].answer;
let help = questions[questionNumber].help;
let respostasAleatorias = [];
let correctAnswers = 0;
let wrongQuestions = 0;
let porcentagem = 0;


function getRandomAnswer() {

    let options = [option, option2, resposta]
    let opcao = Math.floor(Math.random() * 3)
    return options[opcao]

}


function checkUniqueAnswer() {
    let answer = getRandomAnswer()
    if (respostasAleatorias.indexOf(answer) === -1) {
        respostasAleatorias.push(answer)
    }
}


function threeRandomAnswer() {


    while (respostasAleatorias.length !== 3) {
        checkUniqueAnswer()
    }

}


function pushQuestions() {
    respostasAleatorias = [];
    threeRandomAnswer();
    

    document.querySelector('#paperBack ul').innerHTML = ''
    document.querySelector('#paperBack h1').innerHTML = `${pergunta}`;

    for(let i = 0;i < respostasAleatorias.length; i+= 1){
        
        
        let id = "error";
        if(resposta === respostasAleatorias[i]){
            id = "resposta"
        }
        if(option2 === respostasAleatorias[i]){
            id = "error1"
        }
        document.querySelector('#paperBack ul').innerHTML += `<li id = ${id}><img src= ${respostasAleatorias[i]}></li>`
       
    }

    document.querySelector("#resposta").addEventListener('click', function () {
        correctAnswers += 1;
        console.log(correctAnswers)
        nextQuestion();

    })
    document.querySelector("#error").addEventListener('click', function () {
        wrongQuestions += 1;
        nextQuestion();
        
    })
    document.querySelector("#error1").addEventListener('click', function () {
        wrongQuestions += 1;
        nextQuestion();
        
    })
};


function nextQuestion() {

    
    questionNumber += 1;

    if (questionNumber === 10) {

        winner()
    }

    pergunta = questions[questionNumber].question
    resposta = questions[questionNumber].answer;
    option = questions[questionNumber].option;
    option2 = questions[questionNumber].option2;
    help = questions[questionNumber].help;
    pushQuestions()
 
}


function winner() {

    winnerHtml.style.display = 'block';
    document.querySelector('#clearWinner').innerHTML = '';
    checkWinner()
    
}


function checkWinner() {
    porcentagem = correctAnswers * 10

    if (correctAnswers >= 6) {
        audio.pause();
        audioWin.play
        ();
        document.querySelector('#winner h1').innerHTML = `Parabéns Você Ganhou!`
        document.querySelector('#winner h3').innerHTML = `${porcentagem}%`
        document.querySelector('#p1').innerHTML = `Você Acertou ${correctAnswers} Perguntas!`
        document.querySelector('#p2').innerHTML = `Você Errou ${wrongQuestions} Perguntas!`
    }
    else if (correctAnswers < 6) {
        audio.pause();
        audioLose.play();
        document.querySelector('#winner h1').innerHTML = `Infelizmente Não Foi Desta Vez!`
        document.querySelector('#winner h3').innerHTML = `${porcentagem}%`
        document.querySelector('#p1').innerHTML = `Você Acertou ${correctAnswers} Perguntas!`
        document.querySelector('#p2').innerHTML = `Você Errou ${wrongQuestions} Perguntas!`
    }
}
