import { Request, Response } from 'express'
import { CreateHaircutService } from '../../services/haircut/CreateHaircutService'

const createHaircutService = new CreateHaircutService();

class CreateHaircutController {

    async registerHaircut(req: Request, res: Response){

        const { name, price } = req.body;
        const user_id = req.user_id;

        const haircut = await createHaircutService.haircutRegister({
            user_id,
            name,
            price
        })

        return res.json(haircut)
    }
}

export { CreateHaircutController };