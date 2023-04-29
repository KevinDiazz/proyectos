function checkCashRegister(price, cash, cid) {
  cid=cid.reverse()
  let cid2=[...cid]
  let array=[100,20,10,5,1,0.25,0.1,0.05,0.01]
  let devolucion=cash-price; 
  let total=0;
  let obj=[]
  
  for(let i=0;i<cid.length;i++){
   total+=cid[i][1] 
       }
       for(i=0;i<cid.length;i++){
   
       let operacion1=cid[i][1]/array[i]
       let operacion2=Math.floor(devolucion/array[i])
         
         if(operacion2==0){
          operacion1=0
         }
         if(operacion1>operacion2){
          operacion1=operacion2
         }
            devolucion-=operacion1*array[i]
            devolucion=devolucion.toFixed(2)
            cid[i][1]=operacion1*array[i]
               if(cid[i][1]>0){
                obj.push(cid[i]); 
                total-=cid[i][1]
                cid[i][1]=cid2[i][1] 
          }
       }
              
         if(devolucion<1 && total>1){
               return {
                  status:"OPEN",
                  change: obj
                       }

              }else if(devolucion==0 && total==0){
                  return {
                    status:"CLOSED",
                     change: cid.reverse()
              }
               }else{
                     return {
                      status:"INSUFFICIENT_FUNDS",
                      change: []
              }
          }
      }
  
 
 
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); 
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
