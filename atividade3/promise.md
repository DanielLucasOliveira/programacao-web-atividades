Uma Promise é um objeto que representa um valor que pode estar disponível agora, no futuro ou nunca. Promises são usadas para lidar com operações assíncronas de maneira mais legível e organizada, permitindo que você trate o sucesso ou falha de uma operação de forma mais eficiente do que o uso tradicional de callbacks.

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