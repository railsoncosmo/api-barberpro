import { HaircutRepository } from "../../repository/haircut/HaircutRepository";

interface HaircutRequest {
    user_id: string
    status: boolean | string
}

const haircutRepositoy = new HaircutRepository();

class ListHaircutService {
    async handleList({ user_id, status }: HaircutRequest){

        const haircut = await haircutRepositoy.listHaircuts(user_id, status)

        return haircut;
    }
}

export { ListHaircutService };