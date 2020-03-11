import { IUser } from "./fake-db.interface";
import { MiddlewareType } from "../middlewares/middleware.check";

export interface IMiddlewareCheckInputType {
    type: MiddlewareType,
    roles?: string[]
}

export interface IContext {
    user: IUser,
    isAuthenticated: boolean
}
