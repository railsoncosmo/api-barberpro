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
exports.CreateScheduleService = void 0;
const ScheduleRepository_1 = require("../../repository/prisma/schedule/ScheduleRepository");
const scheduleRepository = new ScheduleRepository_1.ScheduleRepository();
class CreateScheduleService {
    schedule(_a) {
        return __awaiter(this, arguments, void 0, function* ({ user_id, haircut_id, customer }) {
            const schedule = yield scheduleRepository.scheduleClient({
                user_id,
                haircut_id,
                customer
            });
            return schedule;
        });
    }
}
exports.CreateScheduleService = CreateScheduleService;
