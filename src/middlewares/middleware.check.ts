import { MESSAGE_YOU_DONT_HAVE_REQUIRED_PERMISSIONS } from "../helpers/messages";
import { isAllowed } from "./access-control/access-control.middleware";
import { IContext, IMiddlewareCheckInputType } from "../interfaces/middleware.check.interface";

export enum MiddlewareType {
    ACL
}

export const middlewareCheck = (data: IMiddlewareCheckInputType[], context: IContext) => {
    data.forEach((item) => {
        switch (item.type) {
            case MiddlewareType.ACL:
                if (!isAllowed(context.user, item.roles)) {
                    throw new Error(MESSAGE_YOU_DONT_HAVE_REQUIRED_PERMISSIONS);
                }

                break;
            default:
                break;
        }
    });
};
