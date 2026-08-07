const Imagens = new Image();
Imagens.src = 'https://www.pngarts.com/files/5/Angry-Birds-PNG-Picture.png';

const Canvas = document.getElementById("TelaJogo");
const contexto = Canvas.getContext('2d');

function loop() {
contexto.clearRect(0, 0, Canvas.width, Canvas.height);

contexto.drawImage(
    Imagens,
    0,0,
    33,24,
    10,50,
    33,24
);
requestAnimationFrame(loop);
}

Imagens.onload = function() {
    loop();
};