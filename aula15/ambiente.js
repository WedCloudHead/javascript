let num = [5, 8, 6, 7]
num[4] = 4
num.sort()
num.push(1)
console.log(num)
console.log(`o vetor ou array tem ${num.length} comprimentos ou elementos`)
console.log('<><><><><><><><><<>')
console.log(`O valor na posiçao 0 é o ${num[0]}`) 
console.log('<><><><><><><><><<>')
//abaixo esta a demo de como achar um valor especifico nos elementos 

var local = num.indexOf(5)
if (local == -1){
    console.log('O valor nao foi encontrado!')
}else {
    console.log(`O valor esta na posiçao ${local}`)

}