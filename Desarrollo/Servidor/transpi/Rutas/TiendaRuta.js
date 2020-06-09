"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TiendaControlador_1 = __importDefault(require("../Controlador/TiendaControlador"));
class tiendaRuta {
    constructor(route = express_1.default()) {
        this.route = route;
        this.verificarCoordena();
        this.consultarProducto();
        this.comprarProducto();
    }
    verificarCoordena() {
        this.route.post('/coor', TiendaControlador_1.default.verificarCoordenada);
    }
    consultarProducto() {
        this.route.post('/consulPro', TiendaControlador_1.default.consultaProducto);
    }
    comprarProducto() {
        this.route.post('/comPro', TiendaControlador_1.default.comprarProductos);
    }
    getRoutes() {
        return this.route;
    }
}
const TiendaRuta = new tiendaRuta();
const TiendaRuta_ = TiendaRuta.getRoutes();
exports.default = TiendaRuta_;
