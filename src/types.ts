export interface LoggedUser {
    id: number
    name: string
    surname: string
    token: string
}

export interface Response {
    success: boolean
    message?: string
}