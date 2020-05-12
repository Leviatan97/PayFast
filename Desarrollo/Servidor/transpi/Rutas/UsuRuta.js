"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UsuControlador_1 = __importDefault(require("../Controlador/UsuControlador"));
class usuRuta {
    constructor(routes = express_1.default()) {
        this.routes = routes;
        this.Registro();
        this.usuValidar();
        this.usuCorreo();
        this.usuNumeroDoc();
        this.Ingresar();
    }
    Registro() {
        this.routes.route('/Registro').post(UsuControlador_1.default.Registro);
    }
    usuValidar() {
        this.routes.route('/validar').post(UsuControlador_1.default.Ingresar);
    }
    usuCorreo() {
        this.routes.route('/correo').post(UsuControlador_1.default.validarCorreo);
    }
    usuNumeroDoc() {
        this.routes.route('/numeroDoc').post(UsuControlador_1.default.validarNumeroDoc);
    }
    Ingresar() {
        this.routes.route('/login').post(UsuControlador_1.default.Ingresar);
    }
    getRoutes() {
        return this.routes;
    }
}
const UsuRuta = new usuRuta();
const UsuRuta_ = UsuRuta.getRoutes();
exports.default = UsuRuta_;
