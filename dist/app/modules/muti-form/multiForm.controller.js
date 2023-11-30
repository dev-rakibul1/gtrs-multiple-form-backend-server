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
exports.multipleFormController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const paginationSort_1 = require("../../../shared/paginationSort");
const pick_1 = __importDefault(require("../../../shared/pick"));
const requestResponseSend_1 = __importDefault(require("../../../shared/requestResponseSend"));
const tryCatchAsync_1 = __importDefault(require("../../../shared/tryCatchAsync"));
const multiForm_services_1 = require("./multiForm.services");
// get user data
const getMultipleFromUser = (0, tryCatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, ['searchTerm']);
    const paginationOptions = (0, pick_1.default)(req.query, paginationSort_1.paginationSort);
    const result = yield multiForm_services_1.multipleFormService.getMultipleFormService(filters, paginationOptions);
    console.log(req.headers.authorization, ':________form data');
    (0, requestResponseSend_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'User form data get success!',
        data: result.data,
        meta: result.meta,
    });
}));
// type UploadFiles = {
//   nameCard?: Express.Multer.File[];
//   nationalID?: Express.Multer.File[];
//   registrationDocs?: Express.Multer.File[];
//   travelAgentLicense?: Express.Multer.File[];
// };
// create user data
const createMultipleFromUser = (0, tryCatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const createdFormData = yield multiForm_services_1.multipleFormService.createMultipleFormService(userData);
    (0, requestResponseSend_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Join with our business success!',
        data: createdFormData,
    });
}));
// get single user data
const getSingleMultipleFromUser = (0, tryCatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getSingleUser = req.params.id;
    // console.log(getSingleUser);
    const getFormUser = yield multiForm_services_1.multipleFormService.getSingleMultipleFromUserService(getSingleUser);
    (0, requestResponseSend_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Single entry get success!',
        data: getFormUser,
    });
}));
// Delete single user data
const deleteSingleMultipleFromUser = (0, tryCatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getSingleUser = req.params.id;
    const getFormUser = yield multiForm_services_1.multipleFormService.deleteSingleMultipleFromUserService(getSingleUser);
    (0, requestResponseSend_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Single data delete success!',
        data: getFormUser,
    });
}));
// update single user data
const updateSingleMultipleFromUser = (0, tryCatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getUpdateEntry = req.body;
    const getSingleUser = req.params.id;
    const getFormUser = yield multiForm_services_1.multipleFormService.updateSingleMultipleFromUserService(getSingleUser, getUpdateEntry);
    (0, requestResponseSend_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Single entry update success!',
        data: getFormUser,
    });
}));
exports.multipleFormController = {
    getMultipleFromUser,
    createMultipleFromUser,
    getSingleMultipleFromUser,
    deleteSingleMultipleFromUser,
    updateSingleMultipleFromUser,
};
