import express from "express"
import {Request,Response,NextFunction,Application} from 'express'
import morgan from 'morgan'
import cors from 'cors'
import UsuRuta_ from './Rutas/UsuRuta';
import TarjeRuta_ from './Rutas/TarjeRuta';
import SuperMerRutas_ from './Rutas/SuperMerRutas';
import session from "express-session";
import fileUpload from "express-fileupload";
import TiendaRuta_ from './Rutas/TiendaRuta';



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
        this.app.use(cors({ origin: true, credentials: true }))
        this.app.use(express.json())
    }

    public Rutas(){
        this.app.use(session({
            secret: "Esto es un secreto",
            resave: true,
            saveUninitialized: true
        }))
        this.app.use(fileUpload())
        this.app.use(UsuRuta_)
        this.app.use(TarjeRuta_)
        this.app.use(SuperMerRutas_)
        this.app.use(TiendaRuta_)
        this.app.use(express.static('iconos-supermercados'))
        this.app.use(express.static('transpi/Perfil'))
    }

    public configuracionDePuertos(){
        this.app.set('port',5000)
        this.app.listen(this.app.get('port'),()=>{
            console.log(`Servidor Conectado por el puerto ${this.app.get('port')}`)
        })
    }
}

const main_ : main = new main()