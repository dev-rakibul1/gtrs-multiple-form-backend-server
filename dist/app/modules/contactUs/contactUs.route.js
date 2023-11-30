"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactUsRoute = void 0;
const express_1 = __importDefault(require("express"));
const app_role_1 = require("../../../enums/app.role");
const auth_1 = __importDefault(require("../../middleware/auth"));
const contactUs_controller_1 = require("./contactUs.controller");
const router = express_1.default.Router();
router.get('/', (0, auth_1.default)(app_role_1.ENUM_USER_ROLE.SUPER_ADMIN, app_role_1.ENUM_USER_ROLE.ADMIN, app_role_1.ENUM_USER_ROLE.EDITOR, app_role_1.ENUM_USER_ROLE.USER), contactUs_controller_1.contactUsController.getContactUsController);
router.post('/create-contact', (0, auth_1.default)(app_role_1.ENUM_USER_ROLE.SUPER_ADMIN, app_role_1.ENUM_USER_ROLE.ADMIN, app_role_1.ENUM_USER_ROLE.EDITOR, app_role_1.ENUM_USER_ROLE.USER), contactUs_controller_1.contactUsController.createContactUController);
router.get('/review-contact-us/:id', (0, auth_1.default)(app_role_1.ENUM_USER_ROLE.SUPER_ADMIN, app_role_1.ENUM_USER_ROLE.ADMIN, app_role_1.ENUM_USER_ROLE.EDITOR, app_role_1.ENUM_USER_ROLE.USER), contactUs_controller_1.contactUsController.getSingleContactUsController);
router.delete('/review-contact-us/remove-entry/:id', (0, auth_1.default)(app_role_1.ENUM_USER_ROLE.SUPER_ADMIN, app_role_1.ENUM_USER_ROLE.ADMIN), contactUs_controller_1.contactUsController.contactUsFormController);
router.patch('/review-contact-us/update-entry/:id', (0, auth_1.default)(app_role_1.ENUM_USER_ROLE.SUPER_ADMIN, app_role_1.ENUM_USER_ROLE.ADMIN, app_role_1.ENUM_USER_ROLE.EDITOR), contactUs_controller_1.contactUsController.updateSingleContactUs);
exports.contactUsRoute = router;
