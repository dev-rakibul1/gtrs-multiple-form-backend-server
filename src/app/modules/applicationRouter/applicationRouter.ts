import multipleFormRoutes from '../muti-form/multiForm.route';

import express from 'express';
const router = express.Router();

const moduleRouters = [
  {
    path: '/form-data',
    routes: multipleFormRoutes,
  },
];

moduleRouters.forEach(route => router.use(route.path, route.routes));

export default router;
