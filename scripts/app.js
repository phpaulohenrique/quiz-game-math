const questions = [

    {
        numQuestion: 1,
        question: "How much is 5 + 5?",
        alternatives : {
            alternativeA: "10",
            alternativeB: "15",
            alternativeC: "20",
            correct: "10",
        }
    },
    {

        numQuestion: 2,
        question: "How much is 2 + 2?",
        alternatives : {

            alternativeA: "6",
            alternativeB: "4",
            alternativeC: "2",
            correct: "4",
        }
    },
    {

        numQuestion: 3,
        question: "How much is 5 + 20?",
        alternatives : {
            
            alternativeA: "10",
            alternativeB: "25",
            alternativeC: "30",
            correct: "25",
        }

    },
    {

        numQuestion: 4,
        question: "How much is 5 * 20?",
        alternatives : {
            
            alternativeA: "120",
            alternativeB: "80",
            alternativeC: "100",
            correct: "100",
        }

    },
        {

        numQuestion: 5,
        question: "How much is 150 - 22?",
        alternatives : {
            
            alternativeA: "132",
            alternativeB: "128",
            alternativeC: "138",
            correct: "128",
        }

    },
]



// QUESTIONS
const sectionAlternativesQuestion = document.querySelector('.section__alternatives-question');
let numQuestion = document.querySelector("#section__question__num-question");
let question = document.querySelector("#section__question__text-question");
let alternatives = document.querySelector("#alternatives");

// ALTERNATIVES
let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");

const btnNext = document.querySelector(".btn-next-question");
const btnStartQuiz = document.querySelector(".btn-start-quiz");
const btnRestartQuiz = document.querySelector(".btn-restart-quiz");

const CLICK = "click";
let btnAnswerClicked = null;
let assessment = 0; // pontuação
let scoreboard = 0; // placar
const totalQuestions = questions.length;


btnStartQuiz.addEventListener(CLICK, () => {
    startQuiz();
});


btnNext.addEventListener(CLICK, () => {
    nextQuestion();
});


btnRestartQuiz.addEventListener(CLICK, () => {
    if(confirm('Deseja reiniciar o Quiz?')){
        console.log('reiniciou')
        resetButtonColorAnswerCorretOrIncorret();
        toggleEnabledAlternativesButtons();
        startQuiz();
    }
});


// console.log("total de questoes", totalQuestions);

const startQuiz = () => {

    btnNext.classList.remove('is--disable')
    sectionAlternativesQuestion.classList.remove('is--disable');
    btnStartQuiz.classList.add('is--disable')
    btnRestartQuiz.classList.remove('is--disable')

    numQuestion.textContent = `${questions[0].numQuestion} / ${totalQuestions}`;
    question.textContent = questions[0].question;

    a.textContent = questions[0].alternatives.alternativeA;
    b.textContent = questions[0].alternatives.alternativeB;
    c.textContent = questions[0].alternatives.alternativeC;

}


const toggleEnabledAlternativesButtons = () => {
    document.querySelectorAll(".alternatives__answer-button").forEach((button) => {
    button.toggleAttribute("disabled");
    });
}


const checkAnswer = (nQuestion, answer, liClicked) => {

    btnAnswerClicked = liClicked;
    // console.log(liClicked)

    toggleEnabledAlternativesButtons();
    // console.log(nQuestion.value, answer.textContent);

    // console.log(liClicked.id);
    const nCurrentQuestion = nQuestion.value;
    const chosenAnswer = answer.textContent;

    // console.log(nCurrentQuestion);
    const correctAnswer = questions[nCurrentQuestion-1].alternatives.correct;

    if(chosenAnswer == correctAnswer){
        liClicked.classList.add("is--correct");
        liClicked.setAttribute("clicked", 'true')

        createIconCorrectOrIncorrectInAlternative("correct");
    }

    else{
        liClicked.classList.add("is--incorrect");
        createIconCorrectOrIncorrectInAlternative('incorrect');
    }
}

const createIconCorrectOrIncorrectInAlternative = (correctOrIncorret) =>{

    const icon = document.createElement("img");
    icon.classList.add(
        "alternatives__answer-button__icon-correct-or-incorrect"
    );

    icon.setAttribute("src", `../assets/icon-${correctOrIncorret}.png`);
    btnAnswerClicked.appendChild(icon);

}


const resetButtonColorAnswerCorretOrIncorret = () =>{
    btnAnswerClicked.classList.remove("is--correct", "is--incorrect");
}


const nextQuestion = (event) => {

    // console.log(event)

    console.log(btnAnswerClicked);
    resetButtonColorAnswerCorretOrIncorret();

    numCurrentQuestion = document.querySelector('#section__question__num-question').innerText;    
    numCurrentQuestionNumber = parseFloat(numCurrentQuestion);
    console.log(numCurrentQuestionNumber);

    // const currentQuestionPositionQuestionsArray = numCurrentQuestionNumber;
    // console.log(currentQuestionPositionQuestionsArray);

    // below i am put +1, because i want to know if the next question is the last one, if it is i will disable the  "next" button
    if(totalQuestions == numCurrentQuestionNumber + 1){
        btnNext.classList.add("is--disable")
    }

    nextPositionQuestionArray = numCurrentQuestionNumber;

    numQuestion.textContent = `${questions[numCurrentQuestionNumber].numQuestion} / ${totalQuestions}`;

    // if  the user clicked direct in btn "next",  without selecting any answer thow this alert below, if that happens the 
    question.textContent = questions[nextPositionQuestionArray].question;

    a.textContent = questions[nextPositionQuestionArray].alternatives.alternativeA;
    b.textContent = questions[nextPositionQuestionArray].alternatives.alternativeB;
    c.textContent = questions[nextPositionQuestionArray].alternatives.alternativeC;

    a.setAttribute("value", nextPositionQuestionArray + 1);
    b.setAttribute("value", nextPositionQuestionArray + 1);
    c.setAttribute("value", nextPositionQuestionArray + 1);

    toggleEnabledAlternativesButtons();
}

