import { Response } from 'express';

type sendResType<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  data: T | null;
};

const requestResponseSend = <T>(res: Response, data: sendResType<T>): void => {
  const requestSendData: sendResType<T> = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message,
    data: data.data,
  };

  res.status(data.statusCode).json(requestSendData);
};

export default requestResponseSend;
