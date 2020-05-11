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

            resultado = await usuarioModelo.validarNumeroDoc(
                datos.NumeroDoc_usu
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

    public async validarCorreo(req : Request, res : Response, fun : Function){

        let datos : Usuario = req.body
        let resultado : any
        let valor : any

        try {

            const usuarioModelo : usuModel = new usuModel()

            resultado = await usuarioModelo.validarCorreo(
                datos.Correo_usu,
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

        try {

            const usuarioModelo : usuModel = new usuModel()

            resultado = await usuarioModelo.registrar(
                datos.Nombre_usu, 
                datos.Apellido_usu, 
                datos.Edad_usu, 
                datos.TipoDoc_usu, 
                datos.NumeroDoc_usu, 
                datos.Correo_usu, 
                datos.Contra_usu
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

    public Ingresar(req : Request, res : Response, fun : Function){
        let datos = req.body
        res.status(200).json(datos)
    }
}

const UsuControlador : usuControlador = new usuControlador()
export default UsuControlador