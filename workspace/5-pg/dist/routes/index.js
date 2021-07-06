"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../controllers/index");
const router = express_1.Router();
router.get('/users', index_1.getUsers);
router.get('/users/:id', index_1.getUserById);
router.post('/users', index_1.createUser);
router.put('/users/:id', index_1.updateUser);
router.delete('/users/:id', index_1.deleteUser);
exports.default = router;
