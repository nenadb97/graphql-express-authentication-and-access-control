import * as glob from 'glob';
import { readFileSync } from 'fs';
import { join } from 'path';

export const TypeDefinition = {
    Authorized: 1,
    Unauthorized: 0
};

// Load GraphQL files for authorized schema
const authorizedGraphql = glob.sync(join(__dirname, './authorized/**/*.graphql'));

// Load GraphQL files for unauthorized schema
const unauthorizedGraphql = glob.sync(join(__dirname, './unauthorized/**/*.graphql'));

export const generateTypeDefinitions = (definitionType) => {
    const toGenerate = definitionType === TypeDefinition.Authorized ? authorizedGraphql : unauthorizedGraphql;

    return toGenerate.map((item) => readFileSync(item).toString()).join('');
};
