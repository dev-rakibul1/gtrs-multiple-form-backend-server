import { Schema, model } from 'mongoose';
import { IContactMethod, IContactUs } from './contactUs.interface';

const contactUsSchema = new Schema<IContactUs, IContactMethod>(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    phone: {
      type: Number,
      trim: true,
      required: true,
    },
    country: {
      type: String,
      trim: true,
      required: true,
    },
    company: {
      type: String,
      trim: true,
      required: true,
    },
    message: {
      type: String,
      trim: true,
    },
    value: {
      type: String,
      trim: true,
    },
    productQuery: {
      type: String,
      trim: true,
    },
    quarryFilter: {
      type: String,
      trim: true,
    },
    group2: {
      type: [String],
      trim: true,
    },
    group3: {
      type: String,
      trim: true,
    },
    group4: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

const ContactUs = model<IContactUs, IContactMethod>(
  'Contactus',
  contactUsSchema,
);

export default ContactUs;
