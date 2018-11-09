import Router from "koa-router";
import User from "./usersSchema";
import bcrypt from "bcrypt";
import { isAuth } from "../auth/helpers";

export const router = new Router();

router.post("/", async ctx => {
  console.log(`POST /users`);
  const user = ctx.request.body;
  const existingUser = await User.findOne({ $or: [({ email: user.email }, { username: user.username })] });
  if (!user.email || !user.username || !user.password) {
    const error = `please provide email, username and password`;
    console.log(error);
    ctx.throw(400, error);
  }
  if (existingUser) {
    const error = "This email and/or username are already in use";
    console.log(error);
    ctx.throw(418, error);
  }
  user.password = await bcrypt.hash(user.password, 10);
  const savedUser = await User.create(user);
  ctx.body = savedUser;
});

router.use(isAuth).get("/:id", async ctx => {
  const id = ctx.params.id;
  console.log(`GET user ${id}`);
  const user = await User.findById(id);
  ctx.body = user;
});
