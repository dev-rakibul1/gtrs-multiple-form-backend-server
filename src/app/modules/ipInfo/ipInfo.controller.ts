import { Request, Response } from 'express';
import httpStatus from 'http-status';
import os from 'node:os';
import requestResponseSend from '../../../shared/requestResponseSend';
import tryCatchAsync from '../../../shared/tryCatchAsync';

const getIpInfoController = tryCatchAsync(
  async (req: Request, res: Response) => {
    const ip = req.ip;
    const platform = os.platform();
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    // const userBrowser = global.navigator.userAgent;

    // const userLatitude = position.coords.latitude;
    // const userLongitude = position.coords.longitude;

    const getIpInfo = {
      ip,
      platform,
      userTimezone,
      // userBrowser,
    };

    requestResponseSend(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Ip info get success!',
      data: getIpInfo,
    });
  },
);

export const ipInfoController = {
  getIpInfoController,
};
