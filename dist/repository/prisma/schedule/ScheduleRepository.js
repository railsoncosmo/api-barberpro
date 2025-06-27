"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class ScheduleRepository {
    scheduleClient(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.services.create({ data });
        });
    }
    listSchedules(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.services.findMany({
                where: {
                    user_id: user_id
                },
                select: {
                    id: true,
                    customer: true,
                    haircut: true
                }
            });
        });
    }
    finishSchedule(schedule_id, user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (schedule_id === '' || user_id === '') {
                throw new Error("Error!");
            }
            try {
                const belongsToUser = yield prisma.services.findFirst({
                    where: {
                        id: schedule_id,
                        user_id: user_id,
                    }
                });
                if (!belongsToUser) {
                    throw new Error("Not authorized");
                }
                yield prisma.services.delete({
                    where: {
                        id: schedule_id
                    }
                });
                return { message: "Completed successfully" };
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
                throw new Error("Ocorreu um erro inesperado");
            }
        });
    }
}
exports.ScheduleRepository = ScheduleRepository;
