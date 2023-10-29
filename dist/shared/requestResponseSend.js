"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestResponseSend = (res, data) => {
    const requestSendData = {
        statusCode: data.statusCode,
        success: data.success,
        message: data.message || null,
        meta: data.meta || null || undefined,
        data: data.data || null,
    };
    res.status(data.statusCode).json(requestSendData);
};
exports.default = requestResponseSend;
