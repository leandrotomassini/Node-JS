const Role = require("../models/role");
const Usuario = require("../models/usuario");

const emailExiste = async (correo = "") => {
  const existeEmail = await Usuario.findOne({ correo });

  if (existeEmail) {
    throw new Error(`El correo ${correo} ya esta registrado.`);
  }
};

const existeUsuarioPorId = async (id) => {

  const existeUsuario = await Usuario.findById(id);

  if (!existeUsuario) {
    throw new Error(`El id  ${id} no existe.`);
  }
};

const esRoleValido = async (rol = "") => {
  const existeRol = await Role.findOne({ rol });
  if (!existeRol) {
    throw new Error(`El rol ${rol} no está registrado en la base de datos.`);
  }
};

module.exports = {
  esRoleValido,
  emailExiste,
  existeUsuarioPorId
};
