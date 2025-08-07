function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (Fano.value.length == 0 || Fano.value < 1925 || Number(Fano.value) > ano){
        window.alert('[Erro] tente uma data depois de 1925 e antes de 2025')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(Fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade < 11){
                //criança
                img.setAttribute('src', 'bebemenino.jpg')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovemhomem.jpg')
            }else if (idade < 55){
                //adulto
                img.setAttribute('src', 'homemadulto.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        }else if (fsex[1].checked){
            gênero = 'Mulher'
             if (idade >=0 && idade < 11){
                //criança
                 img.setAttribute('src', 'bebemenina.jpg')
            }else if (idade < 21){
                //jovem
                 img.setAttribute('src', 'mulherjovem.jpg')
            }else if (idade < 55){
                //adulto
                img.setAttribute('src', 'mulheradulta.jpg')
            }else {
                //idosa
                img.setAttribute('src', 'idosa.jpg')
            }
        /*}else if (fsex[2].checked){
            gênero = 'Bissexual'
             if (idade >=0 && idade < 11){
                //criança
                 //img.setAttribute('src', 'bebemenina.jpg')
            }else if (idade < 21){
                //jovem
                 //img.setAttribute('src', 'mulherjovem.jpg')
            }else if (idade < 55){
                //adulto
                //img.setAttribute('src', 'mulheradulta.jpg')
            }else {
                //idosa
               //img.setAttribute('src', 'idosa.jpg')
            }*/
        }
        res.style.textAling = 'center'
        res.innerHTML = `Foi dectado: ${gênero} com ${idade} anos `
        res.appendChild(img)
    }
}