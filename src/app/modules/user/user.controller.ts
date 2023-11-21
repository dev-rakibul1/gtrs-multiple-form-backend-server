import { Request, Response } from 'express';
import httpStatus from 'http-status';
import requestResponseSend from '../../../shared/requestResponseSend';
import tryCatchAsync from '../../../shared/tryCatchAsync';
import { IUser } from './user.interface';
import { userServices } from './user.services';

const getUserController = tryCatchAsync(async (req: Request, res: Response) => {
  const result = await userServices.getUserService();

  console.log('Authorization___:', req.headers.authorization);

  requestResponseSend<IUser[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User form data get success!',
    data: result,
  });
});

const createUserController = tryCatchAsync(
  async (req: Request, res: Response) => {
    const user = req.body;
    const result = await userServices.createUserService(user);

    // console.log('Cookies___:', req.cookies);

    requestResponseSend<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User create success!',
      data: result,
    });
  },
);

export const userController = {
  getUserController,
  createUserController,
};
