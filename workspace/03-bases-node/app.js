const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('./config/yargs');

const base = argv.b;
const listar = argv.l;
const limite = argv.h;

crearArchivo(base,listar, limite)
.then((nombreArchivo) => console.log(nombreArchivo))
.catch((err) => console.log(err));