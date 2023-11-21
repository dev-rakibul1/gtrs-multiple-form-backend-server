import { contactUsRoute } from '../modules/contactUs/contactUs.route';
import { ipInfoRoute } from '../modules/ipInfo/ipInfo.route';
import { multipleFormRoute } from '../modules/muti-form/multiForm.route';

import express from 'express';
import { authRoute } from '../modules/auth/auth.route';
import { userRoute } from '../modules/user/user.route';
const router = express.Router();

const moduleRouters = [
  {
    path: '/form-data',
    routes: multipleFormRoute,
  },
  {
    path: '/contact-us',
    routes: contactUsRoute,
  },
  {
    path: '/ip-info',
    routes: ipInfoRoute,
  },
  {
    path: '/user',
    routes: userRoute,
  },

  {
    path: '/auth',
    routes: authRoute,
  },
];

moduleRouters.forEach(route => router.use(route.path, route.routes));

export default router;
