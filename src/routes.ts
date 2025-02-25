import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController'; 
import { UpdateUserController } from './controllers/user/UpdateUserController';

import { CreateHaircutController } from './controllers/haircut/CreateHaircutController';
import { ListHaircutController } from './controllers/haircut/ListHaircutController';

import { isAuthenticated } from './middlewares/isAthenticated';

const router = Router();

// Routes User
router.post('/users', new CreateUserController().register)
router.post('/login', new AuthUserController().signIn)
router.get('/me', isAuthenticated, new DetailUserController().detailUser)
router.put('/users', isAuthenticated, new UpdateUserController().updateUser)

router.post('/haircut', isAuthenticated, new CreateHaircutController().registerHaircut)
router.get('/haircuts', isAuthenticated, new ListHaircutController().list)

export { router };