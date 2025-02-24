import { AuthUserRepository } from "../../repository/user/UserRepository"
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface AuthRequest {
    email: string
    password: string
}

const authUserRepository = new AuthUserRepository();

class AuthUserService {
    async authUser({ email, password }: AuthRequest) {

        const user = await authUserRepository.findByUser(email, password)

        if(!user){
            throw new Error("Email/password incorrect")
        }


        const passwordMatch = await compare(password, user?.password)

        if(!passwordMatch){
            throw new Error("Email/password incorrect")
        }

        const token = sign(
            {
                name: user.name,
                email: user.email,
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return {
            id: user?.id,
            name: user?.name,
            email: user?.email,
            endereco: user?.endereco,
            token: token,
            //Retorna se o usuario tem assinatura
             subscriptions: user.subscriptions ? {
                id: user?.subscriptions?.id,
                status: user?.subscriptions?.status
             } : null
        }
    }
}

export { AuthUserService }