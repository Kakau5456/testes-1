
const formulario = document.getElementById("formCadastro");

const tabela = document.getElementById("listaMateriais");

const campoPesquisa = document.getElementById("pesquisa");

const botaoPesquisar = document.getElementById("btnPesquisar");

let materiais = [];

let proximoId = 1;

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const titulo = document.getElementById("titulo").value.trim();

    const ano = document.getElementById("ano").value;

    const tipo = document.getElementById("tipo").value;

    if (titulo === "" || ano === "" || tipo === "") {
        alert("Preencha todos os campos!");
        return;
    }

    const material = {
        id: proximoId,
        titulo: titulo,
        ano: Number(ano),
        tipo: tipo
    };

    materiais.push(material);

    proximoId++;

    mostrarMateriais(materiais);

    formulario.reset();

});

function mostrarMateriais(lista) {

    tabela.innerHTML = "";

    lista.forEach(function(material) {

        const novaLinha = tabela.insertRow();

        novaLinha.insertCell().textContent = material.id;

        novaLinha.insertCell().textContent = material.titulo;

        novaLinha.insertCell().textContent = material.ano;

        novaLinha.insertCell().textContent = material.tipo;

        const acoes = novaLinha.insertCell();

        const botaoExcluir = document.createElement("button");

        botaoExcluir.textContent = "Excluir";

        botaoExcluir.className = "btn btn-danger btn-sm";

        botaoExcluir.addEventListener("click", function() {

            excluirMaterial(material.id);

        });

        acoes.appendChild(botaoExcluir);

    });

}

function excluirMaterial(id) {

    materiais = materiais.filter(function(material) {

        return material.id !== id;

    });

    mostrarMateriais(materiais);

}

function pesquisarMateriais() {

    const pesquisa = campoPesquisa.value.toLowerCase().trim();

    const resultado = materiais.filter(function(material) {

        return material.titulo.toLowerCase().includes(pesquisa) ||
               material.tipo.toLowerCase().includes(pesquisa);

    });

    mostrarMateriais(resultado);

}

botaoPesquisar.addEventListener("click", pesquisarMateriais);

campoPesquisa.addEventListener("input", pesquisarMateriais);
