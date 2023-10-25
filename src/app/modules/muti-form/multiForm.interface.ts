import { Model } from "mongoose"
import {
  CountryType,
  ILastYearTotalTurnoverTypes,
  INoOfStaffTypes,
  ITradingCurrencyTypes,
  IYearsClientTradingTypes,
} from "../../types/types"

export type IMultipleForm = {
  // Step 1
  clientRegisteredName: string
  clientTradeName: string
  emailAddress: string
  address: string
  judicialCountry: CountryType[]
  officePhone: number
  website?: string
  socialId?: string
  yearsTrading: IYearsClientTradingTypes[]
  totalTurnover: ILastYearTotalTurnoverTypes[]
  noOfStaff: INoOfStaffTypes[]
  tradingCurrency: ITradingCurrencyTypes[]
  adminContactName: string
  designation: string
  nameCard: string
  nationalID: string

  // Step 2
  financeContactName?: string
  financeContactDesignation?: string
  financeContactEmail?: string
  financeContactPhone?: number

  reservationContactName?: string
  reservationContactDesignation?: string
  reservationContactEmail?: string
  reservationContactPhone?: number

  emergencyContactName?: string
  emergencyContactDesignation?: string
  emergencyContactEmail?: string
  emergencyContactPhone?: number

  shareholderCount: string

  shareholdersInfo1?: string
  shareholdersRatio1?: string
  shareholdersInfo2?: string
  shareholdersRatio2?: string
  shareholdersInfo3?: string
  shareholdersRatio3?: string
  shareholdersInfo4?: string
  shareholdersRatio4?: string
  shareholdersInfo5?: string
  shareholdersRatio5?: string
  shareholdersInfo6?: string
  shareholdersRatio6?: string
  shareholdersInfo7?: string
  shareholdersRatio7?: string
  shareholdersInfo8?: string
  shareholdersRatio8?: string
  shareholdersInfo9?: string
  shareholdersRatio9?: string
  shareholdersInfo10?: string
  shareholdersRatio10?: string
  shareholdersInfo11?: string
  shareholdersRatio11?: string
  shareholdersInfo12?: string
  shareholdersRatio12?: string
  shareholdersInfo13?: string
  shareholdersRatio13?: string
  shareholdersInfo14?: string
  shareholdersRatio14?: string
  shareholdersInfo15?: string
  shareholdersRatio15?: string
  shareholdersInfo16?: string
  shareholdersRatio16?: string

  registrationDocs: string
  taxRegistrationNo: string
  travelAgentLicense: string

  // Step 3
  distributionMarket?: string
  sourceMarket?: string
  dailyAverageTransaction?: string
  averagePurchaseValue?: string
  monthlyTransaction?: string
  distributionMarket2?: string
  sourceMarket2?: string
  dailyAverageTransaction2?: string
  averagePurchaseValue2?: string
  monthlyTransaction2?: string
  lookToBookRatio?: string

  // Boolean
  gdprConsent?: boolean
  privacyPolicyConsent?: boolean
  termsPolicyConsent?: boolean
}

export type MultipleFormMethod = Model<IMultipleForm, Record<string, unknown>>
