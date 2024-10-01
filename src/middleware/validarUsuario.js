const express = require("express");

module.exports = validarUsuario = (req,res, next)=>{
    console.log("middleware de validar usuario");
    if(!req.session.idUsuario){
        return res.redirect('/login');
        
    }
    if(!req.session.idUsuario) {
        console.log("error al validar el usuario");
    }
    next();
};



module.exports = validarUsuario;