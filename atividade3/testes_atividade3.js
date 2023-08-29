// Criando uma Promise que simula uma operação assíncrona
const minhaPromise = new Promise((resolve, reject) => {
    // Simulando um atraso de 2 segundos
    setTimeout(() => {
        const sucesso = true; // Simulação de sucesso
        if (sucesso) {
            resolve("Operação concluída com sucesso!");
        } else {
            reject("A operação falhou!");
        }
    }, 2000);
});

// Usando a Promise
minhaPromise.then(resultado => {
    console.log(resultado); // Saída em caso de sucesso
}).catch(erro => {
    console.error(erro); // Saída em caso de falha
});


//Arrow function:

const soma = (a, b) => a + b;


console.log(soma(2, 2));