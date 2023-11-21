import bcrypt from 'bcrypt';
import { Model, Schema, model } from 'mongoose';
import config from '../../../config/config';
import { IUser, UserMethod } from './user.interface';

const userSchema = new Schema<IUser, UserMethod>(
  {
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
        async validator(value: string): Promise<boolean> {
          const existingUser = await (this.constructor as Model<IUser>).findOne(
            { email: value },
          );
          return !existingUser;
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
        async validator(value: string): Promise<boolean> {
          const existingUser = await (this.constructor as Model<IUser>).findOne(
            { phone: value },
          );
          return !existingUser;
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
    profileImage: {
      type: String,
      trim: true,
    },
    needPasswordChange: {
      type: Boolean,
      default: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    timestamps: true,
  },
);

// id match
userSchema.methods.isEmailExist = async function (
  email: string,
): Promise<Partial<IUser> | null> {
  const user = await User.findOne(
    { email },
    { email: 1, password: 1, needPasswordChange: 1, role: 1 },
  );

  return user;
};

// password match
userSchema.methods.isPasswordMatch = async function (
  currentPassword: string,
  savePassword: string,
): Promise<boolean> {
  const user = await bcrypt.compare(currentPassword, savePassword);
  return user;
};

// password hash before save password
userSchema.pre<IUser>('save', async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.password_salt),
  );
  next();
});
const User = model<IUser, UserMethod>('user', userSchema);
export default User;
