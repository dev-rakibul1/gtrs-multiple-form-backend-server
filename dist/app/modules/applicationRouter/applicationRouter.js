"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multiForm_route_1 = __importDefault(require("../muti-form/multiForm.route"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const moduleRouters = [
    {
        path: '/form-data',
        routes: multiForm_route_1.default,
    },
];
moduleRouters.forEach(route => router.use(route.path, route.routes));
exports.default = router;
