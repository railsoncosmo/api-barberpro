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
exports.HaircutRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class HaircutRepository {
    createHaircut(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.haircut.create({
                data,
            });
        });
    }
    quantityHaircuts(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.haircut.count({
                where: { user_id: user_id }
            });
        });
    }
    listHaircuts(user_id, status) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.haircut.findMany({
                where: {
                    user_id: user_id,
                    status: status === 'true' ? true : false
                }
            });
        });
    }
    updateHaircut(haircut_id, name, price, status) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.haircut.update({
                where: {
                    id: haircut_id
                },
                data: {
                    name: name,
                    price: price,
                    status: status === true ? true : false
                }
            });
        });
    }
    countHaircuts(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.haircut.count({
                where: {
                    user_id: user_id
                }
            });
        });
    }
    detailHaircut(haircut_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.haircut.findUnique({
                where: {
                    id: haircut_id,
                }
            });
        });
    }
}
exports.HaircutRepository = HaircutRepository;
