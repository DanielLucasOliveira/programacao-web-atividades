function multiplicacao(n1, n2) {
    operacao = "multiplicacao" 
    result = n1 * n2   
    console.log(`Resultado da ${operacao} entre ${n1} e ${n2} = ${result}`);
}

function divisao(n1, n2){
    operacao = "divisão"
    result = n1 / n2
    console.log(`Resultado da ${operacao} entre ${n1} e ${n2} = ${result}`);
}

function adicao(n1, n2){
    operacao = "adição"
    result = n1 + n2
    console.log(`Resultado da ${operacao} entre ${n1} e ${n2} = ${result}`);
}

function subtracao(n1, n2){
    operacao = "subtração"
    result = n1 - n2 
    console.log(`Resultado da ${operacao} entre ${n1} e ${n2} = ${result}`);
}

function calcula(){
    var num = 20
    var numDois = 4
    subtracao(num, numDois);
    adicao(num, numDois);
    multiplicacao(num, numDois);
    divisao(num, numDois)
}

resposta = calcula()



