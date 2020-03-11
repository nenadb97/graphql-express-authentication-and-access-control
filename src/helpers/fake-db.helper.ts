import { IBook, IUser } from "../interfaces/fake-db.interface";

const ACCESS_TOKEN_FIRST_USER = '46c6fc7264db4967de2a55eb091efb649603fd4e';
const ACCESS_TOKEN_SECOND_USER = '66f0765afb53e9785122ff58b93db173e167221e';

export const ACCESS_TOKENS = [
    ACCESS_TOKEN_FIRST_USER,
    ACCESS_TOKEN_SECOND_USER
];

export const USER_ROLES = {
    View: 'view',
    Delete: 'delete'
};

export const users: IUser[] = [
    {
        email: 'john@doe.com',
        token: ACCESS_TOKEN_FIRST_USER,
        roles: [USER_ROLES.View],
        password: 'SomePassword123'
    },
    {
        email: 'jane@doe.com',
        token: ACCESS_TOKEN_SECOND_USER,
        roles: [USER_ROLES.View, USER_ROLES.Delete],
        password: 'AnotherPassword321'
    }
];

export const books: IBook[] = [
    {
        id: 1,
        title: 'Hamlet',
        author: 'William Shakespeare',
        pagesNumber: 162
    },
    {
        id: 2,
        title: 'The Old Man and the Sea',
        author: 'Ernest Hemingway',
        pagesNumber: 127
    }
];
