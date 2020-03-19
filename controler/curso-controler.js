var array = []

module.exports = curso = {
    lista() {
        return (array)
    },
    listaIndice(indice) {
        return array[indice]
    },
    adiciona(data) {
        array = [data]
        return "Cadastrado com sucesso"
    },
    atualiza(data) {
        array.push(data)
        return "Alterado com sucesso"
    },
    deleta() {
        array.pop()
        return "Remoção de um curso por ID"
    }
}