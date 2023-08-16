const matriz = [1, 2, 3, 4, 5, 6]
for(let i = 0; i < matriz.length; i += 2){
    console.log(matriz[i], matriz[i + 1]);
}
console.log("Transposta: ");
for(let i = 0; i < matriz.length; i += 3){
    console.log(matriz[i], matriz[i + 1], matriz[i + 2]);
}