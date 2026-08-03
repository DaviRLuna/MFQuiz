
const botao =
    document.getElementById("Botaodica");
const dicatexto =
    document.getElementById("meuTexto");

    botao.addEventListener('click', function() {
        if (dicatexto.style.display === "none") {
            dicatexto.style.display = "block";
            botao.innerText = "FECHAR DICA";
        } 
        else {
            dicatexto.style.display = "none";
            botao.innerText = "DICA";
        }
    });

    const titulo = document.getElementById("titulo");
    const imagem = document.getElementById("Imagem");
    const opcao1 = document.getElementById("opcao1");
    const opcao2 = document.getElementById("opcao2");
    const TVitoria = document.getElementById("tela-de-vitoria");
    const TDerrota = document.getElementById("tela-de-derrota");
    const CaixaPergunta = document.getElementById("Pergunta");
    const CaixaResposta = document.getElementById("respostas");
    const CaixaDica = document.getElementById("dica");

    let CurrentQuestionIndex = 0;
    function ShowQuestion() {
        let perguntaAtual = quizFacilData[CurrentQuestionIndex];

        titulo.innerText = perguntaAtual.pergunta;
        imagem.src = perguntaAtual.imagem;
        opcao1.innerText = perguntaAtual.opcoes[0];
        opcao2.innerText = perguntaAtual.opcoes[1];
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

        CaixaPergunta.classList.add("tela-escondida");
        CaixaResposta.classList.add("tela-escondida");
        CaixaDica.classList.add("tela-escondida");
        TDerrota.classList.remove("tela-escondida");
        TVitoria.classList.add("tela-escondida");
    }
    function recomeço() {

        CurrentQuestionIndex = 0;

        CaixaPergunta.classList.remove("tela-escondida");
        CaixaResposta.classList.remove("tela-escondida");
        CaixaDica.classList.remove("tela-escondida");
        TDerrota.classList.add("tela-escondida");
        TVitoria.classList.add("tela-escondida");

        ShowQuestion();
    }
    
    function vitoria() {
        TVitoria.classList.remove("tela-escondida");
        CaixaPergunta.classList.add("tela-escondida");
        CaixaResposta.classList.add("tela-escondida");
        CaixaDica.classList.add("tela-escondida");
        TDerrota.classList.add("tela-escondida");
    }
    function selectOption(option) {

        let perguntaAtual = quizFacilData[CurrentQuestionIndex];

        if(option === perguntaAtual.correta) {

            CurrentQuestionIndex++;
        
           if(CurrentQuestionIndex < quizFacilData.length) {

              ShowQuestion();
           }
           else {
                vitoria();
           }
        }
        else {
            derrota();
        }
    }
    
