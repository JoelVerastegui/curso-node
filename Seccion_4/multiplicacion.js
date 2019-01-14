let obtenerData = async(base) => {
    var data = '';

    for (let i = 1; i <= 10; i++) {
        data += `${base} * ${i} = ${base * i} \n`;
    }

    return data;
}

let listarTabla = async(base, limite) => {
    var data = '';

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base*i} \n`;
    }

    return data;
}


module.exports = {
    obtenerData,
    listarTabla
}