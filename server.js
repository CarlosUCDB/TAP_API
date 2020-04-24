const controler = require('./controler/curso-controler')
const usuarioControler = require("./controler/usuario-controler")
var bodyParser = require('body-parser')

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;


app.listen(port)
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    next();
});
app.get("/cursos", async(req, res) => {
    res.send(await controler.lista())
})
app.post("/cursos", async(req, res) => {
    res.send(await controler.adiciona(req.body))
})
app.put("/cursos/:id", async(req, res) => {
    res.send(await controler.atualiza(req.body, req.params.id))
})
app.delete("/cursos/:id", async(req, res) => {
    res.send(await controler.deleta(req.params.id))
})
app.get("/cursos/:id", async(req, res) => {
    res.send(await controler.listaIndice(req.params.id))
})
app.get("/usuario/:email", async(req, res) => {
    res.send(await usuarioControler.lista(req.params.email))
})
app.post("/usuario", async(req, res) => {
    res.send(await usuarioControler.adiciona(req.body))
})

app.post("/gerartoken", async(req, res) => {
    res.send(await usuarioControler.geraToken(req.body))
})

console.log('servidor ouvindo na porta ' + port);