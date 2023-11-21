import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import router from './app/applicationRouter/applicationRouter';
import databaseConnect from './utils/server';
const app = express();

// middle were calling
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// application router
app.use('/api/v1/', router);

// global error handling
app.use('*', (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not fount.',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'API not found!',
      },
    ],
  });
  next();
});

// database connected
databaseConnect();

export default app;
