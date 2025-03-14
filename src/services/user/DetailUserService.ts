import { UserRepository } from '../../repository/user/UserRepository';
import { CreateUserDto } from '../../dto/user/UserDto';

const detailUserRepository = new UserRepository();

class DetailUserService {
    async getUser(user_id: string): Promise<CreateUserDto> {
        
        const detailUser = await detailUserRepository.detailByUser(user_id)

        return detailUser;
    }
}

export { DetailUserService };