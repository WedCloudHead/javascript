let valores = [5, 4, 8, 6, 7, 9, 3]
console.log(valores)
valores.sort()
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posiçao ${pos} tem o valor na posiçao ${valores[pos]}`)
}

console.log('<<><><><><><><><><><><><><>')

let num = [55, 80, 44, 77, 99]
console.log(num)
num.sort()
for (let pos in num) {
    console.log(`A posiçao ${pos} tem o valor ${num[pos]}`)
}
//as duas formas sao as mesmas no momento de declarar variaveis compostas usando for  
console.log('<><><><><><><><><><><>><>')

var val = [45, 56, 78, 90, 12]
console.log(val)
for (var pos in val) {
    console.log(`A posiçao ${pos} tem o valor ${val[pos]}`)
    console.log('----------------------')
    var cod = val.indexOf(56)
    if (pos == -1) {
        console.log('o valor nao foi encontrado')
    } else {
        console.log(`O valor esta na posiçao ${pos}`)
    }
}
function parimp(n){
    if (n % 2 == 0){
        return 'par'
    }else {
        return 'impar'
    }
}
let res = parimp(11)

/*
num[numero] = numero: vai posisionar uma vaga e o valor da vaga.
num.push(numero): vai colocar um valor sempre na ultima vaga.
num.length: vai me dar o valor total de todos os numeros e vagas. (length é atributo)
num.sort(): vai posicionar por ordem crescente todos os numeros nas vagas.
num.log(): vai me mostrar na tela a execussao do codigo.
num.indexOf(numero): é o comando que faz o JS buscar o numero deejado.(qualquer um)
*/
