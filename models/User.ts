import { Schema, model } from "mongoose";

interface User {
  googleId: string;
}

const schema = new Schema<User>({
  googleId: { type: String, required: true },
});

const userModel = model<User>("users", schema);

export type UserModel = typeof userModel;
