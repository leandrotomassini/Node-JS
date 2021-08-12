const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, limite = 10) => {
  try {

    console.clear();
    const archivo = `salida/tabla-del-${base}-hasta-el-${limite}.txt`;
    
    let salida = "";
    let consola = "";

    for (let i = 1; i <= limite; i++) {
      salida  += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
    }

    if (listar) {
      console.log("==============================".underline.red);
      console.log('Tabla del'.green, colors.blue(base),'hasta el '.green, colors.blue(limite));
      console.log("==============================".underline.red);
      console.log(consola);
    }

    await fs.writeFileSync(archivo, salida);

    return `Tabla del ${base} hasta el ${limite} creada.`.green;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
