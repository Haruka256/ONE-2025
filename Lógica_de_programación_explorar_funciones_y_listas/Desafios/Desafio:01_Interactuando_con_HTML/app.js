//1. Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
let titulo = document.querySelector('h1')
titulo.innerHTML = "Hora del Desafío"

//2. Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
function consoleButtonClick() {
  console.log("El botón fue clickado")
}

//3. Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
function promptFunction() {
  let ciudadBrasil = prompt('Indique el nombre de la ciudad: ')
  alert(`Estuve en ${ciudadBrasil} y me acorde de ti`)
}

//4. Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
function alertaJs() {
  alert('Yo amo JS')
}

//5. Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function suma() {
  let num1 = prompt('Ingresa el primer numero: ')
  num1Parseado = parseInt(num1)
  let num2 = prompt('Ingresa el segundo numero: ')
  num2Parseado = parseInt(num2)
  if(!isNaN(num1Parseado) && !isNaN(num2Parseado)) {
    alert(num1Parseado + num2Parseado)
  } else {
    alert('Ingrese SOLO numeros en ambos casos por favor')
  }
}