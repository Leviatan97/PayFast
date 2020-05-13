import express from "express"
import {Request,Response,NextFunction,Application} from 'express'
import morgan from 'morgan'
import cors from 'cors'
import UsuRuta_ from './Rutas/UsuRuta';
import TarjeRuta_ from './Rutas/TarjeRuta'
import SuperMerRutas_ from './Rutas/SuperMerRutas';



class main{
    private app : Application
    constructor(
    ){
        this.app = express()
        this.configuracionInicial()
        this.Rutas()
        this.configuracionDePuertos()
    }

    public configuracionInicial(){
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.app.use(express.json())
    }

    public Rutas(){
        this.app.use(UsuRuta_)
        this.app.use(TarjeRuta_)
        this.app.use(SuperMerRutas_)
        this.app.use(express.static('iconos-supermercados'))
    }

    public configuracionDePuertos(){
        this.app.set('port',5000)
        this.app.listen(this.app.get('port'),()=>{
            console.log(`Servidor Conectado por el puerto ${this.app.get('port')}`)
        })
    }
}

const main_ : main = new main()