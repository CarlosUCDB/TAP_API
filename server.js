const controler = require('./controler/curso-controler')
var bodyParser = require('body-parser')

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;


app.listen(port)
app.use(bodyParser.json())
app.get("/cursos", (req, res) => {
    res.json(controler.lista())
})

app.post("/cursos", (req, res) => {
    res.send(controler.adiciona(req.body))
})

app.put("/cursos", (req, res) => {
    res.send(controler.atualiza(req.body))
})


app.delete("/cursos", (req, res) => {
    res.send(controler.deleta())
})

app.get("/cursos/:indice", (req, res) => {
    res.send(controler.listaIndice(req.params.indice))
})
console.log('servidor ouvindo na porta ' + port);