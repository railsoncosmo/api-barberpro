import { PrismaClient, User } from '@prisma/client';
import { UserRequest } from '../../services/user/CreateUserService';
import { CreateUserDto } from '../../dto/user/UserDto';

const prisma = new PrismaClient();

class UserRepository {

    async findByEmail(email: string): Promise<User | null> {
        return await prisma.user.findUnique({
            where: { email }
        });
    }

    async findByUser(user_id: string): Promise<CreateUserDto | null>{
        return await prisma.user.findUnique({
            where: { 
                id: user_id 
            },
            include: {
                subscriptions: true,
            },

        })
    }

    async createUser(data: UserRequest): Promise<User>{
        return await prisma.user.create({ data })
    }

    async findByAuthUser(email: string, password: string): Promise<CreateUserDto | null> {
        return await prisma.user.findUnique({ 
            where: { 
                email,
            },
            include: {
                subscriptions: true
            }
         });
    }

    async detailByUser(user_id: string): Promise<CreateUserDto> {
        return await prisma.user.findFirst({
            where: {
                id: user_id
            },
            select: {
                id: true,
                name: true,
                email: true,
                endereco: true,
                subscriptions: true
            }
        })
    }

    async updateByUser(user_id: string, name: string, endereco: string): Promise<CreateUserDto>{
        return await prisma.user.update({
            where: {
                id: user_id
            },
            data: {
                name,
                endereco,
            },
            select: {
                id: true,
                name: true,
                email: true,
                endereco: true,
                subscriptions: true
            }
        })
    }
}

export { UserRepository };