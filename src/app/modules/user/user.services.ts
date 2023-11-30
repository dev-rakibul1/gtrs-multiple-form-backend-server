import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../../../config/config';
import { IUser } from './user.interface';
import User from './user.model';

// type resData = {
//   accessToken: string;
//   refreshToken: string;
//   userInfo: IUser;
// };

const getUserService = async (): Promise<IUser[]> => {
  const user = await User.find({});
  return user;
};

// eslint-disable-next-line no-undef
const createUserService = async (
  payload: IUser | null,
): Promise<IUser | null> => {
  if (payload === null) {
    throw new Error('Server error');
  }

  payload.role = payload.role || 'user';
  payload.profileImage =
    payload.profileImage ?? 'https://placekitten.com/150/150';

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

  const user = await User.create(payload);
  return user;
};

type filterEmail = {
  email: string;
};

const getUserFilterService = async (
  token: string | undefined,
): Promise<filterEmail | null> => {
  if (!token) {
    throw new Error('Unauthorized');
  }

  // Decoding the JWT payload
  const decodedPayload = jwt.decode(token) as JwtPayload;
  console.log(decodedPayload);

  const email = decodedPayload?.email;

  if (!email) {
    throw new Error('Email not found in JWT payload');
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error('User not found!');
  }

  return user;
};

const getSingleUserService = async (id: string): Promise<IUser | null> => {
  const isExist = await User.findById(id);

  if (!isExist) {
    throw new Error('Entry not available.');
  }

  const getFormData = await User.findById(id);
  return getFormData;
};

// update single user
const updateSingleUserService = async (
  id: string,
  payload: IUser,
): Promise<IUser | null> => {
  const isExist = await User.findById(id);

  if (!isExist) {
    throw new Error('User not found!');
  }

  const getFormData = await User.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return getFormData;
};

// Password change
const passwordChangeService = async (
  id: string,
  payload: IUser,
): Promise<IUser | null> => {
  const isExist = await User.findById(id);
  if (!isExist) {
    throw new Error('User not found!');
  }
  const isCurrentPassword = payload.password;

  if (!isCurrentPassword) {
    throw new Error('Password does not exist!');
  }

  const dbPass = await User.findById(id, { password: 1 }).lean();

  if (!dbPass) {
    throw new Error('Password does not exist!');
  }

  // password verify
  const isPasswordMatch = await bcrypt.compare(
    isCurrentPassword,
    dbPass?.password,
  );

  if (!isPasswordMatch) {
    throw new Error('Current password does not match!');
  }

  const isNewPassword = payload.newPassword;
  if (!isNewPassword) {
    throw new Error('New password does not exist!');
  }

  // Hash the new password before updating
  const hashedPassword = await bcrypt.hash(
    isNewPassword,
    Number(config.password_salt),
  );

  const updatePassword = await User.findByIdAndUpdate(
    id,
    { password: hashedPassword, newPassword: '' },
    { new: true },
  );
  return updatePassword;
};

export const userServices = {
  getUserService,
  createUserService,
  getUserFilterService,
  getSingleUserService,
  updateSingleUserService,
  passwordChangeService,
};
