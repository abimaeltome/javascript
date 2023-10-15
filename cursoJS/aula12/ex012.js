var agora = new Date()//VARIÁVEL agora RECEBE A DATA, HORA, MES, ANO ETC...
var hora = agora.getHours() // VARIÁVEL hora RECEBE A HORA DO SISTEMA
var minutos = agora.getMinutes() // VARIÁVEL minutos RECEBE os MINUTOS DO SISTEMA
console.log(`Agora são exatamente ${hora} horas e ${minutos} minutos.`)
if (hora<12) {
    console.log('Bom dia!')
    
} else if (hora <= 18){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}