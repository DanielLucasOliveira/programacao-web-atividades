const calculadora = require('../calculadora/calculadora');

function pagina(req, res){
    res.render('index.html');
}

function calcular(req, res) {
    const operacao = req.params.operacao;
    let resultado;

    if (operacao === '+') {
        resultado = calculadora.somar();
    } else if (operacao === '-') {
        resultado = calculadora.subtrair();
    } else if (operacao === '*') {
        resultado = calculadora.multiplicar();
    } else if (operacao === '/') {
        resultado = calculadora.dividir();
    } else {
        // Lida com uma operação desconhecida ou inválida, você pode redirecionar ou mostrar uma mensagem de erro.
        res.status(400).send('Operação desconhecida');
        return;
    }

    res.render('calcular.html', { resultado: resultado });
    

}

module.exports = {
    pagina,
    calcular
};