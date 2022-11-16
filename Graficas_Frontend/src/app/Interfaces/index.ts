import { AbstractControl, FormGroup } from "@angular/forms";

export interface StructDataTransport
{
    type: Number,
    status: Number,
    message: any
}

export type StructData = Omit<StructDataTransport, "type">;

export interface Usuario{
    ID_Usuario: number,
    Correo: string,
    Nombre: string,
    Password: string
}

export interface EmitterStruct{
    status: boolean,
    direccion: number
}

export interface LoginForm{
    username: String,
    password: String
}

export interface LoginFormBuild extends FormGroup
{
    value: LoginForm,
    controls:{
        username: AbstractControl,
        password: AbstractControl
    }
}

export interface CreateUser extends LoginForm{
    email: String
}

export interface CreateUserBuild extends FormGroup{
    value: CreateUser,
    controls:{
        username: AbstractControl,
        password: AbstractControl,
        email: AbstractControl
    }
}

export interface CreateUser{
   username: String,
   password1: String,
   password2: String
}
 
export interface CreateUserForm extends FormGroup
{
    value: CreateUser,
    controls:{
        username: AbstractControl,
        password1: AbstractControl,
        password2: AbstractControl
    }
}

export type Days = Number[];