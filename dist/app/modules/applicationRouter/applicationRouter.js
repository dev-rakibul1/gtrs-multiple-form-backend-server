"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contactUs_route_1 = require("../contactUs/contactUs.route");
const ipInfo_route_1 = require("../ipInfo/ipInfo.route");
const multiForm_route_1 = require("../muti-form/multiForm.route");
const express_1 = __importDefault(require("express"));
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
];
moduleRouters.forEach(route => router.use(route.path, route.routes));
exports.default = router;
