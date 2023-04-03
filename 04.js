/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true
  // Tu código:
  let numstring = num.toString().split('').reverse().join('');
   if(num == numstring){
    return true;
   } return false;
  
  // Primero convierto el numero en una variable de tipo string con El método split() divide un objeto
  // de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas,
  // con reverse, invierto el orden de los elementos del aaray y con join uno todos los elementos.
  
  let numSimet =  num.toString().split("").reverse(). join ("");
   if (num == numSimet){
    return true;
   } return false;

}

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico