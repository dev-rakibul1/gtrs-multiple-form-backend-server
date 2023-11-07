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
exports.contactUsService = void 0;
const paginationHelper_1 = require("../pagination/paginationHelper");
const contactUs_model_1 = __importDefault(require("./contactUs.model"));
const contactUsFilterFieldsName = [
    'firstName',
    'lastName',
    'email',
    'country',
    'company',
];
const getContactUsService = (filters, paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
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
    const { page, limit, skip, sortBy, sortOrder } = paginationHelper_1.paginationHelper.paginationCalculations(paginationOptions);
    const sortConditions = {};
    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder;
    }
    const whereConditions = andConditions.length ? { $and: andConditions } : {};
    const result = yield contactUs_model_1.default.find(whereConditions)
        .sort(sortConditions)
        .skip(skip)
        .limit(limit);
    const total = yield contactUs_model_1.default.countDocuments();
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
const createContactUsService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const getFormData = yield contactUs_model_1.default.create(payload);
    return getFormData;
});
const getSingleContactUsService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const getFormData = yield contactUs_model_1.default.findById(id);
    return getFormData;
});
const deleteSingleContactUsService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield contactUs_model_1.default.findById(id);
    if (!isExist) {
        const errorObject = {
            error: true,
            message: 'Entry not available.',
        };
        throw new Error(JSON.stringify(errorObject));
    }
    const getFormData = yield contactUs_model_1.default.findByIdAndDelete(id, {
        new: true,
    });
    return getFormData;
});
const updateSingleContactUsService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield contactUs_model_1.default.findById(id);
    if (!isExist) {
        const errorObject = {
            error: true,
            message: 'Entry not available.',
        };
        throw new Error(JSON.stringify(errorObject));
    }
    const getFormData = yield contactUs_model_1.default.findByIdAndUpdate(id, payload, {
        new: true,
    });
    return getFormData;
});
exports.contactUsService = {
    getContactUsService,
    getSingleContactUsService,
    createContactUsService,
    deleteSingleContactUsService,
    updateSingleContactUsService,
};
