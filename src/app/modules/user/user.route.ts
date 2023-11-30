import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/app.role';
import auth from '../../middleware/auth';
import { userController } from './user.controller';

const router = express.Router();

router.get(
  '/',
  auth(ENUM_USER_ROLE.SUPER_ADMIN),
  userController.getUserController,
);
router.post(
  '/create-user',
  auth(ENUM_USER_ROLE.SUPER_ADMIN),
  userController.createUserController,
);

router.get('/user-filter', userController.getUserFilterController);

router.get(
  '/single-user-review/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN),
  userController.getSingleUserController,
);

router.patch(
  '/single-user-edit/:id',
  // auth(ENUM_USER_ROLE.SUPER_ADMIN),
  userController.editSingleUserController,
);

router.patch(
  '/password-change/:id',
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.EDITOR,
    ENUM_USER_ROLE.USER,
  ),
  userController.passwordChangeController,
);
export const userRoute = router;
