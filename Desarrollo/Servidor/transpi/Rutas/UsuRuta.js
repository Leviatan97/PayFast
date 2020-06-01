"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UsuControlador_1 = __importDefault(require("../Controlador/UsuControlador"));
const Autenticacion_1 = require("../middleware/Autenticacion");
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
        this.actualizarFoto();
        this.verFoto();
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
        this.routes.get('/usuario', Autenticacion_1.verificaToken, UsuControlador_1.default.verUsuario);
    }
    Ingresar() {
        this.routes.route('/login').post(UsuControlador_1.default.Ingresar);
    }
    actualizar() {
        this.routes.put('/actualizar', Autenticacion_1.verificaToken, UsuControlador_1.default.Actualizar);
    }
    actualizarFoto() {
        this.routes.put('/fotoPerfil', Autenticacion_1.verificaToken, UsuControlador_1.default.ActualizarFoto);
    }
    verFoto() {
        this.routes.get('/perfil/:userId/:img', UsuControlador_1.default.verFotoPerfil);
    }
    verificarContra() {
        this.routes.post('/contra', Autenticacion_1.verificaToken, UsuControlador_1.default.verficarContra);
    }
    getRoutes() {
        return this.routes;
    }
}
const UsuRuta = new usuRuta();
const UsuRuta_ = UsuRuta.getRoutes();
exports.default = UsuRuta_;
