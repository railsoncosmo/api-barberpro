import { HaircutRepository } from "../../repository/haircut/HaircutRepository";

interface HaircutRequest {
    haircut_id: string
}

const haircutRepositoy = new HaircutRepository();

class DetailHaircutService {
    async detail({haircut_id}: HaircutRequest){

        const detail = await haircutRepositoy.detailHaircut(haircut_id)

        return detail;
    }
}

export { DetailHaircutService };