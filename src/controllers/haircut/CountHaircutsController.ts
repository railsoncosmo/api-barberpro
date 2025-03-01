import { Request, Response } from 'express'
import { CountHaircutsService } from '../../services/haircut/CountHaircutsService';

const countHaircutsService = new CountHaircutsService();

class CountHaircutsController {
    async countHair(req: Request, res: Response){

        const user_id = req.user_id;

        const count = await countHaircutsService.countHair({
            user_id
        })

        return res.json(count);
    }
}

export { CountHaircutsController };