import express from 'express';
import { multipleFormController } from './multiForm.controller';

const router = express.Router();

router.get('/', multipleFormController.getMultipleFromUser);
// router.post('/join-business', multipleFormController.createMultipleFromUser);

router.post('/join-business', multipleFormController.createMultipleFromUser); // Use multer middleware for file uploads

router.get('/review/:id', multipleFormController.getSingleMultipleFromUser);
router.delete(
  '/review/remove-entry/:id',
  multipleFormController.deleteSingleMultipleFromUser,
);
router.patch(
  '/review/update-entry/:id',
  multipleFormController.updateSingleMultipleFromUser,
);

export const multipleFormRoute = router;
