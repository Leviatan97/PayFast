import { Request, Response, NextFunction } from 'express';
import token from '../Token/Token';


export const verificaToken = (req : any, res : Response, next: NextFunction)=> {
    const userToken = req.get('x-token') || ''
    token.compararToke(userToken).then((decoded: any)=>{
        req.usuario = decoded.usuario
        next();
    }).catch((error)=>{
        res.status(200).json({
            ok: false,
            mensaje: "Token no es correcto"
        })
    })
}