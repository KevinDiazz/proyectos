function quickSort([x=[],...array]) {
    // Only change code below this line
   return x.length===0 ? []:[...quickSort(array.filter(valor=> valor<=x)),x,
   ...quickSort(array.filter(valor=> valor>x))]

 
   
  
    // Only change code above this line
  }