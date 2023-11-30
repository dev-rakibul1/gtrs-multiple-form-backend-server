"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoute = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const router = express_1.default.Router();
router.post('/login', auth_controller_1.loginController.authLogin);
router.post('/create-refresh-token', auth_controller_1.loginController.refreshToken);
router.get('/logout', auth_controller_1.loginController.logoutToken);
exports.authRoute = router;
