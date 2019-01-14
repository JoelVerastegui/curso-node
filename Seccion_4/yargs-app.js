const mult = require('./multiplicacion.js');
const file = require('./file-system.js');
const { argv } = require('./config/yargs.js')

switch (argv._[0]) {
    case 'listar':
        mult.listarTabla(argv.b, argv.l).then(data => {
            console.log(data);
        });
        break;
    case 'generar':
        mult.listarTabla(argv.b, argv.l).then(data => {
            file.generarArchivo(data, argv.b);
        });
        break;
    default:
        console.log('Ninguna accion relevante');
}