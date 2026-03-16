
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
 //ar hora = 22
     var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora>=0 && hora < 12) {
        //BOM DIA!
        img.src = '../midia/fotos/logo_sem_fundo/3.png'
        document.body.style.background = '#9a7234'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = '../midia/fotos/logo_sem_fundo/2.png'
        document.body.style.background = '#d17802'
    } else {
        //BOA NOITE!
        img.src = '../midia/fotos/logo_sem_fundo/1.png'
        document.body.style.background = '#0065a0'
    }
}