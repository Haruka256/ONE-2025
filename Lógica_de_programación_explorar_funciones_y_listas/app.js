//Manipulando el DOM ---> Document Object Model
let titulo = document.querySelector('H1')
/**
 * 1. Declaramos una variable con el nombre Titulo.
 * 2. Utilizamos 'document' para seleccionar TODO el documento HTML con el que estamos trabajando.
 * 3. El metodo '.querySelector()' se encarga, mediante su(s) parametro(s) de entrada, de seleccionar los elementos basandose en selectores como los que maneja CSS (etiquetas, ID's, Clases). Aunado a esto, hay que tener en cuenta que se seleccionara el primer elemento que encuentre el interpretador.
 * 4. Al indicar la etiqueta H1 (etiqueta de titulo principal) dentro del parametro de querySelector quiere decir que se ha seleccionado el primer elemento 
 */
titulo.innerHTML = 'Adivina el numero secreto'
/**
 * 5. Ahora, con la variable titulo ya establecida como el titulo H1 de nuestro documento HTML (pagina web) seleccionada procedemos a utilizar el metodo 'innerHTML' el cual se utiliza para manipular (leer, y editar) el contenido del elemento previamente seleccionado
 * 6. En este caso, reemplazaremos el contenido del elemento (el texto en este caso del H1) por el texto a la derecha del signo de igual
 * 7. Al final, la interaccion entre el JS y el HTML por medio del DOM se vera reflejada en la misma vista en vivo de la pagina
 */
let parrafo = document.querySelector('p')
parrafo.innerHTML = 'Escoge un numero del 1 al 10'

function intentoUsuario() {
  alert('Funciona bien el botón')
}

