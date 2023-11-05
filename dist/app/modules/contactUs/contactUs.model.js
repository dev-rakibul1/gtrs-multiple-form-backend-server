"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const contactUsSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        trim: true,
        required: true,
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    phone: {
        type: Number,
        trim: true,
        required: true,
    },
    country: {
        type: String,
        trim: true,
        required: true,
    },
    company: {
        type: String,
        trim: true,
        required: true,
    },
    message: {
        type: String,
        trim: true,
    },
    value: {
        type: String,
        trim: true,
    },
    productQuery: {
        type: String,
        trim: true,
    },
    quarryFilter: {
        type: String,
        trim: true,
    },
    group2: {
        type: [String],
        trim: true,
    },
    group3: {
        type: String,
        trim: true,
    },
    group4: {
        type: String,
        trim: true,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
const ContactUs = (0, mongoose_1.model)('Contactus', contactUsSchema);
exports.default = ContactUs;
