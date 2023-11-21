import { Request, Response } from 'express';
import httpStatus from 'http-status';
import config from '../../../config/config';
import requestResponseSend from '../../../shared/requestResponseSend';
import tryCatchAsync from '../../../shared/tryCatchAsync';
import { IUserLoginResponse } from './auth.interface';
import { authService } from './auth.services';

const authLogin = tryCatchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body;

  const result = await authService.loginUserService(loginData);
  const { refreshToken, ...others } = result;

  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  };

  res.cookie('refreshToken', refreshToken, cookieOptions);

  requestResponseSend<IUserLoginResponse>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Login successfully!',
    data: others,
  });
});

const refreshToken = tryCatchAsync(async (req: Request, res: Response) => {
  const { refreshToken } = req.cookies;
  console.log(refreshToken);

  const result = await authService.refreshTokenService(refreshToken);

  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  };
  res.cookie('refreshToken', refreshToken, cookieOptions);

  // if ('refreshToken' in result) {
  //   delete result.refreshToken;
  // }

  requestResponseSend(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Token create successfully!',
    data: result,
  });
});

export const loginController = {
  authLogin,
  refreshToken,
};
