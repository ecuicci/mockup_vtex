exports.alive = async(req,res,next) => {
    try {
        const clients = 'is alive funciona ok';
        res.json(clients);
        console.log("viene por aca");
    } catch (error) {
        console.log(error);
        next()
    }
}

exports.getListOrder = async(req,res,next) => {
    try {
        const clients = 'estoy en el getListOrders';
        res.json(clients);
    } catch (error) {
        console.log(error);
        next()
    }
}
 /*
exports.login = async(req,res,next) => {
    try {
        const body =req.body;
        const email =body.email;
        const password =body.password;
        var response = "";
        if(((email != undefined && email != null) && (email !='')) && ((password != undefined && password != null) && (password !=''))){
            
            token = {
                "token": "TOKEN"
            }
            response = token;
 
        }else{
            response = {
                "message": "Datos requeridos no ingresados",
                "code": 403
            }
           
        }
        res.json(response);
    } catch (error) {
        console.log(error);
        next()
    }
    
}*/
