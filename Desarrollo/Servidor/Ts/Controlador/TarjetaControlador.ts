import tarjetaModel from '../Modelo/TarjetaModelo';
import {Request, Response, NextFunction} from 'express';

class tarjetaControlador
{
    constructor(){}

    public Registro(req : Request, res : Response, fun : Function){
        let datos = req.body
        res.status(200).json(datos)
    }
    
    private Actualizar(req : Request, res : Response, fun : Function){

    }
}

const TarjetaControlador : tarjetaControlador = new tarjetaControlador()
export default TarjetaControlador