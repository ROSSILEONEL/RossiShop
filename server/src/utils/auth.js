export function auth(req, res, next) {
    if (req.session?.user === 'nombreUsuario' && req.session?.admin === true) {
        return next();
    } else {
        res.send({status:"error",message:"Sesión no iniciada"});
    }
}