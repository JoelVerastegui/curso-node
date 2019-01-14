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

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleado = empleados.find(x => x.id == id);

        if (empleado) {
            resolve(empleado);
        } else {
            reject(`El empleado con el codigo ${id} no existe`)
        }
    });
}

getEmpleado(2).then((empleado) => {
        console.log(`Bienvenido ${empleado.nombre}`);
        return getEmpleado(6)
    })
    .then(empleado => {
        console.log(`Bienvenido ${empleado.nombre}`);
    })
    .catch(err => {
        console.log(err);
    })