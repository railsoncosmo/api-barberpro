import { Request, Response } from 'express'
import { ListScheduleService } from '../../services/schedule/ListScheduleService'

const listScheduleService = new ListScheduleService();

class ListScheduleController {
    async listSchedules(req: Request, res: Response){
        
        const user_id = req.user_id as string;

        const list = await listScheduleService.scheduleList({
            user_id
        })

        return res.json(list)
    }
}

export { ListScheduleController }