import authResolver from "./unauthorized/auth/auth.resolver";
import bookResolver from "./authorized/book/book.resolver";

export const RESOLVERS = {
    authorized: [
        bookResolver
    ],
    unauthorized: [
        authResolver
    ]
};
