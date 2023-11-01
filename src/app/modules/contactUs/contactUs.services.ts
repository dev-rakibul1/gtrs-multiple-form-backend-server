import { SortOrder } from 'mongoose';
import { IGenericResponse, IMultipleFormFilters } from '../../types/types';
import { IPaginationOptionsTypes } from '../pagination/pagination';
import { paginationHelper } from '../pagination/paginationHelper';
import { IContactUs } from './contactUs.interface';
import { default as ContactUs } from './contactUs.model';

const contactUsFilterFieldsName = [
  'firstName',
  'lastName',
  'email',
  'country',
  'company',
];

const getContactUsService = async (
  filters: IMultipleFormFilters,
  paginationOptions: IPaginationOptionsTypes,
): Promise<IGenericResponse<IContactUs[]>> => {
  const { searchTerm } = filters;

  console.log(filters);
  const andConditions = [];

  if (filters)
    if (searchTerm) {
      // PARTIAL match or search value
      andConditions.push({
        $or: contactUsFilterFieldsName.map(field => ({
          [field]: {
            $regex: searchTerm,
            $options: 'i',
          },
        })),
      });
    }

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelper.paginationCalculations(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const whereConditions = andConditions.length ? { $and: andConditions } : {};

  const result = await ContactUs.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);
  const total = await ContactUs.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const createContactUsService = async (
  payload: IContactUs,
): Promise<IContactUs | null> => {
  const getFormData = await ContactUs.create(payload);
  return getFormData;
};

const getSingleContactUsService = async (
  id: string,
): Promise<IContactUs | null> => {
  const getFormData = await ContactUs.findById(id);
  return getFormData;
};

export const contactUsService = {
  getContactUsService,
  getSingleContactUsService,
  createContactUsService,
};
