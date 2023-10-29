"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const http_status_1 = __importDefault(require("http-status"));
const applicationRouter_1 = __importDefault(require("./app/modules/applicationRouter/applicationRouter"));
const server_1 = __importDefault(require("./utils/server"));
const app = (0, express_1.default)();
// middle were calling
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
// application router
app.use('/api/v1/', applicationRouter_1.default);
// global error handling
app.use('*', (req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: 'Not fount.',
        errorMessage: [
            {
                path: req.originalUrl,
                message: 'API not found!',
            },
        ],
    });
    next();
});
// database connected
(0, server_1.default)();
exports.default = app;
