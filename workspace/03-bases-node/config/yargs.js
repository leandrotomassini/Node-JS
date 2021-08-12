const { boolean } = require("yargs");

const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    description: 'Base de la tabla de multiplicar.'
  })
  .option("l", {
    alias: "listar",
    type: boolean,
    demandOption: false,
    default: false,
    description: 'Listar en consola la tabla de multiplicar.'
  })
  .option(
    "h", {
      alias: 'hasta',
      type: "number",
      demandOption: false,
      default: 10,
      description: 'Hasta que número hay que multiplicar.'
    }
  )
  .check((argv, option) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número.";
    }
    return true;
  }).argv;

module.exports = argv;
