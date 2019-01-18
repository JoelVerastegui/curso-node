const { argv } = require('./config/yargs.js');
const { listar, crear, actualizar, eliminar } = require('./por-hacer.js')
const colors = require('colors')

switch (argv._[0]) {
    case 'listar':
        for (let tarea of listar(argv.c)) {
            console.log('===Tarea==='.white);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('========='.white);
        }
        break;
    case 'crear':
        crear(argv.d)
        console.log('Tarea creada correctamente');
        break;
    case 'actualizar':
        let tarea = {
            descripcion: argv.d,
            completado: argv.c
        }
        actualizar(tarea)
        break;
    case 'eliminar':
        eliminar(argv.d)
        break;
    default:
        console.log(argv);
}