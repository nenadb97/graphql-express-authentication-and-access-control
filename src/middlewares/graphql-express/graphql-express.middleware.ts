import { graphqlExpress } from "apollo-server-express/dist/expressApollo";
import { Request } from "express";
import { generateSchema } from "../../graphql/schema.generator";
import { IContext } from "../../interfaces/middleware.check.interface";

export const generateMiddlewareGraphql = () => {
    return graphqlExpress(
        async (request: Request & IContext) => {
            const schema = generateSchema(request.isAuthenticated);

            const context = {
                isAuthenticated: false
            };

            // If user is authenticated attach additional info to context
            if (request.isAuthenticated) {
                Object.assign(context, {
                    isAuthenticated: true,
                    user: request.user
                })
            }

            return Object.assign({
                schema,
                context,
                formatError: (error) => error.message
            });

        })
};
