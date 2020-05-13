"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SuperMerControlador_1 = __importDefault(require("../Controlador/SuperMerControlador"));
const express_1 = __importDefault(require("express"));
class superMerRutas {
    constructor(routes = express_1.default()) {
        this.routes = routes;
        this.verSuperMer();
    }
    verSuperMer() {
        this.routes.route('/supermercado').get(SuperMerControlador_1.default.verSuper);
    }
    getRoutes() {
        return this.routes;
    }
}
const SuperMerRutas = new superMerRutas();
const SuperMerRutas_ = SuperMerRutas.getRoutes();
exports.default = SuperMerRutas_;
