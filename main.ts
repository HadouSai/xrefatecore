import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

import { oakCors } from "https://deno.land/x/cors/mod.ts";

import Logger from "./middleware/logger.ts";
import ResponseTime from "./middleware/response-time.ts";
import GraphQLService from "./graphql/service.ts";

const app = new Application();

const env = config();
const HOST = env.APP_HOST || "http://localhost";
const PORT = +env.APP_PORT || 4000;

app.use(
    oakCors({
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
        allowedHeaders: ['Content-Type', 'Authorization'],
        methods: ['POST', 'GET']
    }),
);

app.use(async (ctx, next) => Logger.logger(ctx, next))

app.use(async (ctx, next) => ResponseTime.responseTime(ctx, next))

app.use(GraphQLService.routes(), GraphQLService.allowedMethods());

console.log(`server is Started on ${HOST}:${PORT}/graphql`)
await app.listen({ port: PORT })

