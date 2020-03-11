export interface IUser {
    email: string;
    token: string;
    roles: string[];
    password: string;
}

export interface IBook {
    id: number;
    title: string;
    author: string;
    pagesNumber: number;
}
