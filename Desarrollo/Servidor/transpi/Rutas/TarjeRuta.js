"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TarjetaControlador_1 = __importDefault(require("../Controlador/TarjetaControlador"));
class tarjeRuta {
    constructor(routes = express_1.default()) {
        this.routes = routes;
        this.Registro();
    }
    Registro() {
        this.routes.route('/tarjeta').post(TarjetaControlador_1.default.Registro);
    }
    getRoutes() {
        return this.routes;
    }
}
const TarjeRuta = new tarjeRuta();
const TarjeRuta_ = TarjeRuta.getRoutes();
exports.default = TarjeRuta_;
