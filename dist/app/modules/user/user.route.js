"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = __importDefault(require("express"));
const app_role_1 = require("../../../enums/app.role");
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.get('/', (0, auth_1.default)(app_role_1.ENUM_USER_ROLE.SUPER_ADMIN), user_controller_1.userController.getUserController);
router.post('/create-user', (0, auth_1.default)(app_role_1.ENUM_USER_ROLE.SUPER_ADMIN), user_controller_1.userController.createUserController);
router.get('/user-filter', user_controller_1.userController.getUserFilterController);
router.get('/single-user-review/:id', (0, auth_1.default)(app_role_1.ENUM_USER_ROLE.SUPER_ADMIN), user_controller_1.userController.getSingleUserController);
router.patch('/single-user-edit/:id', 
// auth(ENUM_USER_ROLE.SUPER_ADMIN),
user_controller_1.userController.editSingleUserController);
router.patch('/password-change/:id', (0, auth_1.default)(app_role_1.ENUM_USER_ROLE.SUPER_ADMIN, app_role_1.ENUM_USER_ROLE.ADMIN, app_role_1.ENUM_USER_ROLE.EDITOR, app_role_1.ENUM_USER_ROLE.USER), user_controller_1.userController.passwordChangeController);
exports.userRoute = router;
