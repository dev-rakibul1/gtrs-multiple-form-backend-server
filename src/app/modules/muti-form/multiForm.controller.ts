import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationSort } from '../../../shared/paginationSort';
import pick from '../../../shared/pick';
import requestResponseSend from '../../../shared/requestResponseSend';
import tryCatchAsync from '../../../shared/tryCatchAsync';
import { IMultipleForm } from './multiForm.interface';
import { multipleFormService } from './multiForm.services';

// get user data
const getMultipleFromUser = tryCatchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, ['searchTerm']);
    const paginationOptions = pick(req.query, paginationSort);
    const result = await multipleFormService.getMultipleFormService(
      filters,
      paginationOptions,
    );

    console.log(paginationOptions);

    requestResponseSend<IMultipleForm[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User form data get success!',
      data: result.data,
      meta: result.meta,
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
