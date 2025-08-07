function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pass = document.getElementById('txtp')
    var res = document.getElementById('res')
//usar var ou let sao a mesma coisa na declaraçao 
    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
        window.alert('[ERRO!] Faltam dados a serem preenchidos!')
    }else {
        res.innerHTML = 'Contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)
        if (p <0){
            window.alert('passo invalido!')
            p = 1
        }
        if(i < f) {
            //contagem crescente
          for(c = i;  c <= f;  c += p) {
             res.innerHTML += ` ${c} \u{1F449}, `
            }
        
        }else{
            //contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}, `
            }

        }
        res.innerHTML += `\u{1F3C1}`
    }


}