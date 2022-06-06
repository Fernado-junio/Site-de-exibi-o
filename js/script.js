function not() {
    document.getElementById('notificacao').innerHTML = `<div id="not" style="position: absolute;color:white; opacity: 100; top: 10%; left: 0; background-color: red; width: 220px; height: 50px; border-radius: 15px; text-align: center; transition: 0.5s;"><span style="text-align: center; position: relative; top: 8px;">Este site não esta finalizado e pode apresentar defeitos</span></div>`
    setInterval(()=>{document.getElementById('not').style.left = "-100%";document.getElementById('not').style.opacity = '0'},3500)
}


var abrir = document.getElementById('abrir')
var fechar = document.getElementById('fechar')
var clicks = 1
function categorias(){
    clicks++
    if (clicks == 0) {
        abrir.style.display = 'none'
        fechar.style.display = 'inline'
    }
    if (clicks == 1) {
        abrir.style.display = 'inline'
        fechar.style.display = 'none'
    }
    if (clicks == 2) {
        abrir.style.display = 'none'
        fechar.style.display = 'inline'
        clicks = 0
    }
}







function idade(dia, mes, ano) {
    let idadeAno = new Date().getFullYear() - ano;
    var Mes = new Date().getMonth() + 1
    var Dia = new Date().getDate()
    if (mes > Mes || mes == Mes && dia > Dia) {
        return idadeAno - 1
    }

    if (mes == Mes && dia < Dia || mes == Mes && dia == Dia || mes < Mes) {
        return idadeAno
    }
}

