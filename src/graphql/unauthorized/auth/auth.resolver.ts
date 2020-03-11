import AuthQueryService from "./auth.query.service";

const authQueryService = new AuthQueryService();

const authResolver = {
    Query: {
        login(parent, {email, password}, ctx) {
            return authQueryService.login(email, password);
        },
    }
};

export default authResolver;
