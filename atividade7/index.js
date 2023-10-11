const express = require('express');
const mustache = require('mustache-express');
const app = express();

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


app.use(express.urlencoded({extended: true}));


app.get('/', function(req, res){
    res.render('index.html')
})

app.post('/consulta', function(req, res){
    let dados_pessoais = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        dataNascimento: req.body.dataNascimento,
        uf: req.body.uf,
        endereco: req.body.endereco,
        cidade: req.body.cidade,
        tel: req.body.tel,
        email: req.body.email
    }

    res.render('consulta.html', {dados_pessoais});
})

const PORT = 8080;
app.listen(PORT, function(){
    console.log('app funcional na porta '+ PORT);
})