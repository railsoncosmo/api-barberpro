import { PrismaClient, Services } from '@prisma/client';
import { ScheduleRequest } from '../../services/schedule/CreateScheduleService';
import { ServicesHaircuts } from '../../dto/schedule/ScheduleDto';

const prisma = new PrismaClient();

class ScheduleRepository {
    async scheduleClient(data: ScheduleRequest): Promise<ScheduleRequest> {
        return await prisma.services.create({ data })
    }

    async listSchedules(user_id: string): Promise<ServicesHaircuts[]> {
        return await prisma.services.findMany({
            where: {
                user_id: user_id
            },
            select: {
                id: true,
                customer: true,
                haircut: true
            }
        })
    }

    async finishSchedule(schedule_id: string, user_id: string): Promise<{ message: string }> {

        if (schedule_id === '' || user_id === '') {
            throw new Error("Error!")
        }

        try {
            const belongsToUser = await prisma.services.findFirst({
                where: {
                    id: schedule_id,
                    user_id: user_id,
                }
            })

            if (!belongsToUser) {
                throw new Error("Not authorized")
            }

            await prisma.services.delete({
                where: {
                    id: schedule_id
                }
            });

            return { message: "Completed successfully" };

        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
            throw new Error("Ocorreu um erro inesperado")
        }
    }
}

export { ScheduleRepository };