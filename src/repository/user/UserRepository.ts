import { PrismaClient, Subscription, User } from '@prisma/client';
import { UserRequest } from '../../services/user/CreateUserService';
import { CreateUserDto } from '../../dto/user/UserDto';


//Juntando a tipagem de User e Subscriptions
type UserAndSubscription = User & {
    subscriptions?: Subscription | null;
};

const prisma = new PrismaClient();

class UserRepository {
    async findByEmail(email: string): Promise<User | null> {
        return await prisma.user.findUnique({
            where: { email }
        });
    }

    async createUser(data: UserRequest): Promise<User>{
        return await prisma.user.create({ data })
    }
}

class AuthUserRepository {
    async findByUser(email: string, password: string): Promise<UserAndSubscription | null> {
        return await prisma.user.findFirst({ 
            where: { 
                email
            },
            include: {
                subscriptions: true
            }
         });
    }
}

class DetailUserRepository {
    async detailByUser(user_id: string): Promise<UserAndSubscription | CreateUserDto> {
        return await prisma.user.findFirst({
            where: {
                id: user_id
            },
            select: {
                id: true,
                email: true,
                name: true,
                endereco: true,
                subscriptions: {
                    select: {
                        id: true,
                        priceId: true,
                        status: true
                    }
                }
            }
        })
    }
}

export { UserRepository, AuthUserRepository, DetailUserRepository };