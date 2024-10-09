const validarUsuario = (req,res, next)=>{
    

    if(!req.session.idUsuario){
        return res.redirect('/login');
    }
    
    if (req.session.usuario !== undefined) {
        if (req.session.usuario.rol_id == 2) {
            return res.redirect('/usuario/datospersonales');
        }
    }

    next();
};



module.exports = validarUsuario;