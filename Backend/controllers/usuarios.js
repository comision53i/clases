const {response, request} = require('express');
const Usuario = require('../models/usuario');

const usuariosGet = async (req=request, res=response) => {
    res.json({
        mensaje: "Usuarios obtenidos",
    })
}

const usuarioPost = async (req=request, res=response) => {
    res.json({
        mensaje: "Usuario creado correctamente",
    })
}

const usuarioPut = async (req=request, res=response) => {
    res.json({
        mensaje: "Usuario actualizado",
    })
}

const usuarioDelete = async (req=request, res=response) => {
    res.json({
        mensaje: "Usuario borrado",
    })
}

module.exports = {
    usuariosGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete
}