import express from 'express';
import { ipInfoController } from './ipInfo.controller';

const router = express.Router();

router.get('/', ipInfoController.getIpInfoController);

export const ipInfoRoute = router;
