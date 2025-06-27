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
exports.UpdateUserService = void 0;
const UserRepository_1 = require("../../repository/prisma/user/UserRepository");
const updateUserRepository = new UserRepository_1.UserRepository();
class UpdateUserService {
    updateUser(_a) {
        return __awaiter(this, arguments, void 0, function* ({ user_id, name, endereco }) {
            try {
                const userAlreadyExists = yield updateUserRepository.findByUser(user_id);
                if (!userAlreadyExists) {
                    throw new Error("User not exists!");
                }
                const updateUser = yield updateUserRepository.updateByUser(user_id, name, endereco);
                return updateUser;
            }
            catch (error) {
                throw new Error("error updating user!");
            }
        });
    }
}
exports.UpdateUserService = UpdateUserService;
