//Funcion que debe buscar el valor de arg con la suma de los valores del array.
//estos solo se pueden sumar una vez.

function pairwise(arr, arg) {
    let arr2=[...arr]
    let total=0;
    for(i=0;i<arr2.length;i++){
        for(k=i+1;k<arr2.length;k++){
            if(arr2[i]+arr2[k]==arg){
              arr2[k]=NaN
              total+=i+k
              break;
            }
           
        }
      
    }
    return total;  
  }
  
  console.log(pairwise([0, 0, 0, 0, 1, 1], 1))
  console.log(pairwise([1, 1, 1], 2))