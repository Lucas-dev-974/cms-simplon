import { UserInterface } from "../../Interfaces/UserInterface";

export interface Customer extends UserInterface{
    name: string,
    email: string,
    password: number
}