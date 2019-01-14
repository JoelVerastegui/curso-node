let empleados = [{
        id: 1,
        nombre: 'Micaela'
    },
    {
        id: 2,
        nombre: 'Matibas'
    },
    {
        id: 3,
        nombre: 'Jorge'
    }
]

let salarios = [{
        id: 1,
        salario: 4000
    },
    {
        id: 2,
        salario: 2000
    }
]

let getSalario = (id, callback) => {
    let empleadoDB = empleados.find(x => x.id == id);
    let salarioDB = salarios.find(x => x.id == id);

    if (!empleadoDB) {
        callback(`El id ${id} no existe`)
    } else {
        if (!salarioDB) {
            callback(`El empleado ${empleadoDB.nombre} no tiene un salario registrado`)
        } else {
            let empleado = {
                nombre: empleadoDB.nombre,
                salario: salarioDB.salario
            }

            callback(null, empleado)
        }
    }
}

getSalario(4, (err, empelado) => {
    if (err) {
        return console.log(err);
    }

    console.log(empelado);
})