import { Request, Response } from 'express';
import { AuthUserService } from "../../services/user/AuthUserService";

const authUserService = new AuthUserService();

class AuthUserController {
    async signIn(req: Request, res: Response) {
        const { email, password } = req.body;

        const auth = await authUserService.authUser({
            email,
            password
        });

        return res.json(auth);
    }
}

export { AuthUserController };