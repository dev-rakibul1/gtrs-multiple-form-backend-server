import { IMultipleForm } from './multiForm.interface';
import MultipleForm from './multiForm.model';

const getMultipleFormService = async (): Promise<IMultipleForm[]> => {
  const getFormData = await MultipleForm.find({});
  return getFormData;
};

export const multipleFormService = {
  getMultipleFormService,
};
