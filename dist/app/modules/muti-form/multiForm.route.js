"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multipleFormRoute = void 0;
const express_1 = __importDefault(require("express"));
const multiForm_controller_1 = require("./multiForm.controller");
const router = express_1.default.Router();
router.get('/', multiForm_controller_1.multipleFormController.getMultipleFromUser);
router.post('/join-business', multiForm_controller_1.multipleFormController.createMultipleFromUser);
router.get('/review/:id', multiForm_controller_1.multipleFormController.getSingleMultipleFromUser);
router.delete('/review/remove-entry/:id', multiForm_controller_1.multipleFormController.deleteSingleMultipleFromUser);
router.patch('/review/update-entry/:id', multiForm_controller_1.multipleFormController.updateSingleMultipleFromUser);
exports.multipleFormRoute = router;
