const { response, request } = require("express");
const bcryptjs = require("bcryptjs");

const Usuario = require("../models/usuario");

const usuariosGet = async (req = request, res = response) => {
  const { limite = 5, desde = 0 } = req.query;
  const query = { estado: true };

  const [total, usuarios] = await Promise.all([
    Usuario.countDocuments(query),
    Usuario.find(query).skip(Number(desde)).limit(Number(limite)),
  ]);

  res.status(403).json({
    total,
    usuarios,
  });
};

const usuariosPost = async (req, res) => {
  const { nombre, correo, password, rol } = req.body;
  const usuario = new Usuario({ nombre, correo, password, rol });

  // Encriptar la contraseña
  const salt = bcryptjs.genSaltSync(15);
  usuario.password = bcryptjs.hashSync(password, salt);

  // Guardar en la DB
  await usuario.save();

  res.json({
    usuario,
  });
};

const usuariosDelete = async (req, res) => {
  const { id } = req.params;

  // Físicamente lo borramos
  const usuario = await Usuario.findByIdAndUpdate(id, { estado: false });

  res.status(403).json(usuario);
};

const usuariosPut = async (req, res = response) => {
  const { id } = req.params;
  const { _id, password, google, correo, ...resto } = req.body;

  // TODO: Validar contra base de datos

  if (password) {
    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync(15);
    resto.password = bcryptjs.hashSync(password, salt);
  }

  const usuario = await Usuario.findByIdAndUpdate(id, resto);

  res.json(usuario);
};

const usuariosPatch = (req, res) => {
  res.status(403).json({
    msg: "Patch API - Controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPatch,
  usuariosDelete,
  usuariosPost,
  usuariosPut,
};
