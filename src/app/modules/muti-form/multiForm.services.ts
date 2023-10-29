import { SortOrder } from 'mongoose';
import { IGenericResponse, IMultipleFormFilters } from '../../types/types';
import { IPaginationOptionsTypes } from '../pagination/pagination';
import { paginationHelper } from '../pagination/paginationHelper';
import { IMultipleForm } from './multiForm.interface';
import MultipleForm from './multiForm.model';

const multiFormSearchFiledName = [
  'judicialCountry',
  'clientRegisteredName',
  'emailAddress',
  'officePhone',
  'address',
  'emergencyContactName',
  'emergencyContactDesignation',
  'emergencyContactEmail',
  'emergencyContactPhone',
];

const getMultipleFormService = async (
  filters: IMultipleFormFilters,
  paginationOptions: IPaginationOptionsTypes,
): Promise<IGenericResponse<IMultipleForm[]>> => {
  const { searchTerm } = filters;

  console.log(filters);
  const andConditions = [];

  // const andConditions = [
  //   {
  //     $or: [
  //       {
  //         clientRegisteredName: {
  //           $regex: searchTerm,
  //           $options: 'i',
  //         },
  //       },
  //       {
  //         emailAddress: {
  //           $regex: searchTerm,
  //           $options: 'i',
  //         },
  //       },
  //     ],
  //   },
  // ];

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
): Promise<IMultipleForm> => {
  const getFormData = await MultipleForm.create(payload);
  return getFormData;
};

export const multipleFormService = {
  getMultipleFormService,
  createMultipleFormService,
};
