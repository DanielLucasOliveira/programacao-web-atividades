function somaNumArray(numeros){
    var soma = 0;

    for (let index = 0; index < numeros.length; index++) {
        soma += numeros[index];
        
    }
    return soma
}
soma = [1, 2, 3, 4, 5]
console.log(somaNumArray(soma));