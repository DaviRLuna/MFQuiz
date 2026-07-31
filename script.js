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

    let estado = 1;

    const TituloElement = document.getElementById('Titulo');
    const ImagemElement = document.getElementById('Imagem');
    const RespostaCertaElement = document.getElementById('Resposta.C');
    const RespostaErradaElement = document.getElementById('Resposta.E');
    const TituloElement = document.getElementById('Titulo');
    const botao = document.getElementById('Botaodica');

    function verificarResposta(RespostaSelecionada){
        if(etapa === 1){
            if(RespostaSelecionada === 'Errada'){
                cons
            }
        }
    }
