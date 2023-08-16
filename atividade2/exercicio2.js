const matriz = [1, 2, 3, 4, 5, 6];

console.log("Matriz Original:");
for (let i = 0; i < matriz.length; i += 2) {
    console.log(matriz[i], matriz[i + 1]);
}

console.log("Matriz Transposta:");
for (let i = 0; i < 2; i++) {
    console.log(matriz[i], matriz[i + 2], matriz[i + 4]);
}
