import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.get('/recipients', RecipientController.findAll);

routes.use(authMiddleware);

routes.post('/recipients', RecipientController.store);

export default routes;
