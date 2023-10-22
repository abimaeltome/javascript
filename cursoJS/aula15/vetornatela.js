let valores = [2, 4, 7, 1, 9]
console.log(valores)
/*

//PARA EXIBIR O VETOR

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])

//OU PODO SER FEITO ASSIM

for (let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

// OU PODE SER FEITO ASIM

for(let pos in valores){// para cada posição em(dentro de) valores mostramos...
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}