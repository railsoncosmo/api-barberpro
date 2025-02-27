import { Request, Response } from 'express';
import { DetailHaircutService } from '../../services/haircut/DetailHaircutService';

const detailHaircutService = new DetailHaircutService();

class DetailHaircutController {
    async detail(req: Request, res: Response){

        const haircut_id = req.query.haircut_id as string;

        const detail = await detailHaircutService.detail({
            haircut_id
        })

        return res.json(detail);
    }
}

export { DetailHaircutController };