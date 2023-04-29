function quickSort([x=[],...array]){
return x.length==0? []:[...quickSort(array.filter(valor=>valor<=x))
    ,x,...quickSort(array.filter(valor=>valor>x))]
}
console.log(quickSort([5,3,4,2,9,8,7]))