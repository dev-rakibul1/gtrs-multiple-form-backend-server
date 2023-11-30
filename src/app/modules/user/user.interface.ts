import { Model } from 'mongoose';

export type IUser = {
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  phone: string;
  password: string;
  profileImage: string;
  needPasswordChange: boolean;
  newPassword?: string;
};

export type IUserMethods = {
  isEmailExist(email: string): Promise<Partial<IUser> | null>;
  isPasswordMatch(
    currentPassword: string,
    savePassword: string,
  ): Promise<boolean>;
};
export type UserMethod = Model<IUser, Record<string, unknown>, IUserMethods>;
