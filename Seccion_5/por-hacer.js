const fs = require('fs')

var tareas = []

const cargarDB = () => {
    try {
        tareas = require('./db/database.json')
    } catch (error) {
        tareas = []
    }
}

const listar = (completado = undefined) => {
    cargarDB();
    if (completado == undefined) {
        return tareas;
    } else {
        completado = completado == "true" ? true : false;
        if (completado) {
            return tareas.filter(x => x.completado == true)
        } else {
            return tareas.filter(x => x.completado == false)
        }
    }
}

const crear = (descripcion) => {

    cargarDB();

    let tarea = {
        descripcion,
        completado: false
    }

    tareas.push(tarea);

    fs.writeFile('./db/database.json', JSON.stringify(tareas), () => {
        return tarea;
    })

}

const actualizar = (update) => {
    cargarDB();

    let index = tareas.findIndex(x => x.descripcion == update.descripcion)

    if (index >= 0) {
        tareas[index].completado = update.completado == "true" ? true : false;
        fs.writeFile('./db/database.json', JSON.stringify(tareas), () => {
            console.log(`La tarea [${update.descripcion}] se ha actualizado correctamente`);
        })
    } else {
        console.log(`La tarea especificada [${update.descripcion}] no existe`);
    }
}

const eliminar = (descripcion) => {
    cargarDB();

    let tareas2 = tareas.filter(x => x.descripcion != descripcion)

    if (tareas2.length != tareas.length) {
        fs.writeFile('./db/database.json', JSON.stringify(tareas2), () => {
            console.log(`La tarea [${descripcion}] ha sido eliminada`);
        })
    } else {
        console.log(`La tarea [${descripcion}] no existe`);
    }
}

module.exports = {
    listar,
    crear,
    actualizar,
    eliminar
}