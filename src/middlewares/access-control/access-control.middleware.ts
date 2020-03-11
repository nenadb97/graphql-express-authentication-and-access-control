import { IUser } from "../../interfaces/fake-db.interface";

export const isAllowed = (user: IUser, roles: string[] = []): boolean => {

    if (!user || roles.length === 0) {
        return false;
    }

    const rolesAccess = roles.map((roleToCheck) => user.roles.indexOf(roleToCheck) !== -1);

    return rolesAccess.every((access) => access);
};
