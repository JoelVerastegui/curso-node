const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('listar', 'Metodo para listar las tareas', { completado })
    .command('crear', 'Metodo para crear una tarea', { descripcion })
    .command('actualizar', 'Metodo para actualizar una tarea', { descripcion, completado })
    .command('eliminar', 'Metodo para eliminar una tarea', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}