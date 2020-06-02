"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class token {
    constructor() {
    }
    static getJwtToken(payLoad) {
        return jsonwebtoken_1.default.sign({
            usuario: payLoad
        }, this.seed, { expiresIn: this.caducidad });
    }
    static compararToke(userToken) {
        return new Promise((resolve, reject) => {
            jsonwebtoken_1.default.verify(userToken, this.seed, (error, decoded) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(decoded);
                }
            });
        });
    }
}
exports.default = token;
token.seed = "este-es-el-seed-de-mi-app-secreto";
token.caducidad = '30d';
