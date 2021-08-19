const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  const { q, nombre = "No name", apikey, page = 1, limit = 10 } = req.query;

  res.status(403).json({
    msg: "Get API - Controlador",
    q,
    nombre,
    apikey,
    page,
    limit,
  });
};

const usuariosPut = (req, res) => {
  const id = req.params.id;

  res.json({
    msg: "Put API - Controlador",
    id,
  });
};

const usuariosPost = (req, res) => {
  const { nombre, edad } = req.body;

  res.status(201).json({
    msg: "Post API - Controlador",
    nombre,
    edad,
  });
};

const usuariosDelete = (req, res) => {
  res.status(403).json({
    msg: "Delete API - Controlador",
  });
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
