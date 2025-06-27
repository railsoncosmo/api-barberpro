import { Router } from 'express';

import { CreateScheduleController } from '../controllers/schedule/CreateScheduleController';
import { ListScheduleController } from '../controllers/schedule/ListScheduleController';
import { FinishScheduleController } from '../controllers/schedule/FinishScheduleController';

import { isAuthenticated } from '../middlewares/isAthenticated';

const scheduleRoutes = Router();

scheduleRoutes.post('/schedule', isAuthenticated, new CreateScheduleController().createSchedule)
scheduleRoutes.get('/schedules', isAuthenticated, new ListScheduleController().listSchedules)
scheduleRoutes.delete('/schedule', isAuthenticated, new FinishScheduleController().handleFinish)

export { scheduleRoutes };