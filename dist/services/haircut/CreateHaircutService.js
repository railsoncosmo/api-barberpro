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
exports.CreateHaircutService = void 0;
const HaircutRepository_1 = require("../../repository/prisma/haircut/HaircutRepository");
const UserRepository_1 = require("../../repository/prisma/user/UserRepository");
const haircutRepositoy = new HaircutRepository_1.HaircutRepository();
const userRepository = new UserRepository_1.UserRepository();
class CreateHaircutService {
    haircutRegister(_a) {
        return __awaiter(this, arguments, void 0, function* ({ user_id, name, price }) {
            var _b;
            if (!name || !price) {
                throw new Error("Error create haircut!");
            }
            const myHaircuts = yield haircutRepositoy.quantityHaircuts(user_id);
            const user = yield userRepository.detailByUser(user_id);
            // Controle de assinatura, usuario free limitado a criar 3 haircuts
            if (myHaircuts >= 3 && ((_b = user === null || user === void 0 ? void 0 : user.subscriptions) === null || _b === void 0 ? void 0 : _b.status) !== 'active') {
                throw new Error("User unauthorized");
            }
            const haircut = yield haircutRepositoy.createHaircut({
                user_id,
                name,
                price
            });
            return haircut;
        });
    }
}
exports.CreateHaircutService = CreateHaircutService;
