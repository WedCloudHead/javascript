function carregar(){
   var msg = window.document.getElementById('msg')
   var img = window.document.getElementById('imagem')
   var data = new Date()
   var hora = data.getHours()
   msg.innerHTML = `Agora são ${hora} horas.`
   if (hora >= 6 && hora < 12) {
    img.src = 'fotomanha.png'
    document.body.style.background = '#ad4218'
   }else if (hora >=0 && hora < 6){
      img.src = 'fotomadrugada.png'
      document.body.style.background = '#b28d69'
   }else if (hora >= 12 && hora < 18){
    img.src = 'fototarde.png'
    document.body.style.background = '#a09a90'
   }else {
    img.src = 'fotonoite.png'
    document.body.style.background = '#ee692e'
   }
}
