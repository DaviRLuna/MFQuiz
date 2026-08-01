function teste() {
    alert('Nossa como ele se acha goat, achou um botão no fvcking MEIO DA TELA. Para de perder tempo e vai fzr o quiz irmão. SONbrero. parmeSON. SONsung. samSONg.');
};

const nome= prompt('Entre com seu nome');

const botao =
    document.getElementById("Botaodica");
const dica =
    document.getElementById("meuTexto");

    botao.addEventListener("click", function() {
        if (dica.style.display === "none") {
            dica.style.display = "block";
            botao.innerText = "Fechar dica";
        } 
        else {
            dica.style.display = "none";
            botao.innerText = "dica";
        }
    });

    const titulo = document.getElementById("titulo");
    const imagem = document.getElementById("Imagem");
    const opção1 = document.getElementById("opcao1");
    const opção2 = document.getElementById("opcao2");

    let CurrentQuestionIndex = 0;
    function ShowQuestion() {
        let perguntaAtual = quizFacilData[CurrentQuestionIndex];

        document.getElementById("titulo").innerText = perguntaAtual.pergunta;
        document.getElementById("Imagem").src = perguntaAtual.imagem;
        document.getElementById("opcao1").innerText = perguntaAtual.opcoes[0];
        document.getElementById("opcao2").innerText = perguntaAtual.opcoes[1];
    }
    const quizFacilData = [
        {
            pergunta: "Quem venceria em uma luta?",
            opcoes: ["Buraco negro", "Bebe dormindo"],
            correta: 0,
            imagem: "src/assets/aaa.png"
        },
        {
            pergunta: "Qual a diferença entre as duas imagens?",
            opcoes: ["Nenhuma", "O cabelo"],
            correta: 1,
            imagem: ""
        }
    ];

    function derrota() {

        document.getElementById("Pergunta").classList.add("tela-escondida");
        document.getElementById("respostas").classList.add("tela-escondida");
        document.getElementById("dica").classList.add("tela-escondida");
        document.getElementById("tela-de-derrota").classList.remove("tela-escondida");
    }
    function recomeço() {


        document.getElementById("Pergunta").classList.remove("tela-escondida");
        document.getElementById("respostas").classList.remove("tela-escondida");
        document.getElementById("dica").classList.remove("tela-escondida");
        document.getElementById("tela-de-derrota").classList.add("tela-escondida");
    }
    function ShowQuestion() {
        let perguntaAtual = quizFacilData[CurrentQuestionIndex];

        document.getElementById("titulo").innerText = perguntaAtual.pergunta;
        document.getElementById("Imagem").src = perguntaAtual.imagem;
        document.getElementById("opcao1").innerText = perguntaAtual.opcoes[0];
        document.getElementById("opcao2").innerText = perguntaAtual.opcoes[1];
    }
    function selectOption(option) {

        let perguntaAtual = quizFacilData[CurrentQuestionIndex];

        if(option === perguntaAtual.correta) {
            alert("Parabéns, você acertou!");
            
            CurrentQuestionIndex++;

            ShowQuestion();
        }
        else {
            alert("Você errou");
            derrota();
        }
    }
    