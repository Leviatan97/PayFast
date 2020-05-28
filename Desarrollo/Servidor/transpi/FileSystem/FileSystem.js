"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const uniqid_1 = __importDefault(require("uniqid"));
class FileSystem {
    constructor() { }
    guardarImagen(file, id) {
        return new Promise((resolve, reject) => {
            const pathU = this.crearCarpeta(id);
            const nombre = this.generarNombre(file.name);
            file.mv(`${pathU}/${nombre}`, (err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(nombre);
                }
            });
        });
    }
    generarNombre(nombreOrginal) {
        const nombreArr = nombreOrginal.split('.');
        const extencion = nombreArr[nombreArr.length - 1];
        const nomUnico = uniqid_1.default();
        return `${nomUnico}.${extencion}`;
    }
    crearCarpeta(id) {
        const pathU = path_1.default.resolve(__dirname, '../Perfil', id);
        const existe = fs_1.default.existsSync(pathU);
        if (!existe) {
            fs_1.default.mkdirSync(pathU);
        }
        return pathU;
    }
    getFotoUrl(usId, usIm) {
        const foto = path_1.default.resolve(__dirname, '../Perfil', usId, usIm);
        const existe = fs_1.default.existsSync(foto);
        if (!existe) {
            return path_1.default.resolve(__dirname, '../Perfil/default/perfil.svg');
        }
        return foto;
    }
}
exports.default = FileSystem;
