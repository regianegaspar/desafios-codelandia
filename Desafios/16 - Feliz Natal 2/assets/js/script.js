document.addEventListener('DOMContentLoaded', function () {
    // Defina a data de término da contagem regressiva para o Natal (25 de dezembro)
    var final = new Date('December 25, ' + new Date().getFullYear() + ' 00:00:00').getTime();

    // Atualize a contagem regressiva a cada segundo
    var tempo = document.getElementById('contagem');

    var tempoInterval = setInterval(function () {
        var atual = new Date().getTime();
        var distancia = final - atual;

        // Calcula os dias, horas, minutos e segundos restantes
        var dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        var horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        var segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        // Atualiza o elemento HTML com a contagem regressiva
        tempo.innerHTML = dias + 'd ' + horas + 'h ' + minutos + 'm ' + segundos + 's';

        // Verifica se a contagem regressiva chegou a zero
        if (distancia < 0) {
            clearInterval(tempoInterval);
            tempo.innerHTML = 'Feliz Natal!';
        }
    }, 1000);
});
