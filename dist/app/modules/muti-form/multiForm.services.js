"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multipleFormService = void 0;
const paginationHelper_1 = require("../pagination/paginationHelper");
const multiForm_model_1 = __importDefault(require("./multiForm.model"));
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
const getMultipleFormService = (filters, paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
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
    const { page, limit, skip, sortBy, sortOrder } = paginationHelper_1.paginationHelper.paginationCalculations(paginationOptions);
    const sortConditions = {};
    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder;
    }
    const whereConditions = andConditions.length ? { $and: andConditions } : {};
    const result = yield multiForm_model_1.default.find(whereConditions)
        .sort(sortConditions)
        .skip(skip)
        .limit(limit);
    const total = yield multiForm_model_1.default.countDocuments();
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
const createMultipleFormService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const getFormData = yield multiForm_model_1.default.create(payload);
    return getFormData;
});
exports.multipleFormService = {
    getMultipleFormService,
    createMultipleFormService,
};
