const { Router } = require("express");

const { check } = require("express-validator");

const {
  obtenerProductos,
  obtenerProducto,
  actualizarProducto,
  borrarProducto,
  crearProducto,
} = require("../controllers/productos");

const { validarCampos, validarJWT, esAdminRole } = require("../middlewares");

const {
  existeCategoriaPorId,
  existeProductoPorId,
} = require("../helpers/db-validators");

const router = Router();

// Obtener todos los productos
router.get("/", obtenerProductos);

// Agregar un nuevo producto
router.post(
  "/",
  [
    validarJWT,
    check("nombre", "El nombre del producto es obligatorio.").not().isEmpty(),
    check("categoria", "No es un id de Mongo válido.").isMongoId(),
    check("categoria").custom(existeCategoriaPorId),
    validarCampos,
  ],
  crearProducto
);

// Obtener producto por su id
router.get(
  "/:id",
  [
    check("id", "No es un id de Mongo válido").isMongoId(),
    check("id").custom(existeProductoPorId),
    validarCampos,
  ],
  obtenerProducto
);

// Actualizar un producto
router.put(
  "/:id",
  [ 
    validarJWT,
    check("id").custom(existeProductoPorId),
    validarCampos,
  ],
  actualizarProducto
);

// Borrar un producto
router.delete(
  "/:id",
  [
    validarJWT,
    esAdminRole,
    check("id", "No es un id de Mongo válido.").isMongoId(),
    check("id").custom(existeProductoPorId),
    validarCampos,
  ],
  borrarProducto
);

module.exports = router;
