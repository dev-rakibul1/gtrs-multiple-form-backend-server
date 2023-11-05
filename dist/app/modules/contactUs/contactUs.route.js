"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactUsRoute = void 0;
const express_1 = __importDefault(require("express"));
const contactUs_controller_1 = require("./contactUs.controller");
const router = express_1.default.Router();
router.get('/', contactUs_controller_1.contactUsController.getContactUsController);
router.post('/create-contact', contactUs_controller_1.contactUsController.createContactUController);
router.get('/review/:id', contactUs_controller_1.contactUsController.getSingleContactUsController);
router.delete('/review/remove-entry/:id', contactUs_controller_1.contactUsController.contactUsFormController);
router.patch('/review/update-entry/:id', contactUs_controller_1.contactUsController.updateSingleContactUs);
exports.contactUsRoute = router;
