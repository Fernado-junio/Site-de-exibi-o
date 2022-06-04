
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

