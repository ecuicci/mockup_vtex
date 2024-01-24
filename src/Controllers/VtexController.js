exports.callVtex = async(req,res,next) => {
    try {
        let dni, digito_orden;
    
     
     // Verificar si los parámetros están en el cuerpo de la solicitud (POST)
     if (req.method === 'POST' && req.body) {
        dni = req.body.dni;
        digito_orden = req.body.digito_orden;
     }
    
     // Verificar si los parámetros están en la cadena de consulta (GET)
     if (req.method === 'GET' && req.query) {
      dni = req.query.dni;
      digito_orden = req.query.digito_orden;
     }
        var response = "";
        // Enviar una respuesta JSON

        if (dni==33333333 && digito_orden ==255501){
        response={ 
            data: {
                    "orderId": "1353962052555-01",
                    "nombre": "Adriana Edith ",
                    "apellido": "Maffei ",
                    "dni": "33333333",
                    "sellers": "Datasoft",
                    "status": "payment-approved",
                    "ShippingEstimateDate": "25/01/2024",
                    "fueraRango" : false,
                    "difiere" : "6"
                }
            };
        }
        if (dni==44444444 && digito_orden ==255501){
            response={ 
                data: {
                        "orderId": "1353962052555-01",
                        "nombre": "Adrian Eduardo ",
                        "apellido": "Maffei ",
                        "dni": "44444444",
                        "sellers": "Fravega",
                        "status": "payment-approved",
                        "ShippingEstimateDate": "15/01/2024",
                        "fueraRango" : true,
                        "difiere" : "-7"
                    }
            
                };
        }
        //si no envia datos
        if (dni=="" && digito_orden ==""){
            response={ 
                data: {
                    "data": " Los campos dni y digito_orden son requeridos",
                    "status": "failed",
                    "code": 500
                }
            };
        }
        //si falta algun dato
        if (dni=="" || digito_orden ==""){
            response={ 
                data: {
                    "data": " Los campos dni y digito_orden son requeridos",
                    "status": "failed",
                    "code": 500
                }
            };
        }

        if (digito_orden !="123456"){
            response={ 
                    "data": "Orden No Encontrada"     
            };
        }

        if( (dni !="33333333") && (dni != "44444444") ){
            response={ 
                    "data": "DNI No Encontrado"     
            };
        }

        //solo 6 digitos
        if (digito_orden.length != 6){
            response={ 
                    "data": "Verificar numero de orden"    
            };
        }


        res.json(response);
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}


exports.crearCaso = async(req,res,next) => {
    
        try {
            let dni, digito_orden, tipificacion_n1, tipificacion_n2, validacion, mensaje;
    
     
            // Verificar si los parámetros están en el cuerpo de la solicitud (POST)
            if (req.method === 'POST' && req.body) {
                dni = req.body.dni;
                digito_orden = req.body.digito_orden;
                tipificacion_n1 = req.query.tipificacion_n1;
                tipificacion_n2 = req.query.tipificacion_n2;
            }
    
            // Verificar si los parámetros están en la cadena de consulta (GET)
            if (req.method === 'GET' && req.query) {
            dni = req.query.dni;
            digito_orden = req.query.digito_orden;
            tipificacion_n1 = req.query.tipificacion_n1;
            tipificacion_n2 = req.query.tipificacion_n2;
            }
            var response = "";
            // Enviar una respuesta JSON

            if((dni != 33333333) || (digito_orden != 123456)){
                response={ 
                    data: {
                        "code": 403,
                        "message": "Orden No Encontrada"
                        }
                }
            }

            if(digito_orden != 123456){
                response={ 
                    data: {
                        "code": 403,
                        "message": "Orden No Encontrada"
                        }
                }
            }else{

                if((dni == "") || (digito_orden == "") || (tipificacion_n1 == "") || (tipificacion_n2 == "")){
                    response={ 
                        data: {
                            "code": 403,
                            "message": "Orden No Encontrada"
                            }
                    }
                }

                switch (tipificacion_n2) {
                    case "Opcion1":
                    validacionn2 = "OK";
                    break;
                    case "Opcion2":
                        validacionn2 = "OK"
                    break;
                    case "Opcion3":
                        validacionn2 = "OK"
                    break;
                    default:
                        validacionn2 = "NOK"
                        mensaje= "tipificación invalida";
                    break;
                }

                switch (tipificacion_n1) {
                    case "CONSULTA":
                    validacion = "OK"
                    break;
                    case "RECLAMO":
                        validacion = "OK"
                    break;
                    default:
                        validacion = "NOK"
                        mensaje= "tipificación invalida";
                    break;
                }
              

                if (dni==33333333 && digito_orden ==123456 && validacion == "OK" && validacionn2 == "OK"){
                    
                    // "dni": "13526784",    
                    // "digito_orden": "255501",
                    // "tipificacion_n1":"RECLAMO",
                    // "tipificacion_n2":"Opcion1"
                    response={ 
                        data: {
                            "code": 200,
                            "message": "La operación ha finalizado exitosamente.",
                            "nroCaso": "20240122000001"
                            }
                    
                        };
                }else{
                    response = {
                        data: {
                            "message": mensaje,
                        }

                    }
                }
            }
            res.json(response);
           
        }  catch (error) {
            console.error('Error en el controlador:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
}

exports.login = async(req,res,next) => {
    try {
        const body =req.body;
        const email =body.email;
        const password =body.password;
        var response = "";
        if(((email != undefined && email != null) && (email !='')) && ((password != undefined && password != null) && (password !=''))){
            
            token = {
                "tokenNs": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZGV2LXNlcnZpY2Utbm9zaXMucHJvdmluY2lhbmV0LmNvbS5hclwvXC9sb2dpbiIsImlhdCI6MTY5ODE1NzMzMSwiZXhwIjoxNjk4MTU4MjMxLCJuYmYiOjE2OTgxNTczMzEsImp0aSI6IjRhUjZ4eTU0V0lXSXRmZUgiLCJzdWIiOiJlNmM5ZDUyMC00YjNmLTExZWUtOWIxYS0wMzVjNWRjZDkxZTYiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.-0bPreGGzagxZeqOUPlGAvruZf2CJ4_vSXJZvVmACvU"
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
}
