// Funcion para sacar la diferencia simetria entre diferentes arrays 

function sym(...args) {
let array=args
let simetry=[];
let k=1;
let result;
 for(i=0;i<array.length-1;i++){
    array[i+1]=new Set(array[i+1])
    array[i+1]=Array.from(array[i+1])
    
    for(j=0;j<array[i].length;j++){
        if(array[k].includes(array[i][j])==true){
            let index=array[k].indexOf(array[i][j])
            delete(array[i][j]) ;console.log(array)
            delete(array[k][index])
        }
         if(array[k].includes(array[i][j])==false){
            if(!simetry.includes(array[i][j])){
            simetry.push(array[i][j])
            }
        }
        
    }

    k++
    array[i+1].push(...simetry)
    simetry=[]
    array[i+1]=array[i+1].filter(valor=>valor!==undefined) 
    result=new Set(array[i+1])
    result=Array.from(result)
    
    }; 
     
    return result.sort() 
  

}


console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));