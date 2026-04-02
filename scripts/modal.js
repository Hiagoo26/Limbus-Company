const modalpp = document.getElementById('modal');
const bodymodal = document.getElementById('body-modal');
const fecharpp = document.getElementById('fecharpp');

let dados = {};

fetch('../data/marcados.json')
    .then(res => res.json())
    .then(nome => {
        dados = nome;
        console.log("Funcinou!")

        const botoes = document.querySelectorAll('.character-card');
        botoes.forEach(botao => {
            botao.disabled = false;
        });
    })
    .catch( error => {
        console.error("Erro:", error)
    });

function abrirModal(id){
    const pp = dados[id];

    if(!pp){
        alert("Personagem não encontrado!");
        return;
    }
    let conteudoHtml = `
        <h2 style="margin: 1rem 0; text-align: center;">${pp.nome} - ${pp.idade} anos</h2>
        <hr>
        <div style="display: flex; justify-content: center; margin-top: 1rem">
            <img src="${pp.imagem}" alt="Aparência de ${pp.nome}" style="border: 1px solid #fff; width: 300px; height: 300px">        
        </div>
        <p style="margin: 1rem 0; text-align: justify">${pp.descricao}</p>
        <div style="display:flex; flex-flow: column nowrap; align-items: center;">
            <h3 style="color: var(--color-secondary)">Historia</h3>
            <p style="margin: 1rem 0; text-align: justify">${pp.historia}</p>
        </div>
        <div style="display:flex; flex-flow: column nowrap; align-items: center;">
            <h3 style="color: var(--color-secondary)">Objetivo</h3>
            <p style="margin: 1rem 0; text-align: justify">${pp.objetivo}</p>
        </div>
    `

    if (pp.fragmentos && pp.fragmentos.length > 0){
        pp.fragmentos.forEach(tituloEtexto => {
            conteudoHtml += `
                <h3 style="color: text-align: center; var(--color-secondary)">Fragmentos</h3>
                <div style="display:flex; flex-flow: column nowrap; justify-content: center; margin: 1rem 0;">
                    <details>
                        <summary>${tituloEtexto.titulo}</summary>
                        <p>${tituloEtexto.texto.replace(/\n/g, "<br>")}</p>
                    </details>
                </div>
            `
        })
    };

    bodymodal.innerHTML = conteudoHtml;
    modalpp.classList.remove('hidden');
}

fecharpp.addEventListener("click", function(){
    modalpp.classList.add('hidden');
    bodymodal.innerHTML = "";
});