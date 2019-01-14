let saludo = (nombre, callback) => {
    let mensaje = `Buenas noches joven ${nombre}`;

    callback(mensaje);
}

saludo('Fabriccio', (m) => {
    console.log(m);
})