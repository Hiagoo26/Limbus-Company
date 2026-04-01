const modal = document.getElementById("modalConvite");
const convite = document.getElementById("convite");
const loc = document.getElementById("loc")
const fechar = document.getElementById("fechar");
const trocar = document.getElementById("trocar");
const entrar = document.getElementById("entrar");


document.addEventListener("DOMContentLoaded", () => {
  modal.classList.add("ativo");
});

function Recusar() {
    window.location.href = "https://www.google.com";
}

function trocarImagem() {
    convite.classList.remove("ativa");
    loc.classList.add("ativa");
    fechar.style.display = "none";
    trocar.style.display = "none";
    entrar.style.display = "block";
}

function fecharModal() {
    modal.classList.remove("ativo");
}