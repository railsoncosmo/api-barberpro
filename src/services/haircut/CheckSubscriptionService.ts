import { UserRepository } from "../../repository/prisma/user/UserRepository";

interface CheckSubscription {
    user_id: string
}

const haircutRepository = new UserRepository();

class CheckSubscriptionService {
    async checkSub({user_id}: CheckSubscription){

        const status = await haircutRepository.checkSubscription(user_id)

        return status;
    }
}

export { CheckSubscriptionService };