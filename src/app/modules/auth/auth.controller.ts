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

const logoutToken = tryCatchAsync(async (req: Request, res: Response) => {
  // const { refreshToken } = req.cookies;
  // const refreshToken = req.cookies.authorization;

  // console.log('refreshToken_____Token: ', refreshToken);

  // const result = await authService.logoutService(refreshToken);

  // const result = await
  res.clearCookie('refreshToken', {
    /* cookie options */
  });
  res.clearCookie('accessToken', {
    /* cookie options */
  });

  requestResponseSend(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Logout successfully!',
    data: null,
  });
});

export const loginController = {
  authLogin,
  refreshToken,
  logoutToken,
};
