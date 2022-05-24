let res = document.querySelector('#res')

function inserir(N) {
    res.innerHTML += N
    
}

function limpar() {
    res.innerHTML = ''
}

function voltar() {
    let result = document.getElementById('res').innerHTML
    res.innerHTML = result.substring(0, result.length - 1)
    
}

function calc() {
    if (res.innerHTML) {
        let result = document.getElementById('res').innerHTML
        res.innerHTML = eval(result)

    }
}