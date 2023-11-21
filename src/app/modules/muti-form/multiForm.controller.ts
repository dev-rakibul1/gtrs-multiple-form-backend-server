/* eslint-disable no-undef */
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

    console.log(req.headers.authorization, ':________form data');

    requestResponseSend<IMultipleForm[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User form data get success!',
      data: result.data,
      meta: result.meta,
    });
  },
);

// type UploadFiles = {
//   nameCard?: Express.Multer.File[];
//   nationalID?: Express.Multer.File[];
//   registrationDocs?: Express.Multer.File[];
//   travelAgentLicense?: Express.Multer.File[];
// };

// create user data
const createMultipleFromUser = tryCatchAsync(
  async (req: Request, res: Response) => {
    const userData = req.body;

    const createdFormData =
      await multipleFormService.createMultipleFormService(userData);

    requestResponseSend<IMultipleForm>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Join with our business success!',
      data: createdFormData,
    });
  },
);

// get single user data
const getSingleMultipleFromUser = tryCatchAsync(
  async (req: Request, res: Response) => {
    const getSingleUser = req.params.id;
    // console.log(getSingleUser);

    const getFormUser =
      await multipleFormService.getSingleMultipleFromUserService(getSingleUser);

    requestResponseSend<IMultipleForm>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single entry get success!',
      data: getFormUser,
    });
  },
);

// Delete single user data
const deleteSingleMultipleFromUser = tryCatchAsync(
  async (req: Request, res: Response) => {
    const getSingleUser = req.params.id;

    const getFormUser =
      await multipleFormService.deleteSingleMultipleFromUserService(
        getSingleUser,
      );

    requestResponseSend<IMultipleForm>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single data delete success!',
      data: getFormUser,
    });
  },
);

// update single user data
const updateSingleMultipleFromUser = tryCatchAsync(
  async (req: Request, res: Response) => {
    const getUpdateEntry = req.body;
    const getSingleUser = req.params.id;

    const getFormUser =
      await multipleFormService.updateSingleMultipleFromUserService(
        getSingleUser,
        getUpdateEntry,
      );

    requestResponseSend<IMultipleForm>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single entry update success!',
      data: getFormUser,
    });
  },
);

export const multipleFormController = {
  getMultipleFromUser,
  createMultipleFromUser,
  getSingleMultipleFromUser,
  deleteSingleMultipleFromUser,
  updateSingleMultipleFromUser,
};
