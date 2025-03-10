import { Router } from 'express';

import { CreateUserController } from '../controllers/user/CreateUserController';
import { AuthUserController } from '../controllers/user/AuthUserController';
import { DetailUserController } from '../controllers/user/DetailUserController'; 
import { UpdateUserController } from '../controllers/user/UpdateUserController';

import { CreateHaircutController } from '../controllers/haircut/CreateHaircutController';
import { ListHaircutController } from '../controllers/haircut/ListHaircutController';
import { UpdateHaircutController } from '../controllers/haircut/UpdateHaircutController';
import { CheckSubscriptionController } from '../controllers/haircut/CheckSubscriptionController';
import { CountHaircutsController } from '../controllers/haircut/CountHaircutsController';
import { DetailHaircutController } from '../controllers/haircut/DetailHaircutController';

import { CreateScheduleController } from '../controllers/schedule/CreateScheduleController';
import { ListScheduleController } from '../controllers/schedule/ListScheduleController';
import { FinishScheduleController } from '../controllers/schedule/FinishScheduleController';

import { isAuthenticated } from '../middlewares/isAthenticated';
import { hashPassword } from '../middlewares/HashPassword';

const router = Router();

// Routes User
router.post('/users', hashPassword, new CreateUserController().register)
router.post('/login', new AuthUserController().signIn)
router.get('/me', isAuthenticated, new DetailUserController().detailUser)
router.put('/users', isAuthenticated, new UpdateUserController().updateUser)

// Router Haircut
router.post('/haircut', isAuthenticated, new CreateHaircutController().registerHaircut)
router.get('/haircuts', isAuthenticated, new ListHaircutController().list)
router.put('/haircut', isAuthenticated, new UpdateHaircutController().haircutUpdate)
router.get('/haircut/check', isAuthenticated, new CheckSubscriptionController().checkSub)
router.get('/haircut/count', isAuthenticated, new CountHaircutsController().countHair)
router.get('/haircut/detail', isAuthenticated, new DetailHaircutController().detail)

// Router Schedule
router.post('/schedule', isAuthenticated, new CreateScheduleController().createSchedule)
router.get('/schedules', isAuthenticated, new ListScheduleController().listSchedules)
router.delete('/schedule', isAuthenticated, new FinishScheduleController().handleFinish)

export { router };