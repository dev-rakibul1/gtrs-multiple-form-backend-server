import express from 'express';
import { contactUsController } from './contactUs.controller';

const router = express.Router();

router.get('/', contactUsController.getContactUsController);
router.post('/create-contact', contactUsController.createContactUController);
router.get(
  '/review-contact-us/:id',
  contactUsController.getSingleContactUsController,
);
router.delete(
  '/review-contact-us/remove-entry/:id',
  contactUsController.contactUsFormController,
);

router.patch(
  '/review-contact-us/update-entry/:id',
  contactUsController.updateSingleContactUs,
);

export const contactUsRoute = router;
