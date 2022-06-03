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

