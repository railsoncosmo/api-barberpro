import { Router } from 'express';

import { userRoutes } from './user.routes';
import { haircutRoutes } from './haircut.routes';
import { scheduleRoutes } from './schedule.routes';

const router = Router();

router.use(userRoutes);
router.use(haircutRoutes);
router.use(scheduleRoutes);

export { router };