import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/app.role';
import auth from '../../middleware/auth';
import { multipleFormController } from './multiForm.controller';

const router = express.Router();

router.get(
  '/',
  auth(
    ENUM_USER_ROLE.SUPPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.EDITOR,
    ENUM_USER_ROLE.USER,
  ),
  multipleFormController.getMultipleFromUser,
);

router.post(
  '/join-business',
  auth(
    ENUM_USER_ROLE.SUPPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.EDITOR,
    ENUM_USER_ROLE.USER,
  ),
  multipleFormController.createMultipleFromUser,
); // Use multer middleware for file uploads

router.get(
  '/review/:id',
  auth(
    ENUM_USER_ROLE.SUPPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.EDITOR,
    ENUM_USER_ROLE.USER,
  ),
  multipleFormController.getSingleMultipleFromUser,
);
router.delete(
  '/review/remove-entry/:id',
  auth(ENUM_USER_ROLE.SUPPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  multipleFormController.deleteSingleMultipleFromUser,
);
router.patch(
  '/review/update-entry/:id',
  auth(
    ENUM_USER_ROLE.SUPPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.EDITOR,
  ),
  multipleFormController.updateSingleMultipleFromUser,
);

export const multipleFormRoute = router;
