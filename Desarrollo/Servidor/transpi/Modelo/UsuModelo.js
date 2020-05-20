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
const Coneccion_1 = __importDefault(require("../Coneccion/Coneccion"));
class usuModel {
    constructor() {
    }
    registrar(Usu_nombre, Usu_apellido, Usu_FechaNacimiento, Usu_TipoDoc, Usu_NumeroDoc, Correo, Usu_Contra) {
        const datos = {
            us_n: Usu_nombre,
            us_a: Usu_apellido,
            us_fn: Usu_FechaNacimiento,
            us_td: Usu_TipoDoc,
            us_nd: Usu_NumeroDoc,
            us_c: Correo,
            us_ca: Usu_Contra
        };
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            (yield Coneccion_1.default).query('INSERT INTO usuario set ?', [datos]).then((result) => {
                resolve({
                    resultado: true,
                    respuesta: result
                });
            }, (error) => {
                reject({
                    resultado: false,
                    respuesta: error
                });
            });
        }));
    }
    validarCorreo(correo) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            (yield Coneccion_1.default).query(`SELECT * FROM usuario WHERE us_c = '${correo}'`, (error, result) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            });
        }));
    }
    validarNumeroDoc(numeroDoc) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            (yield Coneccion_1.default).query(`SELECT * FROM usuario WHERE us_nd = '${numeroDoc}'`, (error, result) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            });
        }));
    }
    actualizar() {
    }
    ingresar(correo, contrasena) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            (yield Coneccion_1.default).query(`SELECT * FROM usuario WHERE us_c = '${correo}' AND us_ca = '${contrasena}'`, (error, result) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            });
        }));
    }
    verUsuario(id) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            (yield Coneccion_1.default).query(`SELECT * FROM usuario WHERE us_i = ${id}`, (error, result) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            });
        }));
    }
}
exports.default = usuModel;
