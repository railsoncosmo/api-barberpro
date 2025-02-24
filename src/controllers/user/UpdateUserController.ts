import { Request, Response } from 'express'
import { UpdateUserService } from '../../services/user/UpdateUserService';

const updateUserService = new UpdateUserService();

class UpdateUserController {
    async updateUser(req: Request, res: Response){

        const { name, endereco } = req.body;
        const user_id = req.user_id;

        const userUpdate = await updateUserService.updateUser({
            user_id,
            name,
            endereco
        })

        return res.json(userUpdate);
    }
}

export { UpdateUserController }; 