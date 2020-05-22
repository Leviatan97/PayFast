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
        this.verUsuario();
        this.actualizar();
        this.verificarContra();
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
    verUsuario() {
        this.routes.route('/usuario').post(UsuControlador_1.default.verUsuario);
    }
    Ingresar() {
        this.routes.route('/login').post(UsuControlador_1.default.Ingresar);
    }
    actualizar() {
        this.routes.route('/actualizar').put(UsuControlador_1.default.Actualizar);
    }
    verificarContra() {
        this.routes.route('/contra').post(UsuControlador_1.default.verficarContra);
    }
    getRoutes() {
        return this.routes;
    }
}
const UsuRuta = new usuRuta();
const UsuRuta_ = UsuRuta.getRoutes();
exports.default = UsuRuta_;
