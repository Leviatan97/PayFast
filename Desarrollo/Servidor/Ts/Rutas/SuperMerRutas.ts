import SuperMerControlador from '../Controlador/SuperMerControlador';
import Routes from 'express';

class superMerRutas
{
    constructor(private routes = Routes()) {
        this.verSuperMer()
    }

    public verSuperMer(){
        this.routes.route('/supermercado').get(SuperMerControlador.verSuper)
    }

    public getRoutes()
    {
        return this.routes
    }
}

const SuperMerRutas : superMerRutas = new superMerRutas()
const SuperMerRutas_ = SuperMerRutas.getRoutes()
export default SuperMerRutas_