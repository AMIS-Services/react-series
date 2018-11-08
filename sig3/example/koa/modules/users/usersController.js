import Router from "koa-router";
import User from "./usersSchema";
import bcrypt from "bcrypt";
import { isAuth } from "../auth/helpers";

export const router = new Router();

router.post("/", async ctx => {
  console.log(`POST /users`);
  const user = ctx.request.body;
  if (User.findOne({ email: user.email })) {
    const error = "User with this email already exists";
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
