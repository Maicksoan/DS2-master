"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prestador_controller_1 = require("../controller/prestador.controller");
class PrestadorRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.get('/', prestador_controller_1.default.find);
        this.router.post('/', prestador_controller_1.default.create);
    }
}
exports.default = new PrestadorRouter().router;
//# sourceMappingURL=prestador.router.js.map