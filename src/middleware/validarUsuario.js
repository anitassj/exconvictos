const validarUsuario = (req,res, next)=>{
    console.log("Verificando sesión:", req.session);
    if (!req.session.idUsuario) {
        console.log("No se encontró idUsuario en la sesión, redirigiendo a login");
        return res.redirect('/login');
    }
    console.log("Sesión válida, idUsuario:", req.session.idUsuario);
    next();
};



module.exports = validarUsuario;