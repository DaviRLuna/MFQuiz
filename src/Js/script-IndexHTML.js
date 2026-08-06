const caixaNavegação = document.getElementById("QuizPage");

caixaNavegação.addEventListener('click', function() {
    window.location.href = 'src/pages/CentralQuiz.html'
})

const Conteudo = document.querySelectorAll(".Conteudo");
const botaoAvancar = document.getElementById("Avancar");
const botaoRegredir = document.getElementById("Regredir");

let conteudoAtual = 0;


function atualizar(ConteudoNovo){

    Conteudo.forEach(tela => {
        tela.classList.add("tela-escondida");
    });
    conteudoAtual = ConteudoNovo;
    Conteudo[conteudoAtual].classList.remove("tela-escondida");
}

botaoAvancar.addEventListener('click', () => {

    if(conteudoAtual === Conteudo.length -1){
        conteudoAtual = 0;
    }
    else{
        conteudoAtual++;
    }
    atualizar(conteudoAtual);
    window.scrollTo(0, 0);
})
botaoRegredir.addEventListener('click', () =>{

    if(conteudoAtual === 0){
        conteudoAtual = Conteudo.length - 1;
    }
    else{
        conteudoAtual--;
    }
    atualizar(conteudoAtual)
    window.scrollTo(0, 0);
})