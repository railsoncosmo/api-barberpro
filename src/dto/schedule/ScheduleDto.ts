
export interface ServicesHaircuts {
    id: string
    customer: string
    haircut?: {
        id: string
        name: string
        price: number
        status: boolean
    }
}