const validarUsuario = (req,res, next)=>{
    

    if(!req.session.idUsuario){
        return res.redirect('/login');
        console.log(idUsuario);
    }

    if (req.session.usuario !== undefined) {
        if (req.session.usuario.rol_id == 2) {
            return res.redirect('/usuario');
            console.log(usuario);
        }
    }

    next();
};

module.exports = validarUsuario;