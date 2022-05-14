// let titulo = document.querySelector("h1");

// let instrucoes = document.querySelector("#instrucoes");
// let aviso = document.querySelector("#aviso");
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0; // pontos para o placar
let placar = 0; // placar

// PERGUNTA
let numQuestion = document.querySelector("#section__question__num-question");

let question = document.querySelector("#section__question__text-question");

const btnNext = document.querySelector('.btn-next-question')

const btnStartQuiz = document.querySelector(".btn-start-quiz");

// const allLiAnswer = document.querySelectorAll(".answers");


btnStartQuiz.addEventListener("click", () => {
    
    startQuiz();
});

btnNext.addEventListener("click", () => {
    nextQuestion();
})

// ALTERNATIVAS
let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");

// article com a class questoes
let articleQuestoes = document.querySelector(".article-questions");
// ol li com as alternativas
let alternatives = document.querySelector("#alternatives");
const questions = [

    {
        numQuestion: 1,
        question: "5+5?",
        alternatives : {
            alternativeA: "10",
            alternativeB: "15",
            alternativeC: "20",
            correct: "10",
        }
    },
    {

        numQuestion: 2,
        question: "Quantos é 2 + 2?",
        alternatives : {

            alternativeA: "6",
            alternativeB: "4",
            alternativeC: "2",
            correct: "4",
        }
    },
    {

        numQuestion: 3,
        question: "Quantos é 5 + 20",
        alternatives : {
            
            alternativeA: "10",
            alternativeB: "30",
            alternativeC: "25",
            correct: "25",
        }

    },
]

// const questions = [question1, question2];
const totalQuestions = (questions.length);
console.log('total de questoes', totalQuestions);


const startQuiz = () => {

    numQuestion.textContent = `${questions[0].numQuestion} / ${totalQuestions}`;
    question.textContent = questions[0].question;

    a.textContent = questions[0].alternatives.alternativeA;
    b.textContent = questions[0].alternatives.alternativeB;
    c.textContent = questions[0].alternatives.alternativeC;


    // a.setAttribute("value", questions[0].alternatives.alternativeA);
    // b.setAttribute("value", "1B");
    // c.setAttribute("value", "1C");

}
// a.setAttribute("value", "1A");
// a.setAttribute("value", "1A");
// b.setAttribute("value", "1B");
// c.setAttribute("value", "1C");

function toggleEnabledAlternativesButtons() {
    document.querySelectorAll(".alternatives__answer-button").forEach((item) => {
    item.toggleAttribute("disabled");
    });
}

var btnAnswerClicked = null;


const checkAnswer = (nQuestion, answer, liClicked) => {

    btnAnswerClicked = liClicked;
    console.log(liClicked)

    // console.log(liClicked.id);
    toggleEnabledAlternativesButtons();

    // const allLiAnswer = document.querySelectorAll(".alternatives__answer-button");

    // document.querySelectorAll(".answers").forEach((item) => {
    //     item.addEventListener("click", (event) => {
    //     item.setAttribute("disabled");
    //     isDisableButtons();
    // });
    // });

    // console.log(allLiAnswer)

    // // const b = JSON.parse(allLiAnswer);

    // console.log(b)

    // const test = b.map((item) => item.id == liClicked.id)

    // console.log(test)

    // const a = Array.from(allLiAnswer, li => li.id != liClicked.id)
    // console.log(a)

    // const LisNotClicked = allLiAnswer.forEach((li) => li.id)
    
    // console.log(LisNotClicked)

    console.log(nQuestion.value, answer.textContent);

    // const liClicked = document.querySelector(".btn-next-question").id == liClicked.id;

    // const cart = Array.from(allLiAnswer).filter(button => {
    //     // button.id === "a";
    //     console.log(button.id == "a")

    // })

    // console.log(cart)
    console.log(liClicked.id);

    const nCurrentQuestion = nQuestion.value;
    const chosenAnswer = answer.textContent;

    console.log(nCurrentQuestion);
    const correctAnswer = questions[nCurrentQuestion-1].alternatives.correct;

    if(chosenAnswer == correctAnswer){
        liClicked.classList.add("is--correct");
        liClicked.setAttribute("clicked", 'true')
    }
    else{
        liClicked.classList.add("is--incorrect");
    }

    // return btnAnswerClicked;

}

const nextQuestion = () => {

    console.log(btnAnswerClicked);

    btnAnswerClicked.classList.remove('is--correct', 'is--incorrect');
    numCurrentQuestion = document.querySelector('#section__question__num-question').innerText;    
    numCurrentQuestionNumber = parseFloat(numCurrentQuestion);
    console.log(numCurrentQuestionNumber);

    nextPositionQuestionArray = numCurrentQuestionNumber;

    numQuestion.textContent = `${questions[numCurrentQuestionNumber].numQuestion} / ${totalQuestions}`;
    question.textContent = questions[nextPositionQuestionArray].question;

    a.textContent = questions[nextPositionQuestionArray].alternatives.alternativeA;
    b.textContent = questions[nextPositionQuestionArray].alternatives.alternativeB;
    c.textContent = questions[nextPositionQuestionArray].alternatives.alternativeC;


    a.setAttribute("value", nextPositionQuestionArray + 1);
    b.setAttribute("value", nextPositionQuestionArray + 1);
    c.setAttribute("value", nextPositionQuestionArray + 1);

    toggleEnabledAlternativesButtons();
    // b.setAttribute("value", "1B");
    // c.setAttribute("value", "1C");
}

