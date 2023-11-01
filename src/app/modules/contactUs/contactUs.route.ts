import express from 'express';
import { contactUsController } from './contactUs.controller';

const router = express.Router();

router.get('/', contactUsController.getContactUsController);
router.post('/create-contact', contactUsController.createContactUController);
router.get(
  '/single-user/:id',
  contactUsController.getSingleContactUsController,
);

export const contactUsRoute = router;
