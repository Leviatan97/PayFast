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
    Registro(req, res, fun) {
        return __awaiter(this, void 0, void 0, function* () {
            let datos = req.body;
            let resultado;
            try {
                const usuarioModelo = new UsuModelo_1.default(datos.Nombre_usu, datos.Apellido_usu, datos.Edad_usu, datos.TipoDoc_usu, datos.NumeroDoc_usu, datos.Correo_usu, datos.Contra_usu);
                resultado = yield usuarioModelo.registrar();
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
