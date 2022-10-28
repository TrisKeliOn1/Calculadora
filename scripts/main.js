function calcular(n1, n2){
    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parseFloat(document.getElementById("n2").value)

    selector = document.getElementById("selector").value

    switch(selector){
        case '+':
            calculo = (n1 + n2)
            document.getElementById("resultado").innerHTML = `O resultado de uma soma de ${n1} + ${n2} é = ${calculo}`
            break;
        case '-':
            calculo = (n1 - n2)
            document.getElementById("resultado").innerHTML = `O resultado de uma subtração de ${n1} - ${n2} é = ${calculo}`
            break;
        case '*':
            calculo = (n1 * n2)
            document.getElementById("resultado").innerHTML = `O resultado de uma multiplicação entre ${n1} * ${n2} é = ${calculo}`
            break;
            case '/':
                calculo = Math.round((n1 / n2))
                if(Number.isNaN(calculo)){
                    document.getElementById("resultado").innerHTML = `Insira uma divisão válida`
                } else {
                    document.getElementById("resultado").innerHTML = `O resultado de uma divisão entre ${n1} / ${n2} é = ${calculo}`
                    break;
                }
    }
}