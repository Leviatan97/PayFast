"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const UsuRuta_1 = __importDefault(require("./Rutas/UsuRuta"));
const TarjeRuta_1 = __importDefault(require("./Rutas/TarjeRuta"));
const SuperMerRutas_1 = __importDefault(require("./Rutas/SuperMerRutas"));
const express_session_1 = __importDefault(require("express-session"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
class main {
    constructor() {
        this.app = express_1.default();
        this.configuracionInicial();
        this.Rutas();
        this.configuracionDePuertos();
    }
    configuracionInicial() {
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
    }
    Rutas() {
        this.app.use(express_session_1.default({
            secret: "Esto es un secreto",
            resave: true,
            saveUninitialized: true
        }));
        this.app.use(express_fileupload_1.default());
        this.app.use(UsuRuta_1.default);
        this.app.use(TarjeRuta_1.default);
        this.app.use(SuperMerRutas_1.default);
        this.app.use(express_1.default.static('iconos-supermercados'));
        this.app.use(express_1.default.static('transpi/Perfil'));
    }
    configuracionDePuertos() {
        this.app.set('port', 5000);
        this.app.listen(this.app.get('port'), () => {
            console.log(`Servidor Conectado por el puerto ${this.app.get('port')}`);
        });
    }
}
const main_ = new main();
