import Routes from 'express';
import UsuControlador from '../Controlador/UsuControlador';

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
        this.routes.route('/usuario').post(UsuControlador.verUsuario)
    }

    public Ingresar()
    {
        this.routes.route('/login').post(UsuControlador.Ingresar)
    }

    public actualizar() 
    {
        this.routes.route('/actualizar').put(UsuControlador.Actualizar)
    }

    public getRoutes()
    {
        return this.routes
    }

}

const UsuRuta : usuRuta = new usuRuta()
const UsuRuta_ = UsuRuta.getRoutes()
export default UsuRuta_

