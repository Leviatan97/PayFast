import usuModel from '../Modelo/UsuModelo';
import {Request,Response,NextFunction} from 'express';
import { Usuario } from '../Interfaz/usuInterfaz';


class usuControlador {
    constructor() {}

    public async Registro(req : Request, res : Response, fun : Function){
        let datos : Usuario = req.body
        let resultado : any
        try {
            const usuarioModelo : usuModel = new usuModel(
                datos.Nombre_usu, 
                datos.Apellido_usu, 
                datos.Edad_usu, 
                datos.TipoDoc_usu, 
                datos.NumeroDoc_usu, 
                datos.Correo_usu, 
                datos.Contra_usu
            )
            resultado = await usuarioModelo.registrar()
            res.status(200).json({
                message : "Se ha egistrado exitosamente",
                res : resultado 
            })
        } catch (error) {
            res.status(200).json({
                respuesta : error
            })
        }
        
    }

    private Actualizar(req : Request, res : Response, fun : Function){

    }

    public Ingresar(req : Request, res : Response, fun : Function){
        let datos = req.body
        res.status(200).json(datos)
    }
}

const UsuControlador : usuControlador = new usuControlador()
export default UsuControlador