import { Request, Response } from 'prisma'
import { ListHaircutService } from '../../services/haircut/ListHaircutService';

const listHaircutService = new ListHaircutService();

class ListHaircutController {
    async list(req: Request, res: Response){

        const user_id = req.user_id;
        const status = req.query.status as string;

        const haircuts = await listHaircutService.handleList({
            user_id,
            status
        })

        return res.json(haircuts)
    }
}

export { ListHaircutController };