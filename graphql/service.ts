import { applyGraphQL } from "https://deno.land/x/oak_graphql/mod.ts";

import Querys from "./querys.ts";
import Mutations from "./mutations.ts";
import Types from "./typeDef.ts";

const GraphQLService = await applyGraphQL({
    usePlayground: true,
    typeDefs: Types,
    resolvers: {
        Query: Querys.Query,
        Mutation: Mutations.Mutation
    }
})

export default GraphQLService;