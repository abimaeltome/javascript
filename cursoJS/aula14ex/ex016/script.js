function contar() {
    var inicio = window.document.querySelector('input#txtini')
    var fim = window.document.querySelector('input#txtfim')
    var passo = document.querySelector('input#txtpas')
    var resultado = document.querySelector('div#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        resultado.innerHTML = 'Faltam dados'
        
    } else {
        resultado.innerHTML = 'Contando: <br> '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1 ! ')
            p = 1   
        }
        if (i < f) {
            // CONTAGEM CRESCENTE
            for (let c = i; c <= f; c += p){
            resultado.innerHTML += ` ${c} \u{1F449} ` // \u{1F449} CÓDIGO DE EMOJI EM Javascrip

            }

           
        } else {
            // CONTAGEM REGRESSIVA
            for (let c = i; c >= f; c -= p){
                resultado.innerHTML += ` ${c} \u{1F448} ` // \u{1F448} CÓDIGO DE EMOJI EM Javascrip
            }


        }
        resultado.innerHTML += ` \u{1F3C1} `
    }

}




