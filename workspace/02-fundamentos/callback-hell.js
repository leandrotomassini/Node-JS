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
  const empleado = empleados.find((e) => e.id === id);
  if (empleado) {
    callback(null, empleado);
  } else {
    callback(`Empleado con ${id} no existe.`);
  }
};

const getSalario = (id, callback) => {
  const salario = salarios.find((s) => s.id === id);

  if (salario) {
    callback(null, salario);
  } else {
    callback(`No existe salario para el id ${id}.`);
  }
};

const id = 3;

getEmpleado(id, (err, empleado) => {

  if (err) {
    console.log("ERROR");
    return console.log(err);
  }

  getSalario(id, (err, salario) => {

    if (err) {
      console.log("Error");
      console.log(err);
    } 
    
    console.log(`El empleado: ${ empleado.nombre }, tiene un salario de: ${salario.salario}`);
    

  });

});
