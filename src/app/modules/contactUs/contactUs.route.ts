import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/app.role';
import auth from '../../middleware/auth';
import { contactUsController } from './contactUs.controller';

const router = express.Router();

router.get(
  '/',
  auth(
    ENUM_USER_ROLE.SUPPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.EDITOR,
    ENUM_USER_ROLE.USER,
  ),
  contactUsController.getContactUsController,
);
router.post(
  '/create-contact',
  auth(
    ENUM_USER_ROLE.SUPPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.EDITOR,
    ENUM_USER_ROLE.USER,
  ),
  contactUsController.createContactUController,
);
router.get(
  '/review-contact-us/:id',
  auth(
    ENUM_USER_ROLE.SUPPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.EDITOR,
    ENUM_USER_ROLE.USER,
  ),
  contactUsController.getSingleContactUsController,
);
router.delete(
  '/review-contact-us/remove-entry/:id',
  auth(ENUM_USER_ROLE.SUPPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  contactUsController.contactUsFormController,
);

router.patch(
  '/review-contact-us/update-entry/:id',
  auth(
    ENUM_USER_ROLE.SUPPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.EDITOR,
  ),
  contactUsController.updateSingleContactUs,
);

export const contactUsRoute = router;
