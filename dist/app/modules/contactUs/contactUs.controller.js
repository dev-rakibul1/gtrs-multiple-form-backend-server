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
exports.contactUsController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const paginationSort_1 = require("../../../shared/paginationSort");
const pick_1 = __importDefault(require("../../../shared/pick"));
const requestResponseSend_1 = __importDefault(require("../../../shared/requestResponseSend"));
const tryCatchAsync_1 = __importDefault(require("../../../shared/tryCatchAsync"));
const contactUs_services_1 = require("./contactUs.services");
// get contact data
const getContactUsController = (0, tryCatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, ['searchTerm']);
    const paginationOptions = (0, pick_1.default)(req.query, paginationSort_1.paginationSort);
    const result = yield contactUs_services_1.contactUsService.getContactUsService(filters, paginationOptions);
    (0, requestResponseSend_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'User form data get success!',
        data: result.data,
        meta: result.meta,
    });
}));
// Create contact data
const createContactUController = (0, tryCatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const crateUserData = req.body;
    const getFormUser = yield contactUs_services_1.contactUsService.createContactUsService(crateUserData);
    (0, requestResponseSend_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Connected success!',
        data: getFormUser,
    });
}));
// Get single contact data
const getSingleContactUsController = (0, tryCatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getSingleUser = req.params.id;
    const getFormUser = yield contactUs_services_1.contactUsService.getSingleContactUsService(getSingleUser);
    (0, requestResponseSend_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Single contact get success!',
        data: getFormUser,
    });
}));
// Delete single contact data
const contactUsFormController = (0, tryCatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getSingleUser = req.params.id;
    const getFormUser = yield contactUs_services_1.contactUsService.deleteSingleContactUsService(getSingleUser);
    (0, requestResponseSend_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Single contact delete success!',
        data: getFormUser,
    });
}));
// Update single contact data
const updateSingleContactUs = (0, tryCatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getSingleUser = req.params.id;
    const getUpdateEntry = req.body;
    const getFormUser = yield contactUs_services_1.contactUsService.updateSingleContactUsService(getSingleUser, getUpdateEntry);
    (0, requestResponseSend_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Single contact update success!',
        data: getFormUser,
    });
}));
exports.contactUsController = {
    getSingleContactUsController,
    createContactUController,
    getContactUsController,
    contactUsFormController,
    updateSingleContactUs,
};
