import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: 0 },
    role: { type: String, enum: ["superAdmin", "admin"], default: "admin" },
  },
  {
    timestamps: true,
  }
);

const UserModel = model<TUser>("User", userSchema);

export default UserModel;
