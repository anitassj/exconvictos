const validarUsuario = (req,res, next)=>{
    console.log("middleware de validar usuario");
    if(!req.session.idUsuario){
        return res.redirect('/login');
    }

    next();
};



module.exports = validarUsuario;