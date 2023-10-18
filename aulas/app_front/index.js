const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const body_parser = require('body-parser')

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views')
app.use(body_parser.urlencoded({extended: true}));

app.get("/:nome", function(req, res){
    let nome = req.params.nome;
    res.render("index.html", {nome});
});

app.post("/formulario", function(req, res){
    let nome = req.body.nome
    let endereco = req.body.endereco
    let data = req.body.dataAgendamento
    let tel = req.body.tel
    res.render("formReceive.html", {nome, endereco, data, tel});
})

const PORT  = 8080;
app.listen(PORT, function(){
    console.log("app rodando na porta "+ PORT);
})
