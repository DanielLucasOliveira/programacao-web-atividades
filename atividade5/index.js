const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const bodyParser = require("body-parser");


app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views')
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
    
    res.render("index.html");
});

app.post("/formulario", function(req, res){
    let nome = req.body.nome
    let endereco = req.body.endereco
    let data = req.body.dataAgendamento
    data = new Date(data);
    data = data.toLocaleDateString();
    let tel = req.body.tel
    res.render("formReceive.html", {nome, endereco, data, tel});
})

const PORT  = 8080;
app.listen(PORT, function(){
    console.log("app rodando na porta "+ PORT);
})
