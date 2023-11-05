"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const multiForm_constant_1 = require("./multiForm.constant");
const userInfoSchema = new mongoose_1.Schema({
    clientRegisteredName: {
        type: String,
        trim: true,
        required: true,
    },
    clientTradeName: {
        type: String,
        trim: true,
        required: true,
    },
    emailAddress: {
        type: String,
        trim: true,
        required: true,
    },
    address: {
        type: String,
        trim: true,
        required: true,
    },
    judicialCountry: {
        type: [String],
        enum: multiForm_constant_1.judicialCountryArray,
        trim: true,
        required: true,
    },
    officePhone: {
        type: String,
        trim: true,
        required: true,
    },
    website: {
        type: String,
        trim: true,
    },
    socialId: {
        type: String,
        trim: true,
    },
    yearsTrading: {
        type: [String],
        enum: multiForm_constant_1.yearsClientTradingTypes,
        trim: true,
        required: true,
    },
    totalTurnover: {
        type: [String],
        trim: true,
        enum: multiForm_constant_1.lastYearTotalTurnoverTypes,
        required: true,
    },
    noOfStaff: {
        type: [String],
        enum: multiForm_constant_1.noOfStaffTypes,
        trim: true,
        required: true,
    },
    tradingCurrency: {
        type: [String],
        enum: multiForm_constant_1.tradingCurrencyTypes,
        trim: true,
        required: true,
    },
    adminContactName: {
        type: String,
        trim: true,
        required: true,
    },
    designation: {
        type: String,
        trim: true,
        required: true,
    },
    nameCard: {
        type: String,
        trim: true,
    },
    nationalID: {
        type: String,
        trim: true,
    },
    // Step 2
    financeContactName: {
        type: String,
        trim: true,
    },
    financeContactDesignation: {
        type: String,
        trim: true,
    },
    financeContactEmail: {
        type: String,
        trim: true,
    },
    financeContactPhone: {
        type: Number,
        trim: true,
    },
    reservationContactName: {
        type: String,
        trim: true,
    },
    reservationContactDesignation: {
        type: String,
        trim: true,
    },
    reservationContactEmail: {
        type: String,
        trim: true,
    },
    reservationContactPhone: {
        type: String,
        trim: true,
    },
    emergencyContactName: {
        type: String,
        trim: true,
        required: true,
    },
    emergencyContactDesignation: {
        type: String,
        trim: true,
        required: true,
    },
    emergencyContactEmail: {
        type: String,
        trim: true,
        required: true,
    },
    emergencyContactPhone: {
        type: String,
        trim: true,
        required: true,
    },
    shareholderCount: {
        type: String,
        trim: true,
        required: true,
    },
    // Shareholder name and ratio
    shareholdersInfo1: {
        type: String,
        trim: true,
    },
    shareholdersRatio1: {
        type: String,
        trim: true,
    },
    shareholdersRatio2: {
        type: String,
        trim: true,
    },
    shareholdersInfo2: {
        type: String,
        trim: true,
    },
    shareholdersRatio3: {
        type: String,
        trim: true,
    },
    shareholdersInfo3: {
        type: String,
        trim: true,
    },
    shareholdersRatio4: {
        type: String,
        trim: true,
    },
    shareholdersInfo4: {
        type: String,
        trim: true,
    },
    shareholdersRatio5: {
        type: String,
        trim: true,
    },
    shareholdersInfo5: {
        type: String,
        trim: true,
    },
    shareholdersRatio6: {
        type: String,
        trim: true,
    },
    shareholdersInfo6: {
        type: String,
        trim: true,
    },
    shareholdersRatio7: {
        type: String,
        trim: true,
    },
    shareholdersInfo7: {
        type: String,
        trim: true,
    },
    shareholdersRatio8: {
        type: String,
        trim: true,
    },
    shareholdersInfo8: {
        type: String,
        trim: true,
    },
    shareholdersRatio9: {
        type: String,
        trim: true,
    },
    shareholdersInfo9: {
        type: String,
        trim: true,
    },
    shareholdersRatio10: {
        type: String,
        trim: true,
    },
    shareholdersInfo10: {
        type: String,
        trim: true,
    },
    shareholdersRatio11: {
        type: String,
        trim: true,
    },
    shareholdersInfo11: {
        type: String,
        trim: true,
    },
    shareholdersRatio12: {
        type: String,
        trim: true,
    },
    shareholdersInfo12: {
        type: String,
        trim: true,
    },
    shareholdersRatio13: {
        type: String,
        trim: true,
    },
    shareholdersInfo13: {
        type: String,
        trim: true,
    },
    shareholdersRatio14: {
        type: String,
        trim: true,
    },
    shareholdersInfo14: {
        type: String,
        trim: true,
    },
    shareholdersRatio15: {
        type: String,
        trim: true,
    },
    shareholdersInfo15: {
        type: String,
        trim: true,
    },
    registrationDocs: {
        type: String,
        trim: true,
    },
    taxRegistrationNo: {
        type: String,
        trim: true,
        required: true,
    },
    travelAgentLicense: {
        type: String,
        trim: true,
    },
    // Step 3
    distributionMarket: {
        type: String,
        trim: true,
    },
    sourceMarket: {
        type: String,
        trim: true,
    },
    dailyAverageTransaction: {
        type: String,
        trim: true,
    },
    averagePurchaseValue: {
        type: String,
        trim: true,
    },
    monthlyTransaction: {
        type: String,
        trim: true,
    },
    distributionMarket2: {
        type: String,
        trim: true,
    },
    sourceMarket2: {
        type: String,
        trim: true,
    },
    dailyAverageTransaction2: {
        type: String,
        trim: true,
    },
    averagePurchaseValue2: {
        type: String,
        trim: true,
    },
    monthlyTransaction2: {
        type: String,
        trim: true,
    },
    lookToBookRatio: {
        type: String,
        trim: true,
    },
    gdprConsent: {
        type: Boolean,
        trim: true,
    },
    privacyPolicyConsent: {
        type: Boolean,
        trim: true,
    },
    termsPolicyConsent: {
        type: Boolean,
        trim: true,
    },
    userTrackIp: {
        type: {
            country: {
                type: String,
                trim: true,
                required: true,
            },
            city: {
                type: String,
                trim: true,
                required: true,
            },
            ip: {
                type: String,
                trim: true,
                required: true,
            },
            loc: {
                type: String,
                trim: true,
                required: true,
            },
            org: {
                type: String,
                trim: true,
                required: true,
            },
            postal: {
                type: String,
                trim: true,
                required: true,
            },
            timezone: {
                type: String,
                trim: true,
                required: true,
            },
        },
        required: true, // Make the whole 'userTrackIp' object required
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
const MultipleForm = (0, mongoose_1.model)('MultipleForm', userInfoSchema);
exports.default = MultipleForm;
