function convertToRoman(num) {
 let numeros={
 m:1000,
 cm:900,
 d:500,
 cd:400,
 c:100,
xc:90,
l:50, 
xl:40,
x:10,
ix:9,
v:5,
iv:4,
i:1,
}
let numero="";
let prop=[]
let valores=Object.keys(numeros);

for(i in numeros){
    prop.push(numeros[i])
}

for(i=0;num>0;i++){
    let prop2=(prop.filter(valor=> valor<=num))
    let valorDeIndex=prop.indexOf(prop2[0]);
    let valor=valores[valorDeIndex];
    numero+=valor; 
    num=num-prop2[0];
}

return numero.toUpperCase();
}

console.log(convertToRoman(20))




