export default {
    async logger(ctx: any, next: any) {
        //next suspende y pasa el control al siguiente middleware
        await next();
        const rt = ctx.response.headers.get("X-Response-Time");
        console.log(ctx.request.method)
        console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
    }
}