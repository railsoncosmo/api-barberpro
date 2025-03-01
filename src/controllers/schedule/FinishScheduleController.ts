import { Request, Response } from 'express'
import { FinishScheduleService } from '../../services/schedule/FinishScheduleService'

const finishScheduleService = new FinishScheduleService();

class FinishScheduleController {
    async handleFinish(req: Request, res: Response){

        const user_id = req.user_id;
        const schedule_id = req.query.schedule_id as string;

        const finish = await finishScheduleService.finishService({
            user_id,
            schedule_id
        })

        return res.json(finish);
    }
}

export { FinishScheduleController };