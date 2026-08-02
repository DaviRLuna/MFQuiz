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

         console.log("O JavaScript tentou carregar este caminho de imagem:", perguntaAtual.imagem);

        document.getElementById("titulo").innerText = perguntaAtual.pergunta;
        document.getElementById("Imagem").src = perguntaAtual.imagem;
        document.getElementById("opcao1").innerText = perguntaAtual.opcoes[0];
        document.getElementById("opcao2").innerText = perguntaAtual.opcoes[1];
    }
    const quizFacilData = [
        {
            pergunta: "Quem venceria em uma luta?",
            opcoes: ["Bomba de hidrogênio", "Bebe dormindo"],
            correta: 0,
            imagem: "https://preview.redd.it/hydrogen-bomb-vs-coughing-baby-v0-libysfjp4djg1.jpeg?width=640&crop=smart&auto=webp&s=0ed7cacec1afe5a2eac32b7c886d0c6f789e343c",
            dica: "PENSE MARK, O BEBE ESTÁ DORMINDO, NÃO PODE SE DEFENDER!"
        },
        {
            pergunta: "Quem é o presidente do Brasil?",
            opcoes: ["Lula", "Felipe neto"],
            correta: 0,
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwUfJI6uLSpztBD-22RC8ufYzZUhSSfQd0_4qftCT8sDQCZDUAUdVqFID3&s=10",
            dica: "PENSE MARK, O EIMINE AINDA NÃO ESTÁ PRESO"
        },
        {
            pergunta: "Onde fica a muralha da china?",
            opcoes: ["República Dominicana", "China"],
            correta: 1,
            imagem: "https://st2.depositphotos.com/1001911/6233/v/450/depositphotos_62331267-stock-illustration-drunk-emoticon.jpg",
            dica: "PENSE MARK, A MURALHA DA CHINA FICA NA ÁSIA"
        }
    ];

    function derrota() {

        document.getElementById("Pergunta").classList.add("tela-escondida");
        document.getElementById("respostas").classList.add("tela-escondida");
        document.getElementById("dica").classList.add("tela-escondida");
        document.getElementById("tela-de-derrota").classList.remove("tela-escondida");
        document.getElementById("respostas").style.display = "none";
    }
    function recomeço() {

        CurrentQuestionIndex = 0;

        document.getElementById("Pergunta").classList.remove("tela-escondida");
        document.getElementById("respostas").classList.remove("tela-escondida");
        document.getElementById("dica").classList.remove("tela-escondida");
        document.getElementById("tela-de-derrota").classList.add("tela-escondida");
        document.getElementById("respostas").style.display = "block";

        ShowQuestion();
    }
    function ShowQuestion() {
        let perguntaAtual = quizFacilData[CurrentQuestionIndex];

        document.getElementById("titulo").innerText = perguntaAtual.pergunta;
        document.getElementById("Imagem").src = perguntaAtual.imagem;
        document.getElementById("opcao1").innerText = perguntaAtual.opcoes[0];
        document.getElementById("opcao2").innerText = perguntaAtual.opcoes[1];
        document.getElementById("meuTexto").innerText = perguntaAtual.dica;
    }
    function selectOption(option) {

        let perguntaAtual = quizFacilData[CurrentQuestionIndex];

        if(option === perguntaAtual.correta) {
            
            
            CurrentQuestionIndex++;
            ShowQuestion();
        }
        else {
            derrota();
        }
    }
    