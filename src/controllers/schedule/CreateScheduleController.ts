import { Request, Response } from 'express';
import { CreateScheduleService } from '../../services/schedule/CreateScheduleService';

const createScheduleService = new CreateScheduleService();

class CreateScheduleController {
    async createSchedule(req: Request, res: Response){

        const user_id = req.user_id;
        const { haircut_id, customer } = req.body;

        const newSchedule = await createScheduleService.schedule({
            user_id,
            haircut_id,
            customer
        })

        return res.json(newSchedule);
    }
}

export { CreateScheduleController };