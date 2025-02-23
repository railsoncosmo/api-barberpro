import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';


const router = Router();

// Routes User
router.post('/users', new CreateUserController().register)
router.post('/login', new AuthUserController().signIn)

export { router };