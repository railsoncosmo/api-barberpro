import { ScheduleRepository } from '../../repository/prisma/schedule/ScheduleRepository';

export interface ScheduleRequest{
    user_id: string
    haircut_id: string
    customer: string
}

const scheduleRepository = new ScheduleRepository();

class CreateScheduleService {
    async schedule({ user_id, haircut_id, customer }: ScheduleRequest){

        const schedule = await scheduleRepository.scheduleClient({
            user_id,
            haircut_id,
            customer
        })
        return schedule;
    }
}

export { CreateScheduleService };