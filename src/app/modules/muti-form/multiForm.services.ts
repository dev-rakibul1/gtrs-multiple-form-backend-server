import { IMultipleForm } from './multiForm.interface';
import MultipleForm from './multiForm.model';

const getMultipleFormService = async (): Promise<IMultipleForm[]> => {
  const getFormData = await MultipleForm.find({});
  return getFormData;
};

const createMultipleFormService = async (
  payload: IMultipleForm,
): Promise<IMultipleForm> => {
  const getFormData = await MultipleForm.create(payload);
  return getFormData;
};

export const multipleFormService = {
  getMultipleFormService,
  createMultipleFormService,
};
