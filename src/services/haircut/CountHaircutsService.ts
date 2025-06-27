import { HaircutRepository } from "../../repository/prisma/haircut/HaircutRepository";

interface CountRequest {
    user_id: string
}

const haircutRepository = new HaircutRepository();

class CountHaircutsService {
    async countHair({ user_id }: CountRequest){

        const count = await haircutRepository.countHaircuts(user_id)

        return count;
    }
}

export { CountHaircutsService };