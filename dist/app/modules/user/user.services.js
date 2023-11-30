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
exports.userServices = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../../config/config"));
const user_model_1 = __importDefault(require("./user.model"));
// type resData = {
//   accessToken: string;
//   refreshToken: string;
//   userInfo: IUser;
// };
const getUserService = () => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.default.find({});
    return user;
});
// eslint-disable-next-line no-undef
const createUserService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (payload === null) {
        throw new Error('Server error');
    }
    payload.role = payload.role || 'user';
    payload.profileImage =
        (_a = payload.profileImage) !== null && _a !== void 0 ? _a : 'https://placekitten.com/150/150';
    // const accessToken = jwtTokenProvider.createToken(
    //   {
    //     email: payload?.email,
    //     role: payload?.role,
    //   },
    //   config.jwtAccessKey as Secret,
    //   config.jwtAccessExpireDate as string,
    // );
    // Refresh token
    // const refreshToken = jwtTokenProvider.createToken(
    //   { email: payload?.email, role: payload?.role },
    //   config.jwtRefreshKey as Secret,
    //   config.jwtRefreshExpireDate as string,
    // );
    // // console.log({ accessToken, refreshToken, needPasswordChange });
    // const userInfo = await User.create(payload);
    // // console.log({
    // //   accessToken,
    // //   refreshToken,
    // //   userInfo,
    // // });
    const user = yield user_model_1.default.create(payload);
    return user;
});
const getUserFilterService = (token) => __awaiter(void 0, void 0, void 0, function* () {
    if (!token) {
        throw new Error('Unauthorized');
    }
    // Decoding the JWT payload
    const decodedPayload = jsonwebtoken_1.default.decode(token);
    console.log(decodedPayload);
    const email = decodedPayload === null || decodedPayload === void 0 ? void 0 : decodedPayload.email;
    if (!email) {
        throw new Error('Email not found in JWT payload');
    }
    const user = yield user_model_1.default.findOne({ email });
    if (!user) {
        throw new Error('User not found!');
    }
    return user;
});
const getSingleUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield user_model_1.default.findById(id);
    if (!isExist) {
        throw new Error('Entry not available.');
    }
    const getFormData = yield user_model_1.default.findById(id);
    return getFormData;
});
// update single user
const updateSingleUserService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield user_model_1.default.findById(id);
    if (!isExist) {
        throw new Error('User not found!');
    }
    const getFormData = yield user_model_1.default.findByIdAndUpdate(id, payload, {
        new: true,
    });
    return getFormData;
});
// Password change
const passwordChangeService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield user_model_1.default.findById(id);
    if (!isExist) {
        throw new Error('User not found!');
    }
    const isCurrentPassword = payload.password;
    if (!isCurrentPassword) {
        throw new Error('Password does not exist!');
    }
    const dbPass = yield user_model_1.default.findById(id, { password: 1 }).lean();
    if (!dbPass) {
        throw new Error('Password does not exist!');
    }
    // password verify
    const isPasswordMatch = yield bcrypt_1.default.compare(isCurrentPassword, dbPass === null || dbPass === void 0 ? void 0 : dbPass.password);
    if (!isPasswordMatch) {
        throw new Error('Current password does not match!');
    }
    const isNewPassword = payload.newPassword;
    if (!isNewPassword) {
        throw new Error('New password does not exist!');
    }
    // Hash the new password before updating
    const hashedPassword = yield bcrypt_1.default.hash(isNewPassword, Number(config_1.default.password_salt));
    const updatePassword = yield user_model_1.default.findByIdAndUpdate(id, { password: hashedPassword, newPassword: '' }, { new: true });
    return updatePassword;
});
exports.userServices = {
    getUserService,
    createUserService,
    getUserFilterService,
    getSingleUserService,
    updateSingleUserService,
    passwordChangeService,
};
