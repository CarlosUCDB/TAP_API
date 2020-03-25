const controler = require('./controler/curso-controler')
var bodyParser = require('body-parser')

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;


app.listen(port)
app.use(bodyParser.json())
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
console.log('servidor ouvindo na porta ' + port);