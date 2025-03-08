import sumar from "./sumador.js";
import multiplicar from "./multiplicador.js";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");


const sumarButton = document.querySelector("#sumar-button");
const multiplicarButton = document.querySelector("#Multiplicar-button");


sumarButton.addEventListener("click", (event) => {
  event.preventDefault(); 
  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  
  if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    div.innerHTML = `<p>Resultado: ${sumar(firstNumber, secondNumber)}</p>`;
  } else {
    div.innerHTML = "<p>Ingresa números válidos</p>";
  }
});


multiplicarButton.addEventListener("click", (event) => {
  event.preventDefault(); 
  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  
  if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    div.innerHTML = `<p>Resultado: ${multiplicar(firstNumber, secondNumber)}</p>`;
  } else {
    div.innerHTML = "<p>Ingresa números válidos</p>";
  }
});
