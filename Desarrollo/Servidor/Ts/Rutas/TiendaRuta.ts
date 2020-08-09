import Routes from 'express';
import TiendaControlador from '../Controlador/TiendaControlador';

class tiendaRuta {
    constructor(private route = Routes()) {
        this.verificarCoordena()
        this.consultarProducto()
        this.comprarProducto()
        this.venta()
    }
    
    public verificarCoordena() {
        this.route.post('/coor',TiendaControlador.verificarCoordenada)
    }

    public consultarProducto() {
        this.route.post('/consulPro',TiendaControlador.consultaProducto)
    }

    public comprarProducto() {
        this.route.post('/comPro',TiendaControlador.comprarProductos)
    }

    public venta() {
        this.route.post('/venta',TiendaControlador.venta)
    }

    public getRoutes()
    {
        return this.route
    }
}

const TiendaRuta: tiendaRuta = new tiendaRuta()
const TiendaRuta_ = TiendaRuta.getRoutes()
export default TiendaRuta_