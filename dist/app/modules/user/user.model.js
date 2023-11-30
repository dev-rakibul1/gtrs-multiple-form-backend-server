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
const bcrypt_1 = __importDefault(require("bcrypt"));
const mongoose_1 = require("mongoose");
const config_1 = __importDefault(require("../../../config/config"));
// const roleArray: roleType[] = ['user', 'editor', 'admin', 'super_admin'];
const userSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate: {
            validator(value) {
                return __awaiter(this, void 0, void 0, function* () {
                    const existingUser = yield this.constructor.findOne({ email: value });
                    return !existingUser;
                });
            },
            message: 'Email must be unique.',
        },
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate: {
            validator(value) {
                return __awaiter(this, void 0, void 0, function* () {
                    const existingUser = yield this.constructor.findOne({ phone: value });
                    return !existingUser;
                });
            },
            message: 'Phone number must be unique.',
        },
    },
    role: {
        type: String,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    newPassword: {
        type: String,
        select: 0,
    },
    profileImage: {
        type: String,
        trim: true,
        required: true,
    },
    needPasswordChange: {
        type: Boolean,
        default: true,
    },
}, {
    toJSON: {
        virtuals: true,
    },
    timestamps: true,
});
// id match
userSchema.methods.isEmailExist = function (email) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield User.findOne({ email }, { email: 1, password: 1, needPasswordChange: 1, role: 1 });
        return user;
    });
};
// password match
userSchema.methods.isPasswordMatch = function (currentPassword, savePassword) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield bcrypt_1.default.compare(currentPassword, savePassword);
        return user;
    });
};
// password hash before save password
userSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        this.password = yield bcrypt_1.default.hash(this.password, Number(config_1.default.password_salt));
        next();
    });
});
const User = (0, mongoose_1.model)('user', userSchema);
exports.default = User;
