// Crie um campo <input type='number' id='inputTemp'> e um parágrafo <p id='mensagemTemp'></p>. Adicione um 
// evento que, ao digitar a temperatura, verifique se o valor ultrapassa 80°C. Se sim, exiba 'Alerta de 
// Superaquecimento!' em vermelho; caso contrário, exiba 'Temperatura Normal' em verde. 

const form = document.getElementById("temp");
const inputForm = document.getElementById("temperature");

const pAlert = document.getElementById("p-alert-temperature");
const showTemp = document.getElementById("p-temperature");

form.addEventListener("submit", (event) => {
    event.preventDefault();


    showTemp.textContent = inputForm.value
    showTemp.textContent += "Cº"

    if(Number(inputForm.value) > 80) {
        pAlert.removeAttribute("hidden");
    } else {
        pAlert.setAttribute("hidden")
    }
})
