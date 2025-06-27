
export interface UserDto {
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

export interface UserAuth {
    id: string
    name: string
    password: string
    email: string
    endereco: string
    subscriptions?: {
        id: string
        status: string
        priceId: string
    }
}