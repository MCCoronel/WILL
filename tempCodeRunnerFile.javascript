function sumaTodosLosPrimos(array){

    let acumulador = 0;
    for(i=0 ; i < array.length ; i++){
        ValorActual = array[i];
        if(esPrimo(ValorActual)){
            acumulador += ValorActual
        }
    }
    return acumulador;
}

function esPrimo(num) {
     if (num === 2){
          return true;
     } else if (num < 2){
           return false;
     } for ( i = 2 ; i < num ; i++){
          if (num % i === 0){
             return false;
       }
    } return true;
     
    
 }


array = [2,2,1,8];
console.log (sumaTodosLosPrimos(array));