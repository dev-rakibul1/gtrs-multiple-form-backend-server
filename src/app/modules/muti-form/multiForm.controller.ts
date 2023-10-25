import { Request, Response } from 'express';
import httpStatus from 'http-status';
import requestResponseSend from '../../../shared/requestResponseSend';
import tryCatchAsync from '../../../shared/tryCatchAsync';
import { multipleFormService } from './multiForm.services';

// get user data
const getMultipleFromUser = tryCatchAsync(
  async (req: Request, res: Response) => {
    const getFormUser = await multipleFormService.getMultipleFormService();

    requestResponseSend(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User form data get success!',
      data: getFormUser.length ? getFormUser : 'Data not available',
    });
  },
);

// create user data
const createMultipleFromUser = tryCatchAsync(
  async (req: Request, res: Response) => {
    const getFormData = req.body;

    const getFormUser =
      await multipleFormService.createMultipleFormService(getFormData);

    requestResponseSend(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Join with our business success!',
      data: getFormUser,
    });
  },
);

export const multipleFormController = {
  getMultipleFromUser,
  createMultipleFromUser,
};
