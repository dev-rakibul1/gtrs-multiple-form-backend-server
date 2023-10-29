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
    console.log(paginationOptions);
    (0, requestResponseSend_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'User form data get success!',
        data: result.data,
        meta: result.meta,
    });
}));
// create user data
const createMultipleFromUser = (0, tryCatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getFormData = req.body;
    const getFormUser = yield multiForm_services_1.multipleFormService.createMultipleFormService(getFormData);
    (0, requestResponseSend_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Join with our business success!',
        data: getFormUser,
    });
}));
exports.multipleFormController = {
    getMultipleFromUser,
    createMultipleFromUser,
};