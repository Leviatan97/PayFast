"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Token_1 = __importDefault(require("../Token/Token"));
exports.verificaToken = (req, res, next) => {
    const userToken = req.get('x-token') || '';
    Token_1.default.compararToke(userToken).then((decoded) => {
        req.usuario = decoded.usuario;
        next();
    }).catch((error) => {
        res.status(200).json({
            ok: false,
            mensaje: "Token no es correcto"
        });
    });
};
