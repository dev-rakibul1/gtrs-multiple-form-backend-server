import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/app.role';
import auth from '../../middleware/auth';
import { userController } from './user.controller';

const router = express.Router();

router.get(
  '/',
  auth(
    ENUM_USER_ROLE.SUPPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.EDITOR,
  ),
  userController.getUserController,
);
router.post(
  '/create-user',
  auth(
    ENUM_USER_ROLE.SUPPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.EDITOR,
    ENUM_USER_ROLE.USER,
  ),
  userController.createUserController,
);

export const userRoute = router;
