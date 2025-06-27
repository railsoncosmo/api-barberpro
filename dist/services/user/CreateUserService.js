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
exports.CreateUserService = void 0;
const UserRepository_1 = require("../../repository/prisma/user/UserRepository");
const userRepository = new UserRepository_1.UserRepository();
class CreateUserService {
    userRegister(_a) {
        return __awaiter(this, arguments, void 0, function* ({ name, email, endereco, password }) {
            if (!email) {
                throw new Error("Email incorrect");
            }
            const userAlreadyExists = yield userRepository.findByEmail(email);
            if (userAlreadyExists) {
                throw new Error("Email already exists");
            }
            try {
                const user = yield userRepository.createUser({
                    name,
                    email,
                    endereco,
                    password,
                });
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    endereco
                };
            }
            catch (error) {
                throw new Error("Unable to register user.");
            }
        });
    }
}
exports.CreateUserService = CreateUserService;
