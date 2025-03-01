import { HaircutRepository } from "../../repository/haircut/HaircutRepository"
import { UserRepository } from "../../repository/user/UserRepository"

export interface HaircutRequest {
    user_id: string
    name: string
    price: number
}

const haircutRepositoy = new HaircutRepository();
const userRepository = new UserRepository();


class CreateHaircutService {
    async haircutRegister({user_id, name, price}: HaircutRequest){

        if(!name || !price){
            throw new Error("Error create haircut!")
        }

        const myHaircuts = await haircutRepositoy.quantityHaircuts(user_id)
        const user = await userRepository.detailByUser(user_id)

        // Controle de assinatura, usuario free limitado a criar 3 haircuts
        if(myHaircuts >= 3 && user?.subscriptions?.status !== 'active'){
              throw new Error("User unauthorized")
          }

        const haircut = await haircutRepositoy.createHaircut({
            user_id,
            name,
            price
        })

        return haircut;
    }
}

export { CreateHaircutService };