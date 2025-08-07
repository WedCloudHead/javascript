let num = document.querySelector('input#numb')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function oNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}

function aLista(nu, li) {
    if (li.indexOf(Number(nu)) != -1) {
        return true
    } else {
        return false
    }

}

// as functions a cima podem ser adicionadas abaixo da function adicionar pois elas sao independentes por abrirem e fecharem escopos independentes e fazem içamento com a function adicionar.//

function adicionar() {
    if (oNumero(num.value) && !aLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já adicíonado na lista.')
    }
    numb.value = ''
    numb.focus()

}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for (var pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor é: ${maior}.</p>`
        res.innerHTML += `<p>O menor valor valor é: ${menor}. </p>`
        res.innerHTML += `<p>A soma dos valores é:${soma}. </p>`
        res.innerHTML += `<p>A média dos valores é:${media}</p>`

    }
}