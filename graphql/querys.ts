import db from "../config/database.ts";
import Resolver from "./resolver.ts";

const usersDb = db.collection("users");

export default {
    Query: {
        users: async () => {
            const users = await Resolver.getUsers();

            return users.map((user: any) => {
                const { _id: { "\$oid": id } } = user;
                user.id = id;
                return user;
            })
        }
    }
}