import * as glob from 'glob';
import { readFileSync } from 'fs';
import { join } from 'path';

export const TypeDefinition = {
    Authorized: 1,
    Unauthorized: 0
};

const authorizedGraphql = glob.sync(join(__dirname, './authorized/**/*.graphql'));
const unauthorizedGraphql = glob.sync(join(__dirname, './unauthorized/**/*.graphql'));

export const generateTypeDefinitions = (definitionType) => {
    const toGenerate = definitionType === TypeDefinition.Authorized ? authorizedGraphql : unauthorizedGraphql;

    return toGenerate.map((item) => readFileSync(item).toString()).join('');
};
