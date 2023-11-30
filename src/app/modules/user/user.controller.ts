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

    // console.log('Authorization___2:', req.headers.authorization);
    // console.log('Cookies___:', req.cookies);

    requestResponseSend<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User create success!',
      data: result,
    });
  },
);

const getUserFilterController = tryCatchAsync(
  async (req: Request, res: Response) => {
    const token = req.headers.authorization
      ? req.headers.authorization
      : undefined;

    console.log('user.controller__:', token);

    const result = await userServices.getUserFilterService(token);
    // console.log(result);

    // console.log('Authorization___2:', req.headers.authorization);
    // console.log('Cookies___:', req.cookies);

    requestResponseSend(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User filter success!',
      data: result,
    });
  },
);

// Get single user
const getSingleUserController = tryCatchAsync(
  async (req: Request, res: Response) => {
    const getSingleUser = req.params.id;
    const getFormUser = await userServices.getSingleUserService(getSingleUser);

    requestResponseSend<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single user get success!',
      data: getFormUser,
    });
  },
);

// Update single user
const editSingleUserController = tryCatchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const getSingleUser = req.body;
    const getFormUser = await userServices.updateSingleUserService(
      id,
      getSingleUser,
    );

    requestResponseSend<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Update single user success!',
      data: getFormUser,
    });
  },
);

// Update single user
const passwordChangeController = tryCatchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const userPassword = req.body;
    const getFormUser = await userServices.passwordChangeService(
      id,
      userPassword,
    );

    requestResponseSend<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Password change success!',
      data: getFormUser,
    });
  },
);

export const userController = {
  getUserController,
  createUserController,
  getUserFilterController,
  getSingleUserController,
  editSingleUserController,
  passwordChangeController,
};
