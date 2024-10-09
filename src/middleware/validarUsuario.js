const validarUsuario = (req,res, next)=>{
    
    if (req.session.usuario !== undefined) {
        if (req.session.usuario.rol_id == 2) {
            return res.redirect('/usuario/datospersonales');
        }
    }

    if(!req.session.idUsuario){
        return res.redirect('/login');
    }

    next();
};



module.exports = validarUsuario;