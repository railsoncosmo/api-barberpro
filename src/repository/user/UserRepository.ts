import { PrismaClient, Subscription, User } from '@prisma/client';
import { UserRequest } from '../../services/user/CreateUserService';


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

export { UserRepository, AuthUserRepository };