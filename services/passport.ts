import passport from "passport";
import { Strategy as GoogleStartegy } from "passport-google-oauth20";
import { model } from "mongoose";

import keys from "../config/keys";
import { UserModel } from "../models/User";

declare global {
  namespace Express {
    interface User {
      username?: string;
      id?: number | undefined;
    }
  }
}

const User: UserModel = model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const foundUser = await User.findById(id);
  done(null, foundUser);
});

passport.use(
  new GoogleStartegy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        done(null, existingUser);
      } else {
        // No user was found, create a new one
        const newUser = await new User({ googleId: profile.id }).save();
        done(null, newUser);
      }
    }
  )
);
