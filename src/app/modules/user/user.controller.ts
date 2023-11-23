import { Request, Response } from 'express';
import httpStatus from 'http-status';
import jwt from 'jsonwebtoken';
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
    console.log('Authorization___2:', req.headers.authorization);
    // console.log('Cookies___:', req.cookies);

    requestResponseSend(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User create success!',
      data: result,
    });
  },
);

const getUserFilterController = tryCatchAsync(
  async (req: Request, res: Response) => {
    const token = req.headers.authorization;
    if (!token) {
      res.status(401).json({
        status: 401,
        message: 'Unauthorized',
      });
    }

    // Decoding the JWT payload
    const decodedPayload = jwt.decode(token!);

    // Extracting user email
    const userEmail = decodedPayload ? decodedPayload.email : null;
    console.log('userEmail___:', userEmail);

    const result = await userServices.getUserFilterService(userEmail);

    console.log('Authorization___2:', req.headers.authorization);
    // console.log('Cookies___:', req.cookies);

    requestResponseSend(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User filter success!',
      data: result,
    });
  },
);

export const userController = {
  getUserController,
  createUserController,
  getUserFilterController,
};
