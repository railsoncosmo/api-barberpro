import { Request, Response } from 'express'
import { CheckSubscriptionService } from '../../services/haircut/CheckSubscriptionService';

const checkSubscriptionService = new CheckSubscriptionService();

class CheckSubscriptionController {
    async checkSub(req: Request, res: Response){

        const user_id = req.user_id;

        const status = await checkSubscriptionService.checkSub({
            user_id
        })

        return res.json(status);
    }
}

export { CheckSubscriptionController };