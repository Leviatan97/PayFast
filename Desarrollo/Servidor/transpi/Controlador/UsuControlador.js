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
class usuControlador {
    constructor() { }
    validarNumeroDoc(req, res, fun) {
        return __awaiter(this, void 0, void 0, function* () {
            let datos = req.body;
            let resultado;
            let valor;
            let val;
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
    Actualizar(req, res, fun) {
    }
    Ingresar(req, res, fun) {
        let datos = req.body;
        res.status(200).json(datos);
    }
}
const UsuControlador = new usuControlador();
exports.default = UsuControlador;
