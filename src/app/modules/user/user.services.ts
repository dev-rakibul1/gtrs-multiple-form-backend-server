import { Secret } from 'jsonwebtoken';
import config from '../../../config/config';
import { jwtTokenProvider } from '../../helper/jwtHelper';
import { IUser } from './user.interface';
import User from './user.model';

type resData = {
  accessToken: string;
  refreshToken: string;
  userInfo: IUser;
};

const getUserService = async (): Promise<IUser[]> => {
  const user = await User.find({});
  return user;
};

// eslint-disable-next-line no-undef
const createUserService = async (
  payload: IUser | null,
): Promise<resData | void> => {
  if (payload === null) {
    throw new Error('Server error');
  }

  if (!payload?.role) {
    payload.role! = 'user';
  }

  const accessToken = jwtTokenProvider.createToken(
    {
      email: payload?.email,
      role: payload?.role,
    },
    config.jwtAccessKey as Secret,
    config.jwtAccessExpireDate as string,
  );

  // Refresh token
  const refreshToken = jwtTokenProvider.createToken(
    { email: payload?.email, role: payload?.role },
    config.jwtRefreshKey as Secret,
    config.jwtRefreshExpireDate as string,
  );
  // console.log({ accessToken, refreshToken, needPasswordChange });

  const userInfo = await User.create(payload);
  // console.log({
  //   accessToken,
  //   refreshToken,
  //   userInfo,
  // });

  return { accessToken, refreshToken, userInfo };
};

type filterEmail = {
  email: string | undefined;
};

const getUserFilterService = async (email: string): Promise<filterEmail> => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error('User not found!');
  }

  return user;
};

export const userServices = {
  getUserService,
  createUserService,
  getUserFilterService,
};
