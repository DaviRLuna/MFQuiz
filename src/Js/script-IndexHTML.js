const caixaNavegação = document.getElementById("QuizPage");

caixaNavegação.addEventListener('click', function() {
    window.location.href = 'src/pages/CentralQuiz.html'
})

const agradecimentos = document.getElementById("agradecimentos");
const jogos = document.getElementById("Jogos")

function avancar(){
    agradecimentos.classList.remove("tela-escondida");
    jogos.classList.add("tela-escondida");
}
function regredir(){
    agradecimentos.classList.add("tela-escondida");
    jogos.classList.remove("tela-escondida");
}