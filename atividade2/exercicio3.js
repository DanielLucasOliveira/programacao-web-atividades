const matrizUm = [1, 2, 3, 4, 5, 6]
const matrizDois = [5, 5, 5, 5 ,5, 5]
if(matrizUm.length != matrizDois.length){
    console.log("Matrizes de tamanho diferente, não é possível calcular");
    return false;
}
for(i = 0; i < matrizUm.length; i++){
    console.log(`Resultado da multiplicação da Matriz A e B = ${matrizUm[i] * matrizDois[i]}`);
}