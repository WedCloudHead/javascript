
var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if( hora < 6 ){
    console.log('Boa madrugada!')
}else if ( hora < 12){
    console.log('Bom dia!')
}else if( hora < 18 ){
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}
    
/*var time = 8
console.log(`agora sao exatamente ${time} horas`)
if (time < 12){
    console.log('bom dia!')
}else if (time <= 18){
    console.log('boa tarde!')
}else{
    console.log('boa noite')
}*/


