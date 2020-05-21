const mongoose = require('mongoose');
const cursoschema = require('./models/schema')
mongoose.connect('mongodb+srv://user:admin@cluster0-mi7h0.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const Curso = mongoose.model('Curso', cursoschema);



module.exports = controler = {
    async lista() {
        var arr = await Curso.find().then((response) => {
            return response
        }).catch(erro => {
            console.log(erro)
        })
        return arr
    },
    async listaIndice(id) {
        const cursoAtualizado = await Curso.find({ _id: mongoose.Types.ObjectId(id) }).then((response) => {
            return response
        }).catch(erro => {
            console.log(erro)
        })
        return cursoAtualizado
    },
    async adiciona(data) {
        const novoCurso = new Curso(data);
        await novoCurso.save().then((response) => console.log(response));
        return "Cadastrado com sucesso!"
    },
    async atualiza(data, id) {
        const cursoAtualizado = await Curso.findOneAndReplace({ _id: mongoose.Types.ObjectId(id) }, data).then((response) => {
            console.log(response)
        }).catch(erro => {
            console.log(erro)
        })
        return "Alterado com sucesso"
    },
    async deleta(id) {
        const deletaCurso = await Curso.findOneAndDelete({ _id: mongoose.Types.ObjectId(id) }).then((response) => {
            console.log(response)
        }).catch(erro => {
            console.log(erro)
        })
        return "Remoção de um curso por ID"
    },
    async buscaCurso(curso) {
        var curso = await Curso.find({ titulo: curso }).then((response) => {
            return response
        }).catch(erro => {
            console.log(erro)
        })
        return curso
    }
}