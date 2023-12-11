const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultsContainer = document.getElementById("results");

const myQuestions = [
    {
        question: "What is the capital of France?",
        answers: {
        a: "Paris",
        b: "London",
        c: "New York"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the largest country in the world?",
        answers: {
        a: "Russia",
        b: "China",
        c: "United States"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the currency of Japan?",
        answers: {
        a: "Yuan",
        b: "Euro",
        c: "Yen"
        },
        correctAnswer: "c"
    }
];

function buildQuiz(){
    const output = [];

    myQuestions.forEach((currentQuestion, quiestionNumber)=>{
        const answers = [];

        for(letter in currentQuestion.answers){
            answers.push(
                `
                <label>
                <input type="radio" name = "" value = "${letter}" />
                </label>
                `
            )
        }
    })
}

function showResults(){
    
}

buildQuiz();

submitButton.addEventListener("click", showResults);