import { UserRepository } from '../../repository/prisma/user/UserRepository';
import { UserDto } from '../../dto/user/UserDto';

const detailUserRepository = new UserRepository();

class DetailUserService {
    async getUser(user_id: string): Promise<UserDto> {
        
        const detailUser = await detailUserRepository.detailByUser(user_id)

        return detailUser;
    }
}

export { DetailUserService };