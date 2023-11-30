"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contactUs_route_1 = require("../modules/contactUs/contactUs.route");
const ipInfo_route_1 = require("../modules/ipInfo/ipInfo.route");
const multiForm_route_1 = require("../modules/muti-form/multiForm.route");
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/auth/auth.route");
const user_route_1 = require("../modules/user/user.route");
const router = express_1.default.Router();
const moduleRouters = [
    {
        path: '/form-data',
        routes: multiForm_route_1.multipleFormRoute,
    },
    {
        path: '/contact-us',
        routes: contactUs_route_1.contactUsRoute,
    },
    {
        path: '/ip-info',
        routes: ipInfo_route_1.ipInfoRoute,
    },
    {
        path: '/user',
        routes: user_route_1.userRoute,
    },
    {
        path: '/auth',
        routes: auth_route_1.authRoute,
    },
];
moduleRouters.forEach(route => router.use(route.path, route.routes));
exports.default = router;
