import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController'; 

import { isAuthenticated } from './middlewares/isAthenticated';

const router = Router();

// Routes User
router.post('/users', new CreateUserController().register)
router.post('/login', new AuthUserController().signIn)
router.get('/me', isAuthenticated, new DetailUserController().detailUser)

export { router };