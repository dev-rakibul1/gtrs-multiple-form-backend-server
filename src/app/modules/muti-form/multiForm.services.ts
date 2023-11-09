import { SortOrder } from 'mongoose';
import { IGenericResponse, IMultipleFormFilters } from '../../types/types';
import { IPaginationOptionsTypes } from '../pagination/pagination';
import { paginationHelper } from '../pagination/paginationHelper';
import { multiFormSearchFiledName } from './multiForm.constant';
import { IMultipleForm } from './multiForm.interface';
import MultipleForm from './multiForm.model';

const getMultipleFormService = async (
  filters: IMultipleFormFilters,
  paginationOptions: IPaginationOptionsTypes,
): Promise<IGenericResponse<IMultipleForm[]>> => {
  const { searchTerm } = filters;

  console.log(filters);
  const andConditions = [];

  if (filters)
    if (searchTerm) {
      // PARTIAL match or search value
      andConditions.push({
        $or: multiFormSearchFiledName.map(field => ({
          [field]: {
            $regex: searchTerm,
            $options: 'i',
          },
        })),
      });
    }

  // filter match
  // if (Object.keys(filtersData).length) {
  //   andConditions.push({
  //     $and: Object.entries(filtersData).map(([filed, value]) => ({
  //       [filed]: value,
  //     })),
  //   });
  // }

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelper.paginationCalculations(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const whereConditions = andConditions.length ? { $and: andConditions } : {};

  const result = await MultipleForm.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);
  const total = await MultipleForm.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const createMultipleFormService = async (
  payload: IMultipleForm,
): Promise<IMultipleForm | null> => {
  const getFormData = await MultipleForm.create(payload);
  return getFormData;
};

const getSingleMultipleFromUserService = async (
  id: string,
): Promise<IMultipleForm | null> => {
  const getFormData = await MultipleForm.findById(id);
  return getFormData;
};

const deleteSingleMultipleFromUserService = async (
  id: string,
): Promise<IMultipleForm | null> => {
  const isExist = await MultipleForm.findById(id);

  if (!isExist) {
    throw new Error('Entry not found');
  }
  const getFormData = await MultipleForm.findByIdAndDelete(id);
  return getFormData;
};

const updateSingleMultipleFromUserService = async (
  id: string,
  payload: IMultipleForm,
): Promise<IMultipleForm | null> => {
  const isExist = await MultipleForm.findById(id);

  if (!isExist) {
    throw new Error('Data not found');
  }
  const getFormData = await MultipleForm.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return getFormData;
};

export const multipleFormService = {
  getMultipleFormService,
  createMultipleFormService,
  getSingleMultipleFromUserService,
  deleteSingleMultipleFromUserService,
  updateSingleMultipleFromUserService,
};
