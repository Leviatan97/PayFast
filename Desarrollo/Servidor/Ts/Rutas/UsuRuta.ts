import Routes from 'express';
import UsuControlador from '../Controlador/UsuControlador';

class usuRuta
{
    constructor(
        private routes = Routes()
    ) 
    {
        this.usuValidar()
    }

    public usuValidar(){
        this.routes.route('/validar').post(UsuControlador.Ingresar)
    }

    public getRoutes(){
        return this.routes
    }

}

const UsuRuta : usuRuta = new usuRuta()
const UsuRuta_ = UsuRuta.getRoutes()
export default UsuRuta_

