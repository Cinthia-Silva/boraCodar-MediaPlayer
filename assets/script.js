let musica = document.querySelector('audio');

let duaracaoMusica = document.querySelector('.time-end');

// Eventos
document.querySelector('.play').addEventListener('click', tocarMusica);

document.querySelector('.pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

// Funções
function tocarMusica(){
    musica.play();
    document.querySelector('.pause').style.display = 'block';
    document.querySelector('.play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.pause').style.display = 'none';
    document.querySelector('.play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('.progresso');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.time-start');
    tempoDecorrido.textContent = segundosParaMinuos(Math.floor(musica.currentTime));
}

function segundosParaMinuos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}
