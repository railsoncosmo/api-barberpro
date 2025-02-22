import { UserRepository } from "../../repository/user/UserRepository";
import { CreateUserDto } from "../../dto/CreateUserDto";
import { hash } from "bcryptjs";

export interface UserRequest {
  name: string;
  email: string;
  endereco: string;
  password: string;
}

const userRepository = new UserRepository();

class CreateUserService {
  async userRegister({ name, email, endereco, password }: UserRequest): Promise<CreateUserDto> {
    if (!email) {
      throw new Error("Email incorrect");
    }

    const userAlreadyExists = await userRepository.findUserByEmail(email);

    if (userAlreadyExists) {
      throw new Error("Email already exists");
    }

    try {
      const passwordHash = await hash(password, 10);
      const user = await userRepository.createUser({
        name,
        email,
        endereco,
        password: passwordHash,
      });

      return {
        id: user.id,
        name: user.name,
        email: user.email,
        endereco: endereco
      };

    } catch (error) {
      throw new Error("Unable to register user.");
    }
  }
}

export { CreateUserService };
