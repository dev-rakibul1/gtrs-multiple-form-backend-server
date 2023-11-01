import { contactUsRoute } from '../contactUs/contactUs.route';
import { multipleFormRoute } from '../muti-form/multiForm.route';

import express from 'express';
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
];

moduleRouters.forEach(route => router.use(route.path, route.routes));

export default router;
