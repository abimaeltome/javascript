function fatorial(n) { // calcula o fatorial de n
    let fat = 1
    for (let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))