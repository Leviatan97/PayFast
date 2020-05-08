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
    constructor(Usu_nombre, Usu_apellido, Usu_FechaNacimiento, Usu_TipoDoc, Usu_NumeroDoc, Usu_Correo, Usu_Contra) {
        this.Usu_nombre = Usu_nombre;
        this.Usu_apellido = Usu_apellido;
        this.Usu_FechaNacimiento = Usu_FechaNacimiento;
        this.Usu_TipoDoc = Usu_TipoDoc;
        this.Usu_NumeroDoc = Usu_NumeroDoc;
        this.Usu_Correo = Usu_Correo;
        this.Usu_Contra = Usu_Contra;
        this.Usu_nombre = Usu_nombre;
        this.Usu_apellido = Usu_apellido;
        this.Usu_FechaNacimiento = Usu_FechaNacimiento;
        this.Usu_TipoDoc = Usu_TipoDoc;
        this.Usu_NumeroDoc = Usu_NumeroDoc;
        this.Usu_Correo = Usu_Correo;
        this.Usu_Contra = Usu_Contra;
    }
    registrar() {
        const datos = {
            us_n: this.Usu_nombre,
            us_a: this.Usu_apellido,
            us_fn: this.Usu_FechaNacimiento,
            us_td: this.Usu_TipoDoc,
            us_nd: this.Usu_NumeroDoc,
            us_c: this.Usu_Correo,
            us_ca: this.Usu_Contra
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
    actualizar() {
    }
    ingresar() {
    }
}
exports.default = usuModel;
