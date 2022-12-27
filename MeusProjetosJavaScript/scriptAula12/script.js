function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 18
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12 ) {
        //Bom Dia!
        img.src = 'imagensAula12/manhafinal.png'
        document.getElementsByTagName("body")[0].style = 'background-image:url("imagensAula12/bmanha.jpg");'
    } else if (hora >= 12 && hora <= 18){
        //Boa Tarde!
        img.src = 'imagensAula12/tardefinal.png'
        document.getElementsByTagName("body")[0].style = 'background-image:url("imagensAula12/btarde.jpg");'
    } else {
        //Boa Noite!
        img.src = 'imagensAula12/noitefinal.png'
        document.getElementsByTagName("body")[0].style = 'background-image:url("imagensAula12/bnoite.jpg");'
    }
}
