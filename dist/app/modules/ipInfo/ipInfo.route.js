"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ipInfoRoute = void 0;
const express_1 = __importDefault(require("express"));
const ipInfo_controller_1 = require("./ipInfo.controller");
const router = express_1.default.Router();
router.get('/', ipInfo_controller_1.ipInfoController.getIpInfoController);
exports.ipInfoRoute = router;
