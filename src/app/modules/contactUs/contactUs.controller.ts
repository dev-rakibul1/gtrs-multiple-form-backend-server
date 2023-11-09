import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationSort } from '../../../shared/paginationSort';
import pick from '../../../shared/pick';
import requestResponseSend from '../../../shared/requestResponseSend';
import tryCatchAsync from '../../../shared/tryCatchAsync';
import { IContactUs } from './contactUs.interface';
import { contactUsService } from './contactUs.services';

// get contact data
const getContactUsController = tryCatchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, ['searchTerm']);
    const paginationOptions = pick(req.query, paginationSort);
    const result = await contactUsService.getContactUsService(
      filters,
      paginationOptions,
    );

    requestResponseSend<IContactUs[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User form data get success!',
      data: result.data,
      meta: result.meta,
    });
  },
);

// Create contact data
const createContactUController = tryCatchAsync(
  async (req: Request, res: Response) => {
    const crateUserData = req.body;

    const getFormUser =
      await contactUsService.createContactUsService(crateUserData);
    requestResponseSend<IContactUs>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Connected success!',
      data: getFormUser,
    });
  },
);

// Get single contact data
const getSingleContactUsController = tryCatchAsync(
  async (req: Request, res: Response) => {
    const getSingleUser = req.params.id;
    const getFormUser =
      await contactUsService.getSingleContactUsService(getSingleUser);
    requestResponseSend<IContactUs>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single contact get success!',
      data: getFormUser,
    });
  },
);

// Delete single contact data
const contactUsFormController = tryCatchAsync(
  async (req: Request, res: Response) => {
    const getSingleUser = req.params.id;
    const getFormUser =
      await contactUsService.deleteSingleContactUsService(getSingleUser);
    requestResponseSend<IContactUs>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single contact delete success!',
      data: getFormUser,
    });
  },
);
// Update single contact data
const updateSingleContactUs = tryCatchAsync(
  async (req: Request, res: Response) => {
    const getSingleUser = req.params.id;
    const getUpdateEntry = req.body;
    const getFormUser = await contactUsService.updateSingleContactUsService(
      getSingleUser,
      getUpdateEntry,
    );
    requestResponseSend<IContactUs>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single contact update success!',
      data: getFormUser,
    });
  },
);

export const contactUsController = {
  getSingleContactUsController,
  createContactUController,
  getContactUsController,
  contactUsFormController,
  updateSingleContactUs,
};
