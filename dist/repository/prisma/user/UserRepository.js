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
exports.UserRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class UserRepository {
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const emailUser = yield prisma.user.findUnique({
                where: {
                    email
                }
            });
            return emailUser;
        });
    }
    findByUser(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma.user.findUnique({
                where: {
                    id: user_id
                },
                include: {
                    subscriptions: true,
                },
            });
            return user;
        });
    }
    createUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma.user.create({
                data,
            });
            return user;
        });
    }
    findByAuthUser(email, _password) {
        return __awaiter(this, void 0, void 0, function* () {
            const authUser = yield prisma.user.findUnique({
                where: {
                    email,
                },
                include: {
                    subscriptions: true
                }
            });
            return authUser;
        });
    }
    detailByUser(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const detailUser = yield prisma.user.findFirst({
                where: {
                    id: user_id
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    endereco: true,
                    subscriptions: true
                }
            });
            return detailUser;
        });
    }
    updateByUser(user_id, name, endereco) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedUser = yield prisma.user.update({
                where: {
                    id: user_id
                },
                data: {
                    name,
                    endereco,
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    endereco: true,
                    subscriptions: true
                }
            });
            return updatedUser;
        });
    }
    checkSubscription(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const checkSubUser = yield prisma.user.findFirst({
                where: {
                    id: user_id
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    endereco: true,
                    subscriptions: true
                }
            });
            return checkSubUser;
        });
    }
}
exports.UserRepository = UserRepository;
