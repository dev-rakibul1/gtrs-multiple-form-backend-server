import { NextFunction, Request, Response } from 'express';
import { Secret } from 'jsonwebtoken';
import config from '../../config/config';
import { jwtTokenProvider } from '../helper/jwtHelper';

const auth =
  (...requireRole: string[]) =>
  (req: Request, res: Response, next: NextFunction): void => {
    try {
      // get authorization
      const token = req.headers.authorization;
      if (!token) {
        throw new Error('You are not authorized!');
      }

      // verify token
      let verifyUser = null;

      verifyUser = jwtTokenProvider.verifyJwtToken(
        token,
        config.jwtAccessKey as Secret,
      );
      req.user = verifyUser;

      if (requireRole.length && !requireRole.includes(verifyUser.role)) {
        throw new Error('Forbidden user');
      }

      next();
    } catch (error) {
      next(error);
    }
  };

export default auth;
