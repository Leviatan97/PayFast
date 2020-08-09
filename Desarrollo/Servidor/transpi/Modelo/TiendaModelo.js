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
class tiendaModelo {
    constructor() { }
    verificarCoordenada(smo) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            (yield Coneccion_1.default).query(`SELECT * FROM ta WHERE smo_i = ${smo}`, (error, result) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            });
        }));
    }
    consultarProducto(id) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            (yield Coneccion_1.default).query(`SELECT * FROM ra WHERE ta_i = ${id} AND ra_tp = 'consulta'`, (error, result) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            });
        }));
    }
    /**
     * Venta
     */
    Venta(id) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            (yield Coneccion_1.default).query(`SELECT * FROM ra WHERE ta_i = ${id} AND ra_tp = 'venta'`, (error, result) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            });
        }));
    }
    comprarProductos(id) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            (yield Coneccion_1.default).query(`SELECT * FROM ra WHERE ta_i = ${id} AND ra_tp = 'compra'`, (error, result) => {
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
const TiendaModelo = new tiendaModelo();
exports.default = TiendaModelo;
