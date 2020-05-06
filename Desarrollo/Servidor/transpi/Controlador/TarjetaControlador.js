"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class tarjetaControlador {
    constructor() { }
    Registro(req, res, fun) {
        let datos = req.body;
        res.status(200).json(datos);
    }
    Actualizar(req, res, fun) {
    }
}
const TarjetaControlador = new tarjetaControlador();
exports.default = TarjetaControlador;
