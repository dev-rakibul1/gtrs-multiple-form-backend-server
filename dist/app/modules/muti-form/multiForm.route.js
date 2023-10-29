"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multiForm_controller_1 = require("./multiForm.controller");
const router = express_1.default.Router();
router.get('/', multiForm_controller_1.multipleFormController.getMultipleFromUser);
router.post('/join-business', multiForm_controller_1.multipleFormController.createMultipleFromUser);
exports.default = router;
