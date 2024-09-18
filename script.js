let currentQuestionIndex = 0;

function nextQuestion() {
    // Verifica se a resposta foi selecionada
    const currentQuestion = document.querySelector(`#q${currentQuestionIndex + 1}`);
    const selectedOption = document.querySelector(`input[name="q${currentQuestionIndex + 1}"]:checked`);
    if (!selectedOption) {
        alert('Por favor, selecione uma resposta.');
        return;
    }

    // Esconde a pergunta atual
    currentQuestion.style.display = 'none';

    // Avança para a próxima pergunta
    currentQuestionIndex++;

    // Exibe a próxima pergunta ou redireciona para a página de resultado se não houver mais perguntas
    const nextQuestion = document.querySelector(`#q${currentQuestionIndex + 1}`);
    if (nextQuestion) {
        nextQuestion.style.display = 'block';
    } else {
        // Se não houver mais perguntas, calcula a pontuação e redireciona
        calcularPontuacao();
    }
}

function calcularPontuacao() {
    let pontuacao = 0;

    // Perguntas e respostas corretas
    const respostasCorretas = {
        "q1": "A",
        "q2": "B",
        // Preencha as respostas corretas para as demais perguntas
        "q20": "A"
    };

    for (let i = 1; i <= 20; i++) {
        const resposta = document.querySelector(`input[name="q${i}"]:checked`);
        if (resposta && resposta.value === respostasCorretas[`q${i}`]) {
            pontuacao++;
        }
    }

    // Salvar pontuação no localStorage para exibir na página de resultado
    localStorage.setItem('resultadoQuiz', pontuacao);

    // Redirecionar para a página de resultado
    window.location.href = 'resultado.html';
}

// Exibir o resultado na página final
document.addEventListener('DOMContentLoaded', function() {
    const resultado = localStorage.getItem('resultadoQuiz');
    if (resultado !== null) {
        const mensagem = resultado >= 15
            ? 'Parabéns! Você conhece muito bem seu(a) parceiro(a)!'
            : 'Vocês ainda têm muito o que descobrir um sobre o outro!';
        document.getElementById('resultado').innerText = `Você acertou ${resultado} de 20 perguntas. ${mensagem}`;
        // Limpar o resultado do localStorage após exibir
        localStorage.removeItem('resultadoQuiz');
    }
});
