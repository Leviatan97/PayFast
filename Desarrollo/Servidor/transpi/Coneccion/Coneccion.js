"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
class Coneccion {
    constructor() {
        this.BD = promise_mysql_1.default.createPool({
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'payfastv3'
        });
        this.conectar();
    }
    conectar() {
        return __awaiter(this, void 0, void 0, function* () {
            (yield this.BD).getConnection().then((connection) => __awaiter(this, void 0, void 0, function* () {
                (yield this.BD).releaseConnection(connection);
                console.log('DB esta conectada');
            })).catch((err) => {
                console.log('Error al Conectar DB\n', {
                    ok: false,
                    err: err.fatal,
                    errCode: err.code,
                    errSqlState: err.sqlState,
                    errSqlMessage: err.sqlMessage
                });
            });
        });
    }
}
const coneccion = new Coneccion();
exports.default = coneccion.BD;
