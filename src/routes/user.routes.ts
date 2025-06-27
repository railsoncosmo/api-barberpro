import { Router } from 'express';

import { CreateUserController } from '../controllers/user/CreateUserController';
import { AuthUserController } from '../controllers/user/AuthUserController';
import { DetailUserController } from '../controllers/user/DetailUserController'; 
import { UpdateUserController } from '../controllers/user/UpdateUserController';

import { isAuthenticated } from '../middlewares/isAthenticated';
import { hashPassword } from '../middlewares/HashPassword';

const userRoutes = Router();

userRoutes.post('/users', hashPassword, new CreateUserController().register)
userRoutes.post('/login', new AuthUserController().signIn)
userRoutes.get('/me', isAuthenticated, new DetailUserController().detailUser)
userRoutes.put('/users', isAuthenticated, new UpdateUserController().updateUser)

export { userRoutes };