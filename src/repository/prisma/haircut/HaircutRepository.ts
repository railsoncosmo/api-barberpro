import { PrismaClient, Haircut } from '@prisma/client';
import { HaircutRequest } from '../../../services/haircut/CreateHaircutService';

const prisma = new PrismaClient();
class HaircutRepository {

    async createHaircut(data: HaircutRequest): Promise<Haircut>{
        return await prisma.haircut.create({
            data,
        })
    }

    async quantityHaircuts(user_id: string): Promise<number>{
        return await prisma.haircut.count({
            where: { user_id: user_id }
        })
    }

    async listHaircuts(user_id: string, status: boolean | string): Promise<Haircut[]>{
        return await prisma.haircut.findMany({
            where: {
                user_id: user_id,
                status: status === 'true' ? true : false
            }
        })
    }

    async updateHaircut(haircut_id: string, name: string, price: number, status: boolean | string ): Promise<Haircut | null>{
        return await prisma.haircut.update({
            where: { 
                id: haircut_id
            },
            data: {
                name: name,
                price: price,
                status: status === true ? true : false
            }
        })
    }

    async countHaircuts(user_id: string): Promise<Number>{
        return await prisma.haircut.count({
            where: {
                user_id: user_id
            }
        })
    }

    async detailHaircut(haircut_id: string): Promise<Haircut>{
        return await prisma.haircut.findUnique({
            where: {
                id: haircut_id,
            }
        })
    }
}

export { HaircutRepository };