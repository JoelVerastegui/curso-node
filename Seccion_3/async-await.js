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

let getEmpleado = async(id) => {
    let empleado = empleados.find(x => x.id == id)

    if (!empleado) {
        throw new Error(`El usuario con el id ${id} no existe`)
    } else {
        return empleado;
    }
}

let getSalario = async(id) => {
    let salario = salarios.find(x => x.id == id);

    if (!salario) {
        throw new Error(`El salario del usuario con el id ${id} no existe`)
    } else {
        return salario;
    }
}


/*
let getSalario = (id) => {

    return new Promise((resolve, reject) => {

        let salario = salarios.find(x => x.id == id);

        if (!salario) {
            reject(`El salario del usuario con el id ${id} no existe`)
        } else {
            setTimeout(() => {
                resolve(salario);
            }, 3000);
        }
    });

}
*/

let getMessage = async(id) => {
    let empleado = await getEmpleado(id);
    let salario = await getSalario(id);

    let mensaje = {
        nombre: empleado.nombre,
        salario: salario.salario,
        id
    }

    return mensaje;
}

getMessage(10).then(mensaje => {
        console.log(mensaje);
    })
    .catch(err => { console.log(err); })