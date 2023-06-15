function media() {
    let nom = window.prompt('Qual é o nome do aluno?')
    let n1 = Number(window.prompt(`Primeira nota do/a ${nom}?`))
    let n2 = Number(window.prompt(`Além de ${n1},outra nota do/a ${nom}?`))
    med = (n1 + n2)/2

    let msg 
    if (med >=6) {msg = 'Parabéns! :D'}
    else {msg = 'Estude mais um pouco! :P'}

    let res = document.getElementById('situacao')
    res.innerHTML = `<p>Calculando a média final de <mark>${nom}</mark>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.</p>`
    res.innerHTML += `<p>A média final será <mark>${med}</mark>.</p>`
    res.innerHTML += ` <p>A mensagem que temos é: <strong style='color:green;'>${msg}</strong></p>`
}