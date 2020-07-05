import Token from "../utils/token.ts";
import db from "../config/database.ts";

const TokensUsed = db.collection("tokensUsed");

export default {
    //valida si el token es correcto
    async tokenUnUsed(token: string) {
        const isValid = Token.validateToken(token);

        if (!isValid) { throw new Error("Token Invalid") }

        const tokenUsed = await TokensUsed.findOne({ token })

        if (tokenUsed) { throw new Error("Token Used") }
    },

    async validateUsers(authorization: any) {

        console.log(authorization)
        //const token = authorization.replace('Bearer ', '');
        //await this.tokenUnUsed(token)
        // return;
    }

}