let guanabara = {nome: 'Gustavo',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
        // essa palavra (this) é uma palavra de autorefencia ao objeto
    }

}
guanabara.engordar(2)
console.log(`${guanabara.nome} pesa ${guanabara.peso}Kg`)