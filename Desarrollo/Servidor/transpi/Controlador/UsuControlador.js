"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UsuModelo_1 = __importDefault(require("../Modelo/UsuModelo"));
const passport = require('passport-facebook');
const FacebookStrategy = require('passport-facebook');
class usuControlador {
    constructor() { }
    validarNumeroDoc(req, res, fun) {
        return __awaiter(this, void 0, void 0, function* () {
            let datos = req.body;
            let resultado;
            let valor;
            try {
                const usuarioModelo = new UsuModelo_1.default();
                resultado = yield usuarioModelo.validarNumeroDoc(datos.us_nd);
                valor = resultado.length;
                res.status(200).json({
                    val: valor
                });
            }
            catch (error) {
                res.status(200).json({
                    respuesta: error
                });
            }
        });
    }
    validarCorreo(req, res, fun) {
        return __awaiter(this, void 0, void 0, function* () {
            let datos = req.body;
            let resultado;
            let valor;
            try {
                const usuarioModelo = new UsuModelo_1.default();
                resultado = yield usuarioModelo.validarCorreo(datos.us_c);
                valor = resultado.length;
                res.status(200).json({
                    val: valor
                });
            }
            catch (error) {
                res.status(200).json({
                    respuesta: error
                });
            }
        });
    }
    Registro(req, res, fun) {
        return __awaiter(this, void 0, void 0, function* () {
            let datos = req.body;
            let resultado;
            console.log(datos);
            try {
                const usuarioModelo = new UsuModelo_1.default();
                resultado = yield usuarioModelo.registrar(datos.us_n, datos.us_a, datos.us_fn, datos.us_td, datos.us_nd, datos.us_c, datos.us_ca);
                res.status(200).json({
                    message: "Se ha egistrado exitosamente",
                    res: resultado
                });
            }
            catch (error) {
                res.status(200).json({
                    respuesta: error
                });
            }
        });
    }
    registroFacebook(req, res, fun) {
        passport.use(new FacebookStrategy({
            clientID: '915792222257169',
            clientSecret: 'af4e62d90781bd6dbfe9c20a7cb9e4b7',
            callbackURL: "/auth/facebook/callback"
        }), function (accessToken, refreshToken, profile, cb) {
            console.log(profile);
            res.status(200).json(profile);
        });
    }
    Actualizar(req, res, fun) {
        return __awaiter(this, void 0, void 0, function* () {
            let datos = req.body;
            let result;
            try {
                const usuarioModelo = new UsuModelo_1.default();
                result = yield usuarioModelo.actualizar(datos);
                res.status(200).json({
                    respuesta: "OK",
                    resultado: result
                });
            }
            catch (error) {
                res.status(200).json({
                    error: "Error",
                    respuesta: error
                });
            }
        });
    }
    Ingresar(req, res, fun) {
        return __awaiter(this, void 0, void 0, function* () {
            let datos = req.body;
            let result;
            let valor;
            try {
                const usuarioModelo = new UsuModelo_1.default();
                result = yield usuarioModelo.ingresar(datos.us_c, datos.us_ca);
                valor = result.length;
                res.status(200).json({
                    val: valor,
                    resultado: result
                });
            }
            catch (error) {
                res.status(200).json(error);
            }
        });
    }
    verUsuario(req, res, fun) {
        return __awaiter(this, void 0, void 0, function* () {
            let datos = req.body;
            let result;
            try {
                const usuarioModelo = new UsuModelo_1.default();
                result = yield usuarioModelo.verUsuario(datos.us_i);
                res.status(200).json({
                    respuesta: "OK",
                    resultado: result
                });
            }
            catch (error) {
                res.status(200).json(error);
            }
        });
    }
    verficarContra(req, res, fun) {
        return __awaiter(this, void 0, void 0, function* () {
            let datos = req.body;
            let result;
            let valor;
            try {
                const usuarioModelo = new UsuModelo_1.default();
                result = yield usuarioModelo.verficarContra(datos.us_ca, datos.us_i);
                valor = result.length;
                res.status(200).json({
                    val: valor,
                });
            }
            catch (error) {
                res.status(200).json(error);
            }
        });
    }
}
const UsuControlador = new usuControlador();
exports.default = UsuControlador;
