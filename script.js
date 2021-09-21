const quizdata = [
    {
        question: 'Quien es el mas malo jugando TFT?',
        a: 'Calligo',
        b: 'Topa',
        c: 'Tati',
        d: 'Frighe',
        correct: 'b'
    }, {
        question: 'Quien fue el mejor delantero de Plomer?',
        a: 'Brian Romero',
        b: 'Tristerinho',
        c: 'Pechi',
        d: 'Batistuta',
        correct: 'b',
    }, {
        question: 'Quien es el que sabe mas de futbol argentino?',
        a: 'Calligo',
        b: 'Frighe',
        c: 'Topa',
        d: 'Laure',
        correct: 'a'
    }, {
        question: 'Quien se defenestra mas jugando CsGo?',
        a: 'Peke',
        b: 'Tati',
        c: 'Laure',
        d: 'Pedro',
        correct: 'b'
    }, {
        question: 'Cual fue el mejor jugador de plomer en primera?',
        a: 'Beto Fernandez',
        b: 'Rulito Perez',
        c: 'Lauty Garcia',
        d: 'Nicolas "Coco" Calligo',
        correct: 'd'
    },
];
const quiz = document.getElementById("quiz");
const answerels = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitbtn = document.getElementById("submit");


var currentQuiz = 0;

let score = 0;
loadQuiz();


function loadQuiz(){

    deselecanswers();

   const currentQuizData = quizdata[currentQuiz];
   questionEl.innerHTML=currentQuizData.question;

   a_text.innerText = currentQuizData.a;
   b_text.innerText = currentQuizData.b;
   c_text.innerText = currentQuizData.c;
   d_text.innerText = currentQuizData.d;
}

function getselected (){

    let answer = undefined;

    answerels.forEach((answerel) => {
        if(answerel.checked){
            answer = answerel.id;
        }
    });

    return answer;
}

submitbtn.addEventListener("click", () => {

    const answer = getselected();

    
    if(answer) {
        if (answer === quizdata[currentQuiz].correct){
            score ++;
        }
        currentQuiz ++;
        if(currentQuiz < quizdata.length){
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>Contestaste correctamente ${score}/${quizdata.length} preguntas.</h2>
            <button onclick="location.reload()">Cargar de nuevo</button>`
        }
    }


});

function deselecanswers (){
    answerels.forEach((answerels)=> {
        answerels.checked = false;
    })

}
