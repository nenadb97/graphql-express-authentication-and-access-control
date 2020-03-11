import { makeExecutableSchema } from 'graphql-tools';
import { generateTypeDefinitions, TypeDefinition } from "./type.generator";
import { RESOLVERS } from "./resolver.register";

export const generateSchema = (authorized = false) => {

    // Collect resolvers and type definitions based on auth
    const resolvers = authorized ? RESOLVERS.authorized : RESOLVERS.unauthorized;
    const typeDefs = authorized ? generateTypeDefinitions(TypeDefinition.Authorized) : generateTypeDefinitions(TypeDefinition.Unauthorized);

    return makeExecutableSchema({
        resolvers,
        typeDefs,
    });
};
