import express from 'express';
import { loginController } from './auth.controller';

const router = express.Router();

router.post('/login', loginController.authLogin);

router.post('/create-refresh-token', loginController.refreshToken);
router.get('/logout', loginController.logoutToken);

export const authRoute = router;
