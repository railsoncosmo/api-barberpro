import { Router } from 'express';

import { CreateHaircutController } from '../controllers/haircut/CreateHaircutController';
import { ListHaircutController } from '../controllers/haircut/ListHaircutController';
import { UpdateHaircutController } from '../controllers/haircut/UpdateHaircutController';
import { CheckSubscriptionController } from '../controllers/haircut/CheckSubscriptionController';
import { CountHaircutsController } from '../controllers/haircut/CountHaircutsController';
import { DetailHaircutController } from '../controllers/haircut/DetailHaircutController';

import { isAuthenticated } from '../middlewares/isAthenticated';

const haircutRoutes = Router();

haircutRoutes.post('/haircut', isAuthenticated, new CreateHaircutController().registerHaircut)
haircutRoutes.get('/haircuts', isAuthenticated, new ListHaircutController().list)
haircutRoutes.put('/haircut', isAuthenticated, new UpdateHaircutController().haircutUpdate)
haircutRoutes.get('/haircut/check', isAuthenticated, new CheckSubscriptionController().checkSub)
haircutRoutes.get('/haircut/count', isAuthenticated, new CountHaircutsController().countHair)
haircutRoutes.get('/haircut/detail', isAuthenticated, new DetailHaircutController().detail)

export { haircutRoutes };