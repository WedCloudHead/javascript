var agora = new Date()
var diaSem = agora.getDay()
console.log(diaSem)
switch(diaSem){
    case 0:
        console.log('domingada')
        break
    case 1:
        console.log('segundona')
        break
    case 2:
        console.log('terçona')
        break
    case 3:
        console.log('quarteta')
        break
    case 4:
        console.log('quintinha')
        break
    case 5:
        console.log('sextinha papai') 
        break
    case 6:
        console.log('sabs')
        break
    default:
        console.log('[erro] dia invalido')
        break
}