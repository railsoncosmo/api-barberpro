import { ScheduleRepository } from '../../repository/prisma/schedule/ScheduleRepository'

interface FinishRequest {
    schedule_id: string
    user_id: string
}

const scheduleRepository = new ScheduleRepository();

class FinishScheduleService {
    async finishService({ schedule_id, user_id }: FinishRequest){

        const finish = await scheduleRepository.finishSchedule(
            schedule_id,
            user_id
        )

        return finish;
    }
}

export { FinishScheduleService };