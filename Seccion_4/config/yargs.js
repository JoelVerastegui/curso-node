const opt = {
    base: {
        alias: 'b',
        default: 2
    },
    limite: {
        alias: 'l',
        default: 12
    }
}

const argv = require('yargs').command('listar', 'Lista en consola la tabla de multiplicar', opt)
    .command('generar', 'Genera un archivo de la tabla de multiplicar', opt)
    .help()
    .argv;

module.exports = { argv }