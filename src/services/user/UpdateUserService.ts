import { UserRepository } from '../../repository/prisma/user/UserRepository';

const updateUserRepository = new UserRepository();

interface UpdateRequest {
    user_id: string
    name: string
    endereco: string
}

class UpdateUserService {
    async updateUser({ user_id, name, endereco }: UpdateRequest){
        
        try{
            
            const userAlreadyExists = await updateUserRepository.findByUser(user_id)

            if(!userAlreadyExists){
                throw new Error("User not exists!");

            }

            const updateUser = await updateUserRepository.updateByUser(user_id, name, endereco)

            return updateUser;

        }catch(error){
            
            throw new Error("error updating user!")
        }
    }
}

export { UpdateUserService };