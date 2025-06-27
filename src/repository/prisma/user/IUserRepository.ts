import { User } from "@prisma/client";
import { UserRequest } from "../../../services/user/CreateUserService";
import { UserDto, UserAuth } from "../../../dto/user/UserDto";

interface IUserRespository {
  createUser(data: UserRequest): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findByUser(user_id: string): Promise<User | null>;
  findByAuthUser(email: string, _password: string): Promise<UserAuth | null>;
  detailByUser(user_id: string): Promise<UserDto>;
  updateByUser(user_id: string, name: string, endereco: string): Promise<UserDto>;
  checkSubscription(user_id: string): Promise<UserDto>;
}

export { IUserRespository }