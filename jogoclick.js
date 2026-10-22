const btnAumento = document.querySelector(".btn-aumento");
const contagem = document.querySelector("#valor");
const status = document.querySelector("#status");
const cenaFinal = document.querySelector("#cena-final");
const mensagemConclusao = document.querySelector("#mensagem-conclusao");
const btnReset = document.querySelector("#btn-reset");

let contador = 0;
let temporizadorConclusao;

btnAumento.addEventListener("click", () => {
    if (contador >= 10) {
        return;
    }

    contador++;
    contagem.textContent = contador;

    const escurecimento = Math.min(contador / 10, 0.35);
    document.documentElement.style.setProperty("--escuro", escurecimento);

    if (contador === 10) {
        cenaFinal.classList.add("visivel");
        btnAumento.disabled = true;
        status.textContent = "MISSÃO CONCLUÍDA";

        temporizadorConclusao = window.setTimeout(() => {
            mensagemConclusao.classList.add("visivel");
        }, 1800);
    } else if (contador >= 5) {
        status.textContent = "ALGO ESTÁ NO CANTO";
    } else if (contador >= 3) {
        status.textContent = "SINAL INSTÁVEL";
    }
});

btnReset.addEventListener("click", () => {
    window.clearTimeout(temporizadorConclusao);
    contador = 0;
    contagem.textContent = contador;
    status.textContent = "SINAL ESTÁVEL";
    btnAumento.disabled = false;
    cenaFinal.classList.remove("visivel");
    mensagemConclusao.classList.remove("visivel");
    document.documentElement.style.setProperty("--escuro", 0);
    btnAumento.focus();
});
