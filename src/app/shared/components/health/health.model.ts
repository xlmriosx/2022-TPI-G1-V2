export interface Health {
    id: number
    description: string
    services: { id: number; description: string }[]
}