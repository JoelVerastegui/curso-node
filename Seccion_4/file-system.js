const fs = require('fs');
const colors = require('colors');

let generarArchivo = async(data, base) => {
    fs.writeFile(`../tablas/tabla-del-${base}.txt`, data, () => {
        console.log(`La tabla del ${base} ha sido generada`.white);
    })
}

module.exports = {
    generarArchivo
}