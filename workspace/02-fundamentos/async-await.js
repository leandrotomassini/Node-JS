const empleados = [
  {
    id: 1,
    nombre: "Leandro",
  },
  {
    id: 2,
    nombre: "Yamila",
  },
  {
    id: 3,
    nombre: "Pepe",
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 3000,
  },
];

const getEmpleado = (id, callback) => {
  return (promesa = new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id);
    empleado ? resolve(empleado) : reject(`El empleado id ${id} no existe.`);
  }));
};

const getSalario = () => {
  return (promesa = new Promise((resolve, reject) => {
    const salario = salarios.find((e) => e.id === id);
    salario
      ? resolve(salario)
      : reject(`No existe un salario para el empelado id ${id}.`);
  }));
};

const getInfoUsuario = async(id) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado ${empleado.nombre} es de $${salario.salario}.`;
    } catch (error) {
        throw error;
    }
}

const id = 3;

getInfoUsuario(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));


