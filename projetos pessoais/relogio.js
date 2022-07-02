var data = new Date()
var num = data.getMinutes()

function iniciarContagem(parametro) {
    param = parametro
    if (param == 0) {
        console.log('O contador está zerado')
    } else {
        console.log(`Tic : ${param} `)
        iniciarContagem(contar(param))
    }
}

function contar(parametro) {
    return parametro - 1
}

iniciarContagem(num)