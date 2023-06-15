function contagem() {
    let saida = document.getElementById('saida')
    let num = Number(document.getElementById('fnum').value)
    saida.innerHTML += `<h2>Contando de até ${num}</h2>`
    let cont = 0
    while (cont <= 100) {
        saida.innerHTML += `${cont} &#x1F449;`
        cont ++
    }
    saida.innerHTML += `&#x1F3c1;`
}