
export interface CreateUserDto {
    id: string
    user_id?: string 
    name: string
    email: string
    endereco: string
    subscriptions?: {
        id: string
        status: string
        priceId: string
    }
}