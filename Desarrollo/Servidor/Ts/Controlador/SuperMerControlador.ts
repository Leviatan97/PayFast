import SuperMerModelo from '../Modelo/SuperMerModelo';
import {Request,Response,NextFunction} from 'express';
import { SuperMercado } from '../Interfaz/supInterfaz';

class superMerControlador
{
    constructor(){}

    public async verSuper(req : Request, res : Response, fun : Function){
        let result = null;
        try {
            result = await SuperMerModelo.mostrarSuper()
            res.status(200).json({
                res : result
            })
        } catch (error) {
            res.status(200).json(error)
        }

    }

}

const SuperMerControlador : superMerControlador = new superMerControlador()
export default SuperMerControlador