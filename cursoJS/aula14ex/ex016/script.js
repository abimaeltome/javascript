function contar() {
    var inicio = window.document.querySelector('input#txtini')
    var fim = window.document.querySelector('input#txtfim')
    var passo = document.querySelector('input#txtpas')
    var resultado = document.querySelector('div#res')
    do {
        resultado = inicio += passo
        res.innerHtml = `Contando:<br> ${resultado}` 
    } while (resultado < fim);

    
}




