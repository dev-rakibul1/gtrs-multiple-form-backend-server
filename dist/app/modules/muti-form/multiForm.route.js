"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multipleFormRoute = void 0;
const express_1 = __importDefault(require("express"));
const app_role_1 = require("../../../enums/app.role");
const auth_1 = __importDefault(require("../../middleware/auth"));
const multiForm_controller_1 = require("./multiForm.controller");
const router = express_1.default.Router();
router.get('/', (0, auth_1.default)(app_role_1.ENUM_USER_ROLE.SUPER_ADMIN, app_role_1.ENUM_USER_ROLE.ADMIN, app_role_1.ENUM_USER_ROLE.EDITOR, app_role_1.ENUM_USER_ROLE.USER), multiForm_controller_1.multipleFormController.getMultipleFromUser);
router.post('/join-business', multiForm_controller_1.multipleFormController.createMultipleFromUser); // Use multer middleware for file uploads
router.get('/review/:id', (0, auth_1.default)(app_role_1.ENUM_USER_ROLE.SUPER_ADMIN, app_role_1.ENUM_USER_ROLE.ADMIN, app_role_1.ENUM_USER_ROLE.EDITOR, app_role_1.ENUM_USER_ROLE.USER), multiForm_controller_1.multipleFormController.getSingleMultipleFromUser);
router.delete('/review/remove-entry/:id', (0, auth_1.default)(app_role_1.ENUM_USER_ROLE.SUPER_ADMIN, app_role_1.ENUM_USER_ROLE.ADMIN), multiForm_controller_1.multipleFormController.deleteSingleMultipleFromUser);
router.patch('/review/update-entry/:id', (0, auth_1.default)(app_role_1.ENUM_USER_ROLE.SUPER_ADMIN, app_role_1.ENUM_USER_ROLE.ADMIN, app_role_1.ENUM_USER_ROLE.EDITOR), multiForm_controller_1.multipleFormController.updateSingleMultipleFromUser);
exports.multipleFormRoute = router;
