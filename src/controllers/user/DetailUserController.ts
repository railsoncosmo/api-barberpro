import { Request, Response } from 'express';
import { DetailUserService } from '../../services/user/DetailUserService';

const detailUserService = new DetailUserService();

class DetailUserController {
    async detailUser(req: Request, res: Response){
        const user_id = req.user_id;

        const detailUser = await detailUserService.getUser(user_id);

        return res.json(detailUser);
    }
}

export { DetailUserController };