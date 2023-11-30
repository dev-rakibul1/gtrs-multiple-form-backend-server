"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../../config/config"));
const jwtHelper_1 = require("../helper/jwtHelper");
const auth = (...requireRole) => (req, res, next) => {
    try {
        // get authorization
        const token = req.headers.authorization;
        if (!token) {
            res.status(401).json({
                status: 401,
                message: 'Unauthorized',
            });
        }
        console.log(requireRole);
        console.log(token);
        // verify token
        let verifyUser = null;
        verifyUser = jwtHelper_1.jwtTokenProvider.verifyJwtToken(token, config_1.default.jwtAccessKey);
        req.user = verifyUser;
        if (requireRole.length && !requireRole.includes(verifyUser.role)) {
            throw new Error('Forbidden user');
        }
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.default = auth;
