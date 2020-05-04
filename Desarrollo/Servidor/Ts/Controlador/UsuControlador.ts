import usuModel from '../Modelo/UsuModelo';
import {Request,Response,NextFunction} from 'express';

class usuControlador {
    constructor() {}

    private Registro(req : Request, res : Response, fun : Function){

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