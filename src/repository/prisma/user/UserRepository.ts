import { PrismaClient, User } from '@prisma/client';
import { UserRequest } from '../../../services/user/CreateUserService';
import { UserDto, UserAuth } from '../../../dto/user/UserDto';
import { IUserRespository } from './IUserRepository';

const prisma = new PrismaClient();

class UserRepository implements IUserRespository {

    async findByEmail(email: string): Promise<User | null> {
        const emailUser = await prisma.user.findUnique({
            where: { 
                email
             }
        });

        return emailUser;
    }

    async findByUser(user_id: string): Promise<User | null>{
        const user = await prisma.user.findUnique({
            where: { 
                id: user_id 
            },
            include: {
                subscriptions: true,
            },
        })

        return user;
    }

    async createUser(data: UserRequest): Promise<User>{
        const user = await prisma.user.create({ 
            data,
         })

         return user;
    }

    async findByAuthUser(email: string, _password: string): Promise<UserAuth | null> {
        const authUser = await prisma.user.findUnique({ 
            where: { 
                email,
            },
            include: {
                subscriptions: true
            }
         });

         return authUser;
    }

    async detailByUser(user_id: string): Promise<UserDto> {
        const detailUser = await prisma.user.findFirst({
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

        return detailUser;
    }

    async updateByUser(user_id: string, name: string, endereco: string): Promise<UserDto>{
        const updatedUser = await prisma.user.update({
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

        return updatedUser;
    }

    async checkSubscription(user_id: string): Promise<UserDto>{
        const checkSubUser = await prisma.user.findFirst({
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

        return checkSubUser;
    }
}

export { UserRepository };