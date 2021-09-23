export interface UserInterface{ id: Number }

export interface User extends UserInterface{
    name: string,
    email: string,
    password: number
}