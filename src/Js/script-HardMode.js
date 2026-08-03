const botaoHard =
    document.getElementById("BotaodicaHard");
const dicatextoHard =
    document.getElementById("meuTextoHard");

    botaoHard.addEventListener('click', function() {
        if (dicatextoHard.style.display === "none") {
            dicatextoHard.style.display = "block";
            botaoHard.innerText = "FECHAR DICA";
        } 
        else {
            dicatextoHard.style.display = "none";
            botaoHard.innerText = "DICA";
        }
    });

    const titulo = document.getElementById("tituloHard");
    const imagem = document.getElementById("ImagemHard");
    const opcao1 = document.getElementById("opcao1Hard");
    const opcao2 = document.getElementById("opcao2Hard");
    const opcao3 = document.getElementById("opcao3Hard");
    const opcao4 = document.getElementById("opcao4Hard");
    const TVitoria = document.getElementById("tela-de-vitoria-hard");
    const TDerrota = document.getElementById("tela-de-derrota-hard");
    const CaixaPergunta = document.getElementById("PerguntaHard");
    const CaixaResposta = document.getElementById("respostasHard");
    const CaixaDica = document.getElementById("dicaHard");

    let CurrentQuestionIndex = 0;
    function ShowQuestion() {
        let perguntaAtual = quizHardData[CurrentQuestionIndex];

        titulo.innerText = perguntaAtual.pergunta;
        imagem.src = perguntaAtual.imagem;
        opcao1.innerText = perguntaAtual.opcoes[0];
        opcao2.innerText = perguntaAtual.opcoes[1];
        opcao3.innerText = perguntaAtual.opcoes[2];
        opcao4.innerText = perguntaAtual.opcoes[3];
        dicatextoHard.innerText = perguntaAtual.dica;
    }
    

    const quizHardData = [
        {
            pergunta: "Em que dia exato foi a morte de napoleão bonaparte?",
            opcoes: ["15 de maio de 1821", "5 de abril de 1821", "20 de março de 1821", "15 de abril de 1821"],
            correta: 1,
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFpK1ZnyeLmPRyMtWmSm_r1yGhNsxcg-oVf1gxkvBShxgOqV-71JZdR-M&s=10",
            dica: "PENSE MARK, A DATA DA MORTE DE NAPOLEÃO É UMA DATA IMPORTANTE NA HISTÓRIA"
        },
        {
            pergunta: "Qual o IDH exato dos EUA",
            opcoes: ["0,927", "0,932", "0,938", "0,940"],
            correta: 2,
            imagem: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Map_of_U.S._states_by_American_Human_Development_Index_2016.svg",
            dica: "PENSE MARK, O IDH DOS EUA É UM DOS MAIORES DO PLANETA"
        },
        {
            pergunta: "Quantas espécies de peixes existem no mundo?",
            opcoes: ["37.678", "37.689", "37.698", "37.698"],
            correta: 0,
            imagem: "https://pescariasa.com.br/wp-content/uploads/2025/11/qual-especie-peixe-exotico-invasor-mais-nocivo-meio-ambiente-brasil.jpg",
            dica: "PENSE MARK, HÁ MUITAS ESPÉCIES DE PEIXES NO MUNDO"
        },
        {
            pergunta: "Qual é a altura do maior homem que ja existiu?",
            opcoes: ["2,67 metros", "2,72 metros", "2,75 metros", "2,79 metros"],
            correta: 1,
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQumzN6zasWSHhUjKIPKCLcLAeajvYU6v2ehiHNr6mw9fCusGMBIM8RiB0&s=10",
            dica: "PENSE MARK, O MAIOR HOMEM JÁ REGISTRADO Tinha UMA ALTURA ESPECIAL"
        },
        {
            pergunta: "Qual é a maior palavra da lingua portuguesa?",
            opcoes: ["36", "42", "46", "49"],
            correta: 2,
            imagem: "https://s3.static.brasilescola.uol.com.br/be/2025/05/capa-portugues2.webp",
            dica: "PENSE MARK, A MAIOR PALAVRA DO PORTUGUÊS POSSUI VÁRIAS LETRAS"
        },
        {
            pergunta: "Qual é o valor de 1 kg de ouro em US$? DE FORMA APROXIMADA",
            opcoes: ["$100k", "$120k", "$130k", "$150k"],
            correta: 2,
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEeegfvMAIxJKM6UNehOfknpkw5SgHpR3awdLu94NxXW2JzO8KICNJ9I&s=10",
            dica: "PENSE MARK, O VALOR DO OURO É MUITO ALTO"
        },
        {
            pergunta: "Qual é a velocidade da luz?",
            opcoes: ["299.792.458 m/s", "300.012.546 m/s", "299.792.000 m/s", "300.056.086 km/s"],
            correta: 0,
            imagem: "https://preview.redd.it/how-powerful-is-wally-west-really-v0-dk4t2bhf9b4f1.png?width=640&crop=smart&auto=webp&s=f41864acbbd5e264b1c499d73c5bfef81cfd5867",
            dica: "PENSE MARK, A VELOCIDADE DA LUZ É UMA CONSTANTE FÍSICA"
        },
        {
            pergunta: "Quantas cidades possuem na Rússia?",
            opcoes: ["1120", "1129", "1135", "1142"],
            correta: 0,
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtomiA48pK4NBm3nSTHaHtFOzAcPd-EiQfYrttPkpWfE3J73ufFUfsFi6g&s=10",
            dica: "PENSE MARK! A RÚSSIA É O MAIOR PAÍS DO PLANETA"
        },
        {
            pergunta: "Data de criação da GOOGLE",
            opcoes: ["1 setembro de 1998", "4 de setembro de 1998", "6 de setembro de 1998", "10 de setembro"],
            correta:1,
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo-D0-cTlzM8X__f505EwRQp3bwFfVETXisSDFLVepsg&s=10",
            dica:"PENSE MARK, FOI EM SETEMBRO"
        },
        {
            pergunta: "Qual a equação matemática considerada mais elegante?",
            opcoes: ["Identidade de Euler", "Teorema de Pitágoras", "Formula de Bhaskara", "Lei gravitacional do universo"],
            correta: 0,
            imagem: "https://external-preview.redd.it/the-most-beautiful-equation-eulers-identity-v0-fn7C2PZnrSDEcGXKOc8jzhfLUc3tXjF4_IwkCiFJgXQ.jpg?width=640&crop=smart&auto=webp&s=c967e74f72f21d36ffe5082cfd672b02d37ada85",
            dica: "PENSE MARK! LEMBRE DO FILME SONIC 3"
        }

    ]

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
        let perguntaAtual = quizHardData[CurrentQuestionIndex];

        if(option === perguntaAtual.correta) {

            CurrentQuestionIndex++;
        
           if(CurrentQuestionIndex < quizHardData.length) {

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
