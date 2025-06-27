import { UserRepository } from "../../repository/prisma/user/UserRepository";
import { UserDto } from "../../dto/user/UserDto";

export interface UserRequest {
  name: string;
  email: string;
  endereco: string;
  password: string;
}

const userRepository = new UserRepository();

class CreateUserService {
  async userRegister({ name, email, endereco, password }: UserRequest): Promise<UserDto> {
    if (!email) {
      throw new Error("Email incorrect");
    }

    const userAlreadyExists = await userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("Email already exists");
    }

    try {
      const user = await userRepository.createUser({
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

    } catch (error) {
      throw new Error("Unable to register user.");
    }
  }
}

export { CreateUserService };
