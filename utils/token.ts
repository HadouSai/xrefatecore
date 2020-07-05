import { validateJwt } from "https://deno.land/x/djwt/validate.ts";
import { makeJwt, setExpiration, Jose, Payload } from "https://deno.land/x/djwt/create.ts";

const key = "your-secret$1-/0";

const header: Jose = {
    alg: "HS256",
    typ: "JWT"
};

export default {
    generateToken(userId: string): string {
        const payload: Payload = {
            uid: userId,
            exp: setExpiration(new Date().getTime() + 60000),
        };

        return makeJwt({ key, header, payload });
    },

    async validateToken(jwt: any) {
        return (await validateJwt(jwt, key)).isValid;
    }
}