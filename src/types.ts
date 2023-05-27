export interface LoggedUser {
    id: number
    name: string
    token: string
}

export interface Response {
    success: boolean
    message?: string
}