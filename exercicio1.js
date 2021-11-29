// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML
let botaoCalcularEl = document.querySelector('#calcular');

botaoCalcularEl.addEventListener('click', function() {
    const inputConstanteEl = document.querySelector("#constante");
    const inputMassa1El = document.querySelector("#massa1");
    const inputMassa2El = document.querySelector("#massa2");
    const inputDistanciaEl = document.querySelector("#distancia");

    const fGrav = (inputConstanteEl.value*inputMassa1El.value*inputMassa2El.value)/inputDistanciaEl.value;
    const inputResultadoEl = document.querySelector("#resultado");
    inputResultadoEl.value = fGrav || 0;
});