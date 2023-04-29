//Funcion que recoge lista de inventario y suma los que sean iguales
//y añade nuevos elementos que no habia en el inventario
function updateInventory(arr1, arr2) {
  
    let array= arr1.concat(arr2)

    for(i=0;i<array.length;i++){
        for(j=i+1;j<array.length-1;j++){
        if(array[i][1]==array[j][1]){
            array[i][0]+=array[j][0]
            array[j]=[]
            console.log(array[i+1])
        }
      }   
    }

    for(k=0;k<array.length;k++){
       if(array[k][0]==undefined|false|| isNaN(array[k][0])){
        array.splice(k,1)
      }
    
    }
    
return array.sort(function(a,b){
     if(a[1]<b[1]){
        return -1
     }if(a[1]<b[1]){
        return 1
     }
    return 0

})
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];


updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])
updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]);
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [])