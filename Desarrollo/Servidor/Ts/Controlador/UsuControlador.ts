import usuModel from '../Modelo/UsuModelo';
import {Request,Response,NextFunction} from 'express';
import { Usuario } from '../Interfaz/usuInterfaz';
import token from '../Token/Token';
import { FileUpload } from '../Interfaz/imgInterfaz';
import FileSystem from '../FileSystem/FileSystem';
const passport = require('passport-facebook')
const FacebookStrategy = require('passport-facebook')


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
            const Token: token = token.getJwtToken({
                us_i: resultado.respuesta.insertId,
                us_n: datos.us_n,
                us_c: datos.us_c
            })
            res.status(200).json({
                message : "Se ha egistrado exitosamente",
                res : resultado,
                token: Token
            })

        } catch (error) {

            res.status(200).json({
                respuesta : error
            })

        }
        
    }

    public registroFacebook(req : Request, res : Response, fun : Function){
        passport.use(new FacebookStrategy({
            clientID: '915792222257169',
            clientSecret: 'af4e62d90781bd6dbfe9c20a7cb9e4b7',
            callbackURL: "/auth/facebook/callback"
          }),
          function(accessToken: any, refreshToken: any, profile: any, cb: any){
              console.log(profile)
              res.status(200).json(profile)
          }
        );
    }    
        

    public async Actualizar (req : any, res : Response, fun : Function){
        let datos  : Usuario = req.body;
        let result : any;
        try {
            const usuarioModelo: usuModel = new usuModel()
            result = await usuarioModelo.actualizar(datos, req.usuario.us_i)
            res.status(200).json({
                respuesta: "OK",
                resultado: result
            })
        } catch (error) {
            res.status(200).json({
                error: "Error",
                respuesta: error
            })
        }
    }

    public async ActualizarFoto (req : any, res : Response, fun : Function){

        if(!req.files) {
            res.status(400).json({
                ok: false,
                mensaje: "No se subio ninguna imagen"
            })
        }
        const imagen: FileUpload = req.files.imagen

        if(!imagen) {
            res.status(400).json({
                ok: false,
                mensaje: "No se subio ninguna imagen"
            })
        }

        if(!imagen.mimetype.includes('image')) {
            res.status(400).json({
                ok: false,
                mensaje: "Lo que subio no es una imagen"
            })
        }

        const fyleSystem : FileSystem = new FileSystem();

        const usIm = await fyleSystem.guardarImagen(imagen, String(req.usuario.us_i))
        console.log(usIm)
        let datos  : any = {
            us_im: usIm
        }
        let result : any;
        try {
            const usuarioModelo: usuModel = new usuModel()
            result = await usuarioModelo.actualizar(datos, req.usuario.us_i)
            res.status(200).json({
                respuesta: "OK",
                resultado: result
            })
        } catch (error) {
            res.status(200).json({
                error: "Error",
                respuesta: error
            })
        }
    }

    public async verFotoPerfil(req : any, res : Response, fun : Function) {
        const usId = req.params.userId
        const usIm = req.params.img

        const fyleSystem : FileSystem = new FileSystem();
        const pathFoto = fyleSystem.getFotoUrl(usId, usIm)

        res.sendFile(pathFoto)
    }

    public async Ingresar(req : Request, res : Response, fun : Function){
        let datos : Usuario = req.body
        let result: any
        let valor : any
        try {
            const usuarioModelo : usuModel = new usuModel()
            result = await usuarioModelo.ingresar(datos.us_c,datos.us_ca)

            const toke = token.getJwtToken({
                us_i: result[0].us_i,
            })

            valor = result.length
            res.status(200).json({
                val: valor,
                resultado : result,
                token_ : toke
            })
        } catch (error) {
            res.status(200).json(error)
        }
        
    }

    public async verUsuario(req : any, res : Response, fun : Function) {
        let datos = req.usuario.us_i
        let result : any
        try {
            const usuarioModelo : usuModel = new usuModel()
            result = await usuarioModelo.verUsuario(datos)
            res.status(200).json({
                respuesta: "OK",
                resultado: result
            })
        } catch (error) {
            res.status(200).json(error)
        }
    }

    public async verficarContra(req : any, res : Response, fun : Function) {
        let datos = req.body
        let result : any
        let valor  : any
        try {
            const usuarioModelo : usuModel = new usuModel()
            result = await usuarioModelo.verficarContra(datos.us_ca, req.usuario.us_i)
            valor = result.length
            res.status(200).json({
                val: valor,
            })
        } catch (error) {
            res.status(200).json(error)
        }
    }
}

const UsuControlador : usuControlador = new usuControlador()
export default UsuControlador