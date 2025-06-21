const pesoInput = document.querySelector("#peso");
const altInput = document.querySelector("#altura");
const button = document.querySelector("#enviar");
const textoimc = document.querySelector("#imc");

button.addEventListener('click', function(event){
    event.preventDefault();
    const pesoValue = parseFloat(pesoInput.value.replace(",", "."));
    const altValue = parseFloat(altInput.value.replace(",", "."));

    

    if(!isNaN(pesoValue) && !isNaN(altValue) && altValue > 0){
        const alturaM = altValue / 100;
        const imc = pesoValue / (alturaM * alturaM);

        textoimc.textContent = `Seu IMC é ${imc.toFixed(2)}`;
        
        setTimeout(() => {
            textoimc.textContent = "";
            pesoInput.value = "";
            altInput.value = "";
        }, 3000);
        return;
    }else{
        textoimc.textContent = "Valor digitado inválido!";
        
        setTimeout(() => {
            textoimc.textContent = "";
            pesoInput.value = "";
            altInput.value = "";
        }, 3000);
        return;
    }
})