import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';

const createUserController = new CreateUserController();

const router = Router();

// Routes User
router.post('/users', createUserController.register)

export { router };