import { HaircutRepository } from "../../repository/haircut/HaircutRepository";
import { UserRepository } from "../../repository/user/UserRepository";

interface UpdateHaircutRequest{
    user_id: string
    haircut_id: string
    name: string
    price: number
    status: boolean | string
}

const haircutRepository = new HaircutRepository();
const userRepository = new UserRepository();

class UpdateHaircutService {
    async updateHaircuts({user_id, haircut_id, name, price, status = true}: UpdateHaircutRequest){

        const user = await userRepository.detailByUser(user_id)

        if(user?.subscriptions?.status !== 'active'){
            throw new Error("User unauthorized")
        }

        const haircut = await haircutRepository.updateHaircut(
            haircut_id,
            name,
            price, 
            status,
        )

        return haircut;
    }
}

export { UpdateHaircutService };