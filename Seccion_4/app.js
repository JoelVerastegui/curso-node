const fs = require('fs');
const mult = require('./multiplicacion.js')


let multiplicar = async(base) => {
    let data = await mult.obtenerData(base);

    fs.writeFile(`../tabla-${base}.txt`, data, (err) => {
        if (err) {
            throw new Error(`Mi error es: ${err}`)
        }
    })

    return `La tabla del ${base} ha sido generada`;
}

multiplicar(2).then(resp => {
        console.log(resp);
    })
    .catch(err => { console.log(err); })