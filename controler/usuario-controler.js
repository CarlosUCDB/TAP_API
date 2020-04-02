const mongoose = require('mongoose');
const usuarioSchema = require('./models/usuarioSchema')
mongoose.connect('mongodb+srv://user:admin@cluster0-mi7h0.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = usuarioControler = {
    async lista(email) {
        var arr = await Usuario.find({ email: email.email }).then((response) => {
            if (response.length != 0)
                return { "mensagem": "Usuário Existente" }
            else
                return { "mensagem": "Usuário não Existente" }
        });
        return arr
    },
    async adiciona(data) {
        const novousuario = new Usuario(data);
        await novousuario.save().then((response) => console.log(response));
        return { status: 200 }
    }
}