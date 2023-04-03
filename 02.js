/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function stringMasLarga(strings) {
  // La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
  // y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
  // Ej:
  // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
  // stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'

  // Tu código aca: 
 
   /*cambio = true;
   while (cambio){
      cambio = false;
     for (i = 0 ; i < strings.length - 1 ; i++){
       if(strings[i].length > strings[i+1].length){
           var aux = strings[i];
           strings[i] = strings [i+1];
           strings[i+1]= aux;
           cambio = true;
         }
      }

   }
   let ultimo = strings.slice(-1).pop(); 
    return ultimo;*/

    /*cambio = true;
    while (cambio){
       cambio = false;
       for( i = 0 ; i < strings.length - 1 ; i++){
          if(strings[i].length > strings[i+1].length){
           var aux = strings[i];
           strings[i] = strings[i+1];
           strings[i+1]= aux
           cambio = true;
          }
        }
      }  
         let last = strings.slice(-1).pop();
         return last;*/
  
         /*let maslarga = strings.sort(function (a,b){ return a.length - b.length
        })
          return maslarga.slice(-1).pop();*/
          let maslarga = [];
          for( i = 0 ; i <strings.length ; i++){
          if(strings[i].length > strings[i+1]){
            maslarga.push(strings[i]);
          }
        } return maslarga.slice(-1).pop(); 


}

// No modifiques nada debajo de esta linea //

module.exports = stringMasLarga