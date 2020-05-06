import Routes from 'express';
import tarjetaControlador from '../Controlador/TarjetaControlador'

class tarjeRuta
{
    constructor(private routes = Routes())
    {
        this.Registro()
    }

    public Registro()
    {
        this.routes.route('/tarjeta').post(tarjetaControlador.Registro)
    }

    public getRoutes()
    {
        return this.routes
    }
}

const TarjeRuta : tarjeRuta = new tarjeRuta()
const TarjeRuta_ = TarjeRuta.getRoutes()
export default TarjeRuta_