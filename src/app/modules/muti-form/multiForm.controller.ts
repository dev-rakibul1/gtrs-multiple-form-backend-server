import { Request, Response } from 'express';
import httpStatus from 'http-status';
import requestResponseSend from '../../../shared/requestResponseSend';
import tryCatchAsync from '../../../shared/tryCatchAsync';
import { multipleFormService } from './multiForm.services';

const getMultipleFromUser = tryCatchAsync(
  async (req: Request, res: Response) => {
    const getFormUser = await multipleFormService.getMultipleFormService();

    requestResponseSend(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User form data get success!',
      data: getFormUser,
    });
  },
);

export const multipleFormController = {
  getMultipleFromUser,
};
