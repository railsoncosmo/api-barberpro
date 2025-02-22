import { PrismaClient, User } from '@prisma/client';
import { UserRequest } from '../../services/user/CreateUserService';

const prisma = new PrismaClient();

class UserRepository {
    async findUserByEmail(email: string): Promise<User | null> {
        return await prisma.user.findUnique({
            where: { email }
        });
    }

    async createUser(data: UserRequest): Promise<User>{
        return await prisma.user.create({ data })
    }
}

export { UserRepository };