import jwt from "koa-jwt";

export const isAuth = jwt({ secret: "super veilige key" });
