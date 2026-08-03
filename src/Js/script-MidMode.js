const botaoMid =
    document.getElementById("BotaodicaMid");
const dicatextoMid =
    document.getElementById("meuTextoMid");

    botaoMid.addEventListener('click', function() {
        if (dicatextoMid.style.display === "none") {
            dicatextoMid.style.display = "block";
            botaoMid.innerText = "FECHAR DICA";
        } 
        else {
            dicatextoMid.style.display = "none";
            botaoMid.innerText = "DICA";
        }
    });

    const titulo = document.getElementById("tituloMid");
    const imagem = document.getElementById("ImagemMid");
    const opcao1 = document.getElementById("opcao1Mid");
    const opcao2 = document.getElementById("opcao2Mid");
    const opcao3 = document.getElementById("opcao3Mid");
    const TVitoria = document.getElementById("tela-de-vitoria-mid");
    const TDerrota = document.getElementById("tela-de-derrota-mid");
    const CaixaPergunta = document.getElementById("PerguntaMid");
    const CaixaResposta = document.getElementById("respostasMid");
    const CaixaDica = document.getElementById("dicaMid");

    let CurrentQuestionIndex = 0;
    function ShowQuestion() {
        let perguntaAtual = quizMediumData[CurrentQuestionIndex];

        titulo.innerText = perguntaAtual.pergunta;
        imagem.src = perguntaAtual.imagem;
        opcao1.innerText = perguntaAtual.opcoes[0];
        opcao2.innerText = perguntaAtual.opcoes[1];
        opcao3.innerText = perguntaAtual.opcoes[2];
        dicatextoMid.innerText = perguntaAtual.dica;
    }

    const quizMediumData = [
        {
            pergunta: "Quais países tiveram territórios em todos os continentes?",
            opcoes: ["Espanha e Portugal", "França e Reino unido", "Apenas Reino unido"],
            correta: 1,
            imagem: "https://static.escolakids.uol.com.br/2023/01/indicacao-de-todos-os-seis-continentes-da-terra-em-um-mapa-mundi-america-africa-europa-asia-oceania-e-antartida.jpg",
            dica: "PENSE MARK, O TRATADO DE TORDESILHAS NÃO CONTA COMO REVENDICAÇÃO"
        },
        {
            pergunta: "Ao total, quantas variações do verbo 'to be' existem na língua inglesa?",
            opcoes: ["22", "20", "19"],
            correta: 0,
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8GTbPjaPPc7ktWr2tUdYbAV6uPH20U7oTcHkAVnKaYNekoNk8Hr4-R-Xy&s=10",
            dica: "PENSE MARK, ALÉM DOS TEMPOS VERBAIS, CONTRAÇÕES TAMBÉM SÃO CONSIDERADAS VARIAÇÕES DO VERBO 'TO BE'"
        },
        {
            pergunta: "Formula de bhaskara",
            opcoes: ["x = (2b ± √(b² - 4ac)) / 2a", "x= (-b ± √(b² - 4ac)) / 2a", "x = (b ± √(b² + 4ac)) / a"],
            correta: 1,
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsY8TdnAr0jUpAPKMSlthft3pUexC_bI8eii_iCybpMM6US4ll8k98SpY&s=10",
            dica: "PENSE MARK, A VOCÊ JA VIU ESSA FÓRMULA E SABE COMO USAR ELA"
        },
        {
            pergunta: "Quanto tempo um ano tem de forma aproximada?",
            opcoes: ["365 dias e 6 horas", "365 dias e 5 horas", "exatamente 365 dias"],
            correta: 0,
            imagem: "https://s4.static.brasilescola.uol.com.br/be/2024/10/movimentos-da-terra.jpg",
            dica: "PENSE MARK, PRA QUE SERVE O ANO BISSEXTO?"
        },
        {
            pergunta: "Qual é a fórmula química do sal de cozinha",
            opcoes: ["Cacl2", "KCl", "NaCl"],
            correta: 2,
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfKKHleZQD18KAfkHPO-HaYWyVvst7QY58R6-TgvVZxkM5RQNWT3y5uBk&s=10",
            dica: "PENSE MARK, O SAL DE COZINHA É COMPOSTO POR SÓLIDO IÔNICO"
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

        let perguntaAtual = quizMediumData[CurrentQuestionIndex];

        if(option === perguntaAtual.correta) {

            CurrentQuestionIndex++;
        
           if(CurrentQuestionIndex < quizMediumData.length) {

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
    
