import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import AuthMiddleware from "./middlewares/auth/auth.middleware";
import { generateMiddlewareGraphql } from "./middlewares/graphql-express/graphql-express.middleware";

(async () => {
    const PORT = 4444;
    const API_PATH = '/graphql';

    const app = express();
    const graphqlMiddleware = await generateMiddlewareGraphql();

    app.use(cors());
    app.use(bodyParser.json({limit: '501mb'}));

    app.post(API_PATH,
        [
            AuthMiddleware,
            graphqlMiddleware
        ],
    );

    app.listen(PORT, () => {
        console.log(`Graphql server started on http://localhost:${PORT}${API_PATH}`);
    });

})();
