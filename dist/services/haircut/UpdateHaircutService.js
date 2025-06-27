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
exports.UpdateHaircutService = void 0;
const HaircutRepository_1 = require("../../repository/prisma/haircut/HaircutRepository");
const UserRepository_1 = require("../../repository/prisma/user/UserRepository");
const haircutRepository = new HaircutRepository_1.HaircutRepository();
const userRepository = new UserRepository_1.UserRepository();
class UpdateHaircutService {
    updateHaircuts(_a) {
        return __awaiter(this, arguments, void 0, function* ({ user_id, haircut_id, name, price, status = true }) {
            var _b;
            const user = yield userRepository.detailByUser(user_id);
            if (((_b = user === null || user === void 0 ? void 0 : user.subscriptions) === null || _b === void 0 ? void 0 : _b.status) !== 'active') {
                throw new Error("User unauthorized");
            }
            const haircut = yield haircutRepository.updateHaircut(haircut_id, name, price, status);
            return haircut;
        });
    }
}
exports.UpdateHaircutService = UpdateHaircutService;
