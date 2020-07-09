import TiendaModelo from '../Modelo/TiendaModelo';
import {Request,Response,NextFunction} from 'express';

class tiendaConstructor {
    constructor() {}

    public async verificarCoordenada(req : any, res : Response, fun : Function) {
        let resultado: any = null;
        try {
            resultado = await TiendaModelo.verificarCoordenada(req.body.smo_i)
            res.status(200).json({
                respuesta: true,
                result: resultado
            })
        } catch (error) {
            res.status(200).json({
                respuesta: false,
                result: error
            })
        }
    }

    public async consultaProducto(req : any, res : Response, fun : Function) {
        let resultado: any = null;
        try {
            resultado = await TiendaModelo.consultarProducto(req.ta_i)
            res.status(200).json({
                respuesta: true,
                result: resultado
            })
        } catch (error) {
            res.status(200).json({
                respuesta: false,
                result: error
            })
        }
    }

    public async comprarProductos(req : any, res : Response, fun : Function) {
        let resultado: any = null;
        try {
            resultado = await TiendaModelo.comprarProductos(req.ta_i)
            res.status(200).json({
                respuesta: true,
                result: resultado
            })
        } catch (error) {
            res.status(200).json({
                respuesta: false,
                result: error
            })
        }
    }
}

const TiendaControlador: tiendaConstructor = new tiendaConstructor()
export default TiendaControlador