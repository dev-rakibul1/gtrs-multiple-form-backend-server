import { Model } from 'mongoose';

export type IContactUs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  company: string;
  country: string;
  message?: string;
  value?: string;
  productQuery?: string;
  quarryFilter?: string;
  group2?: string[];
  group3?: string;
  group4?: string;
};

export type IContactMethod = Model<IContactUs, Record<string, unknown>>;
