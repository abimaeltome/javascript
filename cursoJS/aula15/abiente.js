var num = [1, 6, 7, 9, 8]

console.log(`O nosso vetor: [${num}] tem ${num.length} posições.`)//num.length exibe o tamanho do vetor num
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O ultimo valor do vetor é ${num[4]}`)
num.sort()//coloca o vetor num em ordem crescente
console.log(`O vetor em ordem crescente é:`, num)
num.push(2)//adiciona o valor 2 ao final do vetor num
console.log(`Acrescentando o valor 2 ao final do vetor fica assim:`, num)

/*
let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)
*/
let pos = num.indexOf(4)
if (pos==-1) {
    console.log('O valor não foi encontrado!')
    
} else {
    console.log(`O valor está na posição ${pos}`)
}
