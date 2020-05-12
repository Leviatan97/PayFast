import usuModel from '../Modelo/UsuModelo';
import {Request,Response,NextFunction} from 'express';
import { Usuario } from '../Interfaz/usuInterfaz';


class usuControlador {
    constructor() {}

    public async validarNumeroDoc(req : Request, res : Response, fun : Function){

        let datos : Usuario = req.body
        let resultado : any
        let valor : any

        try {

            const usuarioModelo : usuModel = new usuModel()
            resultado = await usuarioModelo.validarNumeroDoc(datos.us_nd)
            valor = resultado.length

            res.status(200).json({
                val: valor
            })

        } catch (error) {

            res.status(200).json({
                respuesta : error
            })

        }

    }

    public async validarCorreo(req : Request, res : Response, fun : Function){

        let datos : Usuario = req.body
        let resultado : any
        let valor : any

        try {

            const usuarioModelo : usuModel = new usuModel()

            resultado = await usuarioModelo.validarCorreo(
                datos.us_c,
            )
            valor = resultado.length

            res.status(200).json({
                val: valor
            })

        } catch (error) {

            res.status(200).json({
                respuesta : error
            })

        }

    }

    public async Registro(req : Request, res : Response, fun : Function)
    {

        let datos : Usuario = req.body
        let resultado : any
        console.log(datos)
        try {

            const usuarioModelo : usuModel = new usuModel()

            resultado = await usuarioModelo.registrar(
                datos.us_n, 
                datos.us_a, 
                datos.us_fn, 
                datos.us_td, 
                datos.us_nd, 
                datos.us_c, 
                datos.us_ca
            )

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

    public async Ingresar(req : Request, res : Response, fun : Function){
        let datos : Usuario = req.body
        let result: any
        let valor : any
        try {
            const usuarioModelo : usuModel = new usuModel()
            result = await usuarioModelo.ingresar(datos.us_c,datos.us_ca)
            valor = result.length
            res.status(200).json({
                val: valor
            })
        } catch (error) {
            res.status(200).json(error)
        }
        
    }
}

const UsuControlador : usuControlador = new usuControlador()
export default UsuControlador