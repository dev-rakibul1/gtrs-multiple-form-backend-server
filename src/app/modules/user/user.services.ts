import { IUser } from './user.interface';
import User from './user.model';

const getUserService = async (): Promise<IUser[]> => {
  const user = await User.find({});
  return user;
};

const createUserService = async (payload: IUser | null): Promise<IUser> => {
  if (payload === null) {
    throw new Error('Server error');
  }

  if (!payload?.role) {
    payload.role! = 'user';
  }

  const user = await User.create(payload);
  return user;
};

export const userServices = {
  getUserService,
  createUserService,
};
