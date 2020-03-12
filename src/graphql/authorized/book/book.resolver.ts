import BookQueryService from "./book.query.service";
import BookMutationService from "./book.mutation.service";
import { middlewareCheck, MiddlewareType } from "../../../middlewares/middleware.check";
import { USER_ROLES } from "../../../helpers/fake-db.helper";

const bookQueryService = new BookQueryService();
const bookMutationService = new BookMutationService();

const bookResolver = {
    Query: {
        getBookById(parent, {id}, ctx) {
            middlewareCheck([{ type: MiddlewareType.AUTH }, {type: MiddlewareType.ACL, roles: [USER_ROLES.View]}], ctx);

            return bookQueryService.getById(id);
        },
        getAllBooks(parent, _, ctx) {
            middlewareCheck([{ type: MiddlewareType.AUTH }, {type: MiddlewareType.ACL, roles: [USER_ROLES.View]}], ctx);
            return bookQueryService.getAll();
        }
    },
    Mutation: {
        deleteBookById(parent, {id}, ctx) {
            middlewareCheck([{ type: MiddlewareType.AUTH }, {type: MiddlewareType.ACL, roles: [USER_ROLES.Delete]}], ctx);
            return bookMutationService.deleteById(id);
        }
    }
};

export default bookResolver;
