export interface UserInterface {
    email: string;
    password: string
}

export interface UserModelInterface {
    email: string;
    name: string;
    password: string
    repassword?: string | undefined
    agree: boolean
}