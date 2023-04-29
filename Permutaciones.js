function pairwise(arr, arg) {
    let total=0;
    for(i=0;i<arr.length;i++){
        for(k=i+1;k<arr.length;k++){
            if(arr[i]+arr[k]==arg){
            total+=i+k
            }
            break
        }
      
    }
    return total;  
  }
  
  console.log(pairwise([0, 0, 0, 0, 1, 1], 1))