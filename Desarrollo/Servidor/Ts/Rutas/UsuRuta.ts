import Routes from 'express';
import UsuControlador from '../Controlador/UsuControlador';
import { verificaToken } from '../middleware/Autenticacion';

class usuRuta
{
    constructor(
        private routes = Routes()
    ) 
    {
        this.Registro()
        this.usuValidar()
        this.usuCorreo()
        this.usuNumeroDoc()
        this.Ingresar()
        this.verUsuario()
        this.actualizar()
        this.verificarContra()
        this.actualizarFoto()
        this.verFoto()
    }

    public Registro()
    {
        this.routes.route('/Registro').post(UsuControlador.Registro)
    }

    public usuValidar()
    {
        this.routes.route('/validar').post(UsuControlador.Ingresar)
    }

    public usuCorreo()
    {
        this.routes.route('/correo').post(UsuControlador.validarCorreo)
    }

    public usuNumeroDoc()
    {
        this.routes.route('/numeroDoc').post(UsuControlador.validarNumeroDoc)
    }

    public verUsuario()
    {
        this.routes.get('/usuario',verificaToken,UsuControlador.verUsuario)
    }

    public Ingresar()
    {
        this.routes.route('/login').post(UsuControlador.Ingresar)
    }

    public actualizar() 
    {
        this.routes.put('/actualizar',verificaToken,UsuControlador.Actualizar)
    }

    public actualizarFoto() 
    {
        this.routes.put('/fotoPerfil',verificaToken,UsuControlador.ActualizarFoto)
    }

    public verFoto() 
    {
        this.routes.get('/perfil/:userId/:img',UsuControlador.verFotoPerfil)
    }

    public verificarContra() 
    {
        this.routes.route('/contra').post(UsuControlador.verficarContra)
    }

    public getRoutes()
    {
        return this.routes
    }

}

const UsuRuta : usuRuta = new usuRuta()
const UsuRuta_ = UsuRuta.getRoutes()
export default UsuRuta_

