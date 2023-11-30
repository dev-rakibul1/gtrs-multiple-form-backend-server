"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const requestResponseSend_1 = __importDefault(require("../../../shared/requestResponseSend"));
const tryCatchAsync_1 = __importDefault(require("../../../shared/tryCatchAsync"));
const user_services_1 = require("./user.services");
const getUserController = (0, tryCatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_services_1.userServices.getUserService();
    console.log('Authorization___:', req.headers.authorization);
    (0, requestResponseSend_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'User form data get success!',
        data: result,
    });
}));
const createUserController = (0, tryCatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const result = yield user_services_1.userServices.createUserService(user);
    // console.log('Authorization___2:', req.headers.authorization);
    // console.log('Cookies___:', req.cookies);
    (0, requestResponseSend_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'User create success!',
        data: result,
    });
}));
const getUserFilterController = (0, tryCatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers.authorization
        ? req.headers.authorization
        : undefined;
    console.log('user.controller__:', token);
    const result = yield user_services_1.userServices.getUserFilterService(token);
    // console.log(result);
    // console.log('Authorization___2:', req.headers.authorization);
    // console.log('Cookies___:', req.cookies);
    (0, requestResponseSend_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'User filter success!',
        data: result,
    });
}));
// Get single user
const getSingleUserController = (0, tryCatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getSingleUser = req.params.id;
    const getFormUser = yield user_services_1.userServices.getSingleUserService(getSingleUser);
    (0, requestResponseSend_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Single user get success!',
        data: getFormUser,
    });
}));
// Update single user
const editSingleUserController = (0, tryCatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const getSingleUser = req.body;
    const getFormUser = yield user_services_1.userServices.updateSingleUserService(id, getSingleUser);
    (0, requestResponseSend_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Update single user success!',
        data: getFormUser,
    });
}));
// Update single user
const passwordChangeController = (0, tryCatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const userPassword = req.body;
    const getFormUser = yield user_services_1.userServices.passwordChangeService(id, userPassword);
    (0, requestResponseSend_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Password change success!',
        data: getFormUser,
    });
}));
exports.userController = {
    getUserController,
    createUserController,
    getUserFilterController,
    getSingleUserController,
    editSingleUserController,
    passwordChangeController,
};
