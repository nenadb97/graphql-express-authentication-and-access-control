import * as  express from 'express';
import { ACCESS_TOKENS, users } from "../../helpers/fake-db.helper";
import { IUser } from "../../interfaces/fake-db.interface";

export const AuthMiddleware = (request, response, next: express.NextFunction) => {

    request.isAuthenticated = false;

    const authorizationHeader = request.headers.authorization;

    if (!authorizationHeader) {
        return next();
    }

    if (ACCESS_TOKENS.indexOf(authorizationHeader) === -1) {
        return next();
    }

    const user: IUser = users.find((usr) => usr.token === authorizationHeader);

    Object.assign(request, { user, isAuthenticated: true });

    next();

};
export default AuthMiddleware;
