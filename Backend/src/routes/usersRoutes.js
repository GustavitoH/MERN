const express = require('express');
const UsuarioController = require('../controller/users.controller');

const api = express.Router();

//Routes
api.get('/usuarios', UsuarioController.listUsers);
api.get('/usuario', UsuarioController.searchUser);
api.post('/usuarios', UsuarioController.createUser);
api.post('/updateusuario', UsuarioController.updateUser);
api.post('/deleteusuario', UsuarioController.deleteUser);

module.exports = api;
