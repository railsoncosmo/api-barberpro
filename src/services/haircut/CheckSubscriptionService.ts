import { HaircutRepository } from "../../repository/haircut/HaircutRepository";

interface CheckSubscription {
    user_id: string
}

const haircutRepository = new HaircutRepository();

class CheckSubscriptionService {
    async checkSub({user_id}: CheckSubscription){

        const status = await haircutRepository.checkSubscription(user_id)

        return status;
    }
}

export { CheckSubscriptionService };