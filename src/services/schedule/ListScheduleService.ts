import { ScheduleRepository } from "../../repository/schedule/ScheduleRepository";

interface ListScheduleRequest {
    user_id: string
}

const scheduleRepository = new ScheduleRepository();

class ListScheduleService {
    async scheduleList({user_id}: ListScheduleRequest){
        
        const listSchedule = await scheduleRepository.listSchedules(user_id)

        return listSchedule;
    }
}

export { ListScheduleService }