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
exports.ipInfoController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const node_os_1 = __importDefault(require("node:os"));
const requestResponseSend_1 = __importDefault(require("../../../shared/requestResponseSend"));
const tryCatchAsync_1 = __importDefault(require("../../../shared/tryCatchAsync"));
const getIpInfoController = (0, tryCatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ip = req.ip;
    const platform = node_os_1.default.platform();
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    // const userBrowser = global.navigator.userAgent;
    // const userLatitude = position.coords.latitude;
    // const userLongitude = position.coords.longitude;
    const getIpInfo = {
        ip,
        platform,
        userTimezone,
        // userBrowser,
    };
    (0, requestResponseSend_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Ip info get success!',
        data: getIpInfo,
    });
}));
exports.ipInfoController = {
    getIpInfoController,
};
