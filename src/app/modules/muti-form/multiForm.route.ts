import express from 'express';
import { multipleFormController } from './multiForm.controller';

const router = express.Router();

router.get('/', multipleFormController.getMultipleFromUser);
router.post('/join-business', multipleFormController.createMultipleFromUser);

export default router;
