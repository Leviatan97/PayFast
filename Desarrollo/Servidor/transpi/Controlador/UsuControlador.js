"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class usuControlador {
    constructor() { }
    Registro(req, res, fun) {
    }
    Actualizar(req, res, fun) {
    }
    Ingresar(req, res, fun) {
        let datos = req.body;
        res.status(200).json(datos);
    }
}
const UsuControlador = new usuControlador();
exports.default = UsuControlador;
