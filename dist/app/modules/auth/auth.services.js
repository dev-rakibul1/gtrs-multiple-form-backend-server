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
exports.authService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../../config/config"));
const jwtHelper_1 = require("../../helper/jwtHelper");
const user_model_1 = __importDefault(require("../user/user.model"));
const loginUserService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    const user = new user_model_1.default();
    const isEmailExist = yield user.isEmailExist(email);
    // const isUserExist = await User.findOne(
    //   { email },
    //   { _id: 1, email: 1, password: 1, role: 1 },
    // ).lean();
    if (!isEmailExist) {
        throw new Error('User not found.');
    }
    // console.log(isEmailExist);
    // password match
    const isPasswordMatch = bcrypt_1.default.compare(password, isEmailExist.password);
    if (!isPasswordMatch) {
        throw new Error('Password does not match.');
    }
    if ((isEmailExist === null || isEmailExist === void 0 ? void 0 : isEmailExist.password) &&
        !user.isPasswordMatch(password, isEmailExist === null || isEmailExist === void 0 ? void 0 : isEmailExist.password)) {
        throw new Error('Your password does not match.');
    }
    const accessToken = jwtHelper_1.jwtTokenProvider.createToken({
        email: isEmailExist === null || isEmailExist === void 0 ? void 0 : isEmailExist.email,
        role: isEmailExist === null || isEmailExist === void 0 ? void 0 : isEmailExist.role,
    }, config_1.default.jwtAccessKey, config_1.default.jwtAccessExpireDate);
    // Refresh token
    const refreshToken = jwtHelper_1.jwtTokenProvider.createToken({ email: isEmailExist === null || isEmailExist === void 0 ? void 0 : isEmailExist.email, role: isEmailExist === null || isEmailExist === void 0 ? void 0 : isEmailExist.role }, config_1.default.jwtRefreshKey, config_1.default.jwtRefreshExpireDate);
    const { needPasswordChange } = isEmailExist;
    // console.log({ accessToken, refreshToken, needPasswordChange });
    return {
        accessToken,
        refreshToken,
        needPasswordChange,
    };
});
const refreshTokenService = (token) => __awaiter(void 0, void 0, void 0, function* () {
    let verifyToken = null;
    try {
        verifyToken = jwtHelper_1.jwtTokenProvider.verifyJwtToken(token, config_1.default.jwtRefreshKey);
    }
    catch (error) {
        throw new Error('Invalid refresh token.');
    }
    const { email } = verifyToken;
    console.log('Token___:', verifyToken);
    const user = new user_model_1.default();
    const isEmailExit = yield user.isEmailExist(email);
    if (!(isEmailExit === null || isEmailExit === void 0 ? void 0 : isEmailExit.email)) {
        throw new Error('User does not exist.');
    }
    // generate a new token
    const newAccessToken = jwtHelper_1.jwtTokenProvider.createToken({
        email: isEmailExit.email,
        role: isEmailExit.role,
    }, config_1.default.jwtAccessKey, config_1.default.jwtAccessExpireDate);
    console.log('New token___:', newAccessToken);
    return {
        accessToken: newAccessToken,
    };
});
// Logout route
// const logoutService = async (
//   token: string | undefined,
// ): Promise<IUser | null> => {
//   if (!token) {
//     throw new Error('Token not found.');
//   }
//   // token verify
//   const decoded = jwtTokenProvider.verifyJwtToken(
//     token,
//     config.jwtRefreshKey as Secret,
//   );
//   console.log('Token:', token, 'decoded', decoded);
//   if (!decoded || !decoded.email) {
//     throw new Error('Invalid token');
//   }
//   const email = decoded.email;
//   // Example: Mark the user's refresh token as revoked in the database
//   const updatedUser = await User.findOneAndUpdate(
//     { email },
//     { $set: { revokedRefreshToken: true } },
//     { new: true },
//   );
//   if (!updatedUser) {
//     throw new Error('User not found.');
//   }
//   return updatedUser;
// };
exports.authService = {
    loginUserService,
    refreshTokenService,
    // logoutService,
};
