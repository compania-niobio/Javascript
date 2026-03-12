var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var dia = agora.getDate()
var mes = agora.getMonth() + 1
var ano = agora.getFullYear()
console.log(`Agora são exatamente ${hora} horas e ${minuto} minutos.`)
console.log(`Data: ${dia}/${mes}/${ano}`) 
if (hora < 12) {
    console.log('Bom dia!')
}
else if (hora <= 18) {
    console.log('Boa tarde!')
}
else {
    console.log('Boa noite!')
}