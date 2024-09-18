const questions = [
    {
        question: "Qual foi o nosso primeiro passeio juntos?",
        answers: ["Praia", "Cinema", "Parque", "Museu"],
        correct: 0
    },
    {
        question: "Qual é o nosso restaurante favorito?",
        answers: ["Restaurante A", "Restaurante B", "Restaurante C", "Restaurante D"],
        correct: 1
    },
    {
        question: "Qual foi a nossa primeira viagem juntos?",
        answers: ["Cidade A", "Cidade B", "Cidade C", "Cidade D"],
        correct: 2
    },
    // Adicione mais perguntas conforme necessário
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById('question-container');
    const answersContainer = document.getElementById('answers-container');

    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    const question = questions[currentQuestionIndex];
    questionContainer.textContent = question.question;
    answersContainer.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.classList.add('answer-button');
        button.addEventListener('click', () => checkAnswer(index));
        answersContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.correct) {
        score++;
    }
    currentQuestionIndex++;
    loadQuestion();
}

function showResult() {
    const questionContainer = document.getElementById('question-container');
    const answersContainer = document.getElementById('answers-container');
    const nextButton = document.getElementById('next-button');
    const resultContainer = document.getElementById('result-container');

    questionContainer.style.display = 'none';
    answersContainer.style.display = 'none';
    nextButton.style.display = 'none';

    resultContainer.style.display = 'block';
    resultContainer.innerHTML = `
        <h2>Resultado</h2>
        <p>Você acertou ${score} de ${questions.length} perguntas!</p>
        <p>Obrigado por participar deste quiz especial! ❤️</p>
    `;
}

function nextQuestion() {
    loadQuestion();
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('question-container')) {
        loadQuestion();
    }
});
