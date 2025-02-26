import { Request, Response } from 'express'
import { UpdateHaircutService } from '../../services/haircut/UpdateHaircutService'

const updateHaircutService =  new UpdateHaircutService();

class UpdateHaircutController {
    async haircutUpdate(req: Request, res: Response){

        const user_id = req. user_id;
        const { name, price, status, haircut_id } = req.body;

        const updateHaircut = await updateHaircutService.updateHaircuts({
            user_id,
            haircut_id,
            name,
            price,
            status
        })

        return res.json(updateHaircut);
    }
}

export { UpdateHaircutController };