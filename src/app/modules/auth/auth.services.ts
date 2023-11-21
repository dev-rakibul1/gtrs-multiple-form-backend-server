import bcrypt from 'bcrypt';
import { Secret } from 'jsonwebtoken';
import config from '../../../config/config';
import { jwtTokenProvider } from '../../helper/jwtHelper';
import User from '../user/user.model';
import {
  IAuthLoginTypes,
  IRefreshToken,
  IUserLoginResponse,
} from './auth.interface';

const loginUserService = async (
  payload: IAuthLoginTypes,
): Promise<IUserLoginResponse> => {
  const { email, password } = payload;

  const user = new User();

  const isEmailExist = await user.isEmailExist(email);

  // const isUserExist = await User.findOne(
  //   { email },
  //   { _id: 1, email: 1, password: 1, role: 1 },
  // ).lean();

  if (!isEmailExist) {
    throw new Error('User not found.');
  }

  // console.log(isEmailExist);
  // password match
  const isPasswordMatch = await bcrypt.compare(
    password,
    isEmailExist?.password,
  );

  if (!isPasswordMatch) {
    throw new Error('Password does not match.');
  }

  if (
    isEmailExist?.password &&
    !user.isPasswordMatch(password, isEmailExist?.password)
  ) {
    throw new Error('Your password does not match.');
  }

  const accessToken = jwtTokenProvider.createToken(
    {
      email: isEmailExist?.email,
      role: isEmailExist?.role,
    },
    config.jwtAccessKey as Secret,
    config.jwtAccessExpireDate as string,
  );

  // Refresh token
  const refreshToken = jwtTokenProvider.createToken(
    { email: isEmailExist?.email, role: isEmailExist?.role },
    config.jwtRefreshKey as Secret,
    config.jwtRefreshExpireDate as string,
  );
  const { needPasswordChange } = isEmailExist;
  // console.log({ accessToken, refreshToken, needPasswordChange });

  return {
    accessToken,
    refreshToken,
    needPasswordChange,
  };
};

const refreshTokenService = async (token: string): Promise<IRefreshToken> => {
  let verifyToken = null;
  try {
    verifyToken = jwtTokenProvider.verifyJwtToken(
      token,
      config.jwtRefreshKey as Secret,
    );
  } catch (error) {
    throw new Error('Invalid refresh token.');
  }

  const { email } = verifyToken;
  console.log('Token___:', verifyToken);

  const user = new User();
  const isEmailExit = await user.isEmailExist(email);

  if (!isEmailExit?.email) {
    throw new Error('User does not exist.');
  }

  // generate a new token
  const newAccessToken = jwtTokenProvider.createToken(
    {
      email: isEmailExit.email,
      role: isEmailExit.role,
    },
    config.jwtAccessKey as Secret,
    config.jwtAccessExpireDate as string,
  );

  console.log('New token___:', newAccessToken);

  return {
    accessToken: newAccessToken,
  };
};

export const authService = {
  loginUserService,
  refreshTokenService,
};
