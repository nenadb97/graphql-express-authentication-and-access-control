import { users } from "../../../helpers/fake-db.helper";
import { MESSAGE_INVALID_CREDENTIALS } from "../../../helpers/messages";

export default class AuthQueryService {
    login(email: string, password: string): string {
        const user = users.find((item) => item.email === email && item.password === password);

        if (!user) {
            throw new Error(MESSAGE_INVALID_CREDENTIALS);
        }

        return user.token;
    }
}
