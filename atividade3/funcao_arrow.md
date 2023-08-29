Uma arrow function em JavaScript é uma sintaxe mais concisa e conveniente para criar funções. Ela é especialmente útil quando você precisa de uma função de curta duração ou uma função simples, como uma função de retorno em uma função de ordem superior.

Ela também possui uma diferença que é em relação ao "this" da função. Ela só consegue acessar o this se a variável foi declarada no mesmo escopo.



função normal:

function soma(a, b) {
  return a + b;
}


Arrow function:

const soma = (a, b) => a + b;


soma()