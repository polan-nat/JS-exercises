let res = document.querySelector('section#imc')
const calcular = document.getElementById('calcular')

function calc() 
{
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    const imc =  peso / (altura * altura);

    let classe = '';

    if (nome != '' && peso != '' && altura != '') 
    {
       if (imc < 18) {
           classe = `peso abaixo do ideal`;
       }
        else if (imc > 18 && imc < 24) {
           classe = `peso ideal`;
       } 
       else if (imc > 25 && imc < 29) {
           classe = `acima do peso`;
       } 
       else if (imc > 30 && imc < 34) {
           classe = `obesidade 1° grau`;
       }
       else if (imc > 35 && imc < 39) {
           classe = `obesidade 2° grau`;
       } 
       else {
           classe = `obesidade mórbida`;
       }
      res.textContent = `${nome}, seu imc é ${imc}, classificação:${classe}`;
    } 
    else {
        res.textContent = `Preencha os campos!`;
    }
} 

calcular.addEventListener('click', calc);