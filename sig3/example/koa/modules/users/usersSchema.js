import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true },
    username: { type: String, unique: true },
    password: { type: String }
  },
  { timestamps: true }
);

UserSchema.set("toJSON", {
  transform: (doc, ret, opt) => {
    delete ret["password"];
  }
});

const User = mongoose.model("User", UserSchema);

export default User;
