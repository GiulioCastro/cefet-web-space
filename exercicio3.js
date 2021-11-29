// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML
const botoesExpandirRetrairEl = document.querySelectorAll('.botao-expandir-retrair');

botoesExpandirRetrairEl.forEach((el) => {
    el.addEventListener('click', function (e) {
        const paragrafoPai = e.currentTarget.parentNode;
        paragrafoPai.classList.toggle('expandido');
    });
})