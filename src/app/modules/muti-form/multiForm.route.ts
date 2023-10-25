import express from 'express';
import { multipleFormController } from './multiForm.controller';

const router = express.Router();

router.get('/', multipleFormController.getMultipleFromUser);

export default router;
