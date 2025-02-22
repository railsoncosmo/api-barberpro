import { Request, Response } from 'express';
import { CreateUserService } from '../../services/user/CreateUserService';

const createUserService = new CreateUserService();

class CreateUserController {
    async register(req: Request, res: Response){
        const { name, email, endereco, password } = req.body;

        const user = await createUserService.userRegister({
            name,
            email,
            endereco,
            password
        })

        return res.status(201).json({ message: "User successfully creates", user })
    }
}

export { CreateUserController };