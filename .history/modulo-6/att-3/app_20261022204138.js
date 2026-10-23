// Crie um formulário com dois campos de entrada (<input id='nomeInsumo'> e <input id='qtdInsumo'>) e o botão 
{/* 'Adicionar ao Estoque'. Ao clicar, crie dinamicamente uma nova linha (<tr>) na tabela (<tbody id='tabelaEstoque'>)  */}
{/* exibindo o nome e a quantidade do insumo informado.  */}

const form = document.getElementById("form");

const nameInsume = document.getElementById("name-insume");
const qntInsume = document.getElementById("qnt-insume");

const listInsumes = document.getElementById("list-insumes");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = nameInsume.value.trim();
    const qntInput = qntInsume.value;

    const newLine = document.createElement("tr");

    newLine.appendChild(nameInput);
    newLine.appendChild(qntInput);

    newLine.classList.add("wrapper")
})